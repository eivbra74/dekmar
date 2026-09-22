// Supabase Edge Function: tripletex (deployet via Management API)
// Henter prosjekter og produkter (m/ kostpriser) fra Tripletex. Kun innloggede
// portal-brukere. TRIPLETEX_CONSUMER_TOKEN + TRIPLETEX_EMPLOYEE_TOKEN som
// server-hemmeligheter. Verify JWT AV.
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
  const consumerToken = (Deno.env.get('TRIPLETEX_CONSUMER_TOKEN') || '').trim();
  const employeeToken = (Deno.env.get('TRIPLETEX_EMPLOYEE_TOKEN') || '').trim();
  if (!consumerToken || !employeeToken) return json({ error: 'TRIPLETEX_CONSUMER_TOKEN / TRIPLETEX_EMPLOYEE_TOKEN mangler i miljoevariabler' }, 500);

  const admin = createClient(url, service, { auth: { persistSession: false } });
  const token = (req.headers.get('Authorization') || '').replace('Bearer ', '');
  const { data: { user } } = await admin.auth.getUser(token);
  if (!user) return json({ error: 'unauthorized' }, 401);

  let body: Record<string, unknown> = {};
  try { body = await req.json(); } catch (_e) { /* ignore */ }
  const action = String(body.action || 'projects');

  // 1) opprett sesjonstoken (gyldig til i morgen)
  const exp = new Date(Date.now() + 24 * 3600 * 1000).toISOString().slice(0, 10);
  const sessUrl = `${BASE}/token/session/:create?consumerToken=${encodeURIComponent(consumerToken)}&employeeToken=${encodeURIComponent(employeeToken)}&expirationDate=${exp}`;
  const sessRes = await fetch(sessUrl, { method: 'PUT' });
  const sessData = await sessRes.json().catch(() => ({}));
  if (!sessRes.ok || !sessData?.value?.token) {
    const msg = (sessData && (sessData.message || (sessData.validationMessages && sessData.validationMessages[0]?.message))) || `Tripletex-innlogging feilet (${sessRes.status})`;
    return json({ error: msg }, 400);
  }
  const sessionToken = sessData.value.token;
  const auth = 'Basic ' + btoa('0:' + sessionToken);

  const get = async (endpoint: string) => {
    const r = await fetch(`${BASE}${endpoint}`, { headers: { Authorization: auth } });
    const d = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error((d && (d.message || d.error)) || `Tripletex-feil (${r.status}) paa ${endpoint}`);
    return d.values || [];
  };

  try {
    if (action === 'test') {
      return json({ ok: true, expires: sessData.value.expirationDate });
    }
    if (action === 'projects') {
      const values = await get('/project?count=1000&fields=id,name,number,displayName,isClosed,customer(name),deliveryAddress(displayName)');
      return json({ ok: true, values });
    }
    if (action === 'products') {
      const values = await get('/product?count=2000&fields=id,name,number,costExcludingVatCurrency,priceExcludingVatCurrency,isInactive,elNumber');
      return json({ ok: true, values });
    }
    return json({ error: 'ukjent action' }, 400);
  } catch (e) {
    return json({ error: (e as Error).message }, 400);
  }
});
