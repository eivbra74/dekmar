// Supabase Edge Function: tripletex (deployet via Management API)
// Henter prosjekter og produkter (m/ kostpriser) fra Tripletex. Kun innloggede
// portal-brukere.
//
// AUTH: Egen/intern integrasjon bruker Tripletex sin JWT-modell (ETT token):
//   1) Selskap > API-nøkler > Opprett nøkkel  ->  JWT (refresh token)
//   2) POST /token/session/:createFromRefreshToken {refreshToken, ttlSeconds}
//      -> sesjonstoken  ->  Basic auth base64("0:" + sessionToken)
// (Consumer/employee-token er kun for kommersielle partnerintegrasjoner.)
// JWT ligger som server-hemmelighet TRIPLETEX_JWT (faller tilbake til
// TRIPLETEX_CONSUMER_TOKEN for bakoverkompat). Verify JWT AV.
import { createClient } from 'jsr:@supabase/supabase-js@2';

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};
const json = (b: unknown, s = 200) =>
  new Response(JSON.stringify(b), { status: s, headers: { ...cors, 'content-type': 'application/json' } });

const BASE = 'https://tripletex.no/v2';

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors });
  if (req.method !== 'POST') return json({ error: 'method not allowed' }, 405);

  const url = Deno.env.get('SUPABASE_URL')!;
  const service = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  // Egen integrasjon = ETT JWT-token (API-noekkel-siden gir alltid en JWT,
  // uansett hva noekkelen kalles). Godta alle secret-navn brukeren kan ha valgt.
  const jwt = (Deno.env.get('TRIPLETEX_JWT') || Deno.env.get('TRIPLETEX_EMPLOYEE_TOKEN') || Deno.env.get('TRIPLETEX_CONSUMER_TOKEN') || '').trim();
  if (!jwt) return json({ error: 'Tripletex API-noekkel (JWT) mangler i miljoevariabler - legg inn som TRIPLETEX_JWT' }, 500);

  const admin = createClient(url, service, { auth: { persistSession: false } });
  const token = (req.headers.get('Authorization') || '').replace('Bearer ', '');
  const { data: { user } } = await admin.auth.getUser(token);
  if (!user) return json({ error: 'unauthorized' }, 401);

  let body: Record<string, unknown> = {};
  try { body = await req.json(); } catch (_e) { /* ignore */ }
  const action = String(body.action || 'projects');

  // 1) veksle JWT (refresh token) inn i et kortlevd sesjonstoken
  const sessRes = await fetch(`${BASE}/token/session/:createFromRefreshToken`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ refreshToken: jwt, ttlSeconds: 3600 }),
  });
  const sessData = await sessRes.json().catch(() => ({}));
  const sessionToken = sessData?.value?.token || sessData?.token;
  if (!sessRes.ok || !sessionToken) {
    const msg = (sessData && (sessData.message || (sessData.validationMessages && sessData.validationMessages[0]?.message))) || `Tripletex-innlogging feilet (${sessRes.status})`;
    return json({ error: msg }, 400);
  }
  const auth = 'Basic ' + btoa('0:' + sessionToken);

  const get = async (endpoint: string) => {
    const r = await fetch(`${BASE}${endpoint}`, { headers: { Authorization: auth } });
    const d = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error((d && (d.message || d.error)) || `Tripletex-feil (${r.status}) paa ${endpoint}`);
    return d.values || [];
  };

  try {
    if (action === 'test') {
      return json({ ok: true, expires: sessData?.value?.expirationDate || null });
    }
    if (action === 'projects') {
      const values = await get('/project?count=1000&fields=id,name,number,displayName,isClosed,customer(name),deliveryAddress(displayName)');
      return json({ ok: true, values });
    }
    if (action === 'products') {
      const values = await get('/product?count=2000&fields=id,name,number,costExcludingVatCurrency,priceExcludingVatCurrency,isInactive,isStockItem,elNumber');
      return json({ ok: true, values });
    }
    return json({ error: 'ukjent action' }, 400);
  } catch (e) {
    return json({ error: (e as Error).message }, 400);
  }
});
