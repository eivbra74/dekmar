// Supabase Edge Function: translate (deployet via Management API)
// Oversetter norske tekster til engelsk/polsk via DeepL. Kun innloggede
// portal-brukere. DEEPL_API_KEY ligger som server-hemmelighet. Verify JWT AV.
import { createClient } from 'jsr:@supabase/supabase-js@2';

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};
const json = (b: unknown, s = 200) =>
  new Response(JSON.stringify(b), { status: s, headers: { ...cors, 'content-type': 'application/json' } });

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors });
  if (req.method !== 'POST') return json({ error: 'method not allowed' }, 405);

  const url = Deno.env.get('SUPABASE_URL')!;
  const service = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  const key = (Deno.env.get('DEEPL_API_KEY') || '').trim();
  if (!key) return json({ error: 'DEEPL_API_KEY mangler i miljoevariabler' }, 500);

  const admin = createClient(url, service, { auth: { persistSession: false } });
  const token = (req.headers.get('Authorization') || '').replace('Bearer ', '');
  const { data: { user } } = await admin.auth.getUser(token);
  if (!user) return json({ error: 'unauthorized' }, 401);

  let body: Record<string, unknown> = {};
  try { body = await req.json(); } catch (_e) { /* ignore */ }
  const texts = Array.isArray(body.texts) ? (body.texts as unknown[]).map((x) => String(x == null ? '' : x)) : [];
  const targetRaw = String(body.target || 'EN').toUpperCase();
  if (!texts.length) return json({ translations: [] });

  const target_lang = targetRaw === 'PL' ? 'PL' : 'EN-GB';
  const endpoint = key.endsWith(':fx') ? 'https://api-free.deepl.com/v2/translate' : 'https://api.deepl.com/v2/translate';

  // DeepL taaler opptil 50 tekster pr. kall – del opp i biter.
  const out: string[] = [];
  for (let i = 0; i < texts.length; i += 45) {
    const chunk = texts.slice(i, i + 45);
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Authorization': 'DeepL-Auth-Key ' + key, 'content-type': 'application/json' },
      body: JSON.stringify({ text: chunk, target_lang, source_lang: 'NB' }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      const msg = (data && (data.message || data.error)) || `DeepL-feil (${res.status})`;
      return json({ error: msg }, 400);
    }
    (data.translations || []).forEach((t: any) => out.push(t.text));
  }
  return json({ translations: out });
});
