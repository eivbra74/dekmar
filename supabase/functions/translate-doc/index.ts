// Supabase Edge Function: translate-doc (deployet via Management API)
// Oversetter et opplastet dokument (Word/PDF/txt) til EN/PL via DeepLs
// dokument-API (bevarer formatering). Kun innloggede portal-brukere.
// DEEPL_API_KEY som server-hemmelighet. Verify JWT AV.
import { createClient } from 'jsr:@supabase/supabase-js@2';

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};
const json = (b: unknown, s = 200) =>
  new Response(JSON.stringify(b), { status: s, headers: { ...cors, 'content-type': 'application/json' } });
const b64 = (buf: ArrayBuffer) => {
  const bytes = new Uint8Array(buf); let bin = '';
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode.apply(null, Array.from(bytes.subarray(i, i + 0x8000)) as any);
  return btoa(bin);
};
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors });
  if (req.method !== 'POST') return json({ error: 'method not allowed' }, 405);

  const url = Deno.env.get('SUPABASE_URL')!;
  const service = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  const key = (Deno.env.get('DEEPL_API_KEY') || '').trim();
  if (!key) return json({ error: 'DEEPL_API_KEY mangler i miljoevariabler' }, 500);
  const base = key.endsWith(':fx') ? 'https://api-free.deepl.com' : 'https://api.deepl.com';

  const admin = createClient(url, service, { auth: { persistSession: false } });
  const token = (req.headers.get('Authorization') || '').replace('Bearer ', '');
  const { data: { user } } = await admin.auth.getUser(token);
  if (!user) return json({ error: 'unauthorized' }, 401);

  let body: Record<string, unknown> = {};
  try { body = await req.json(); } catch (_e) { /* ignore */ }
  const path = String(body.path || '');
  const bucket = String(body.bucket || 'ks-docs');
  const filename = String(body.filename || 'dokument');
  const target_lang = String(body.target || 'EN').toUpperCase() === 'PL' ? 'PL' : 'EN-GB';
  if (!path) return json({ error: 'path mangler' }, 400);

  // 1) hent filen fra Storage
  const dl = await admin.storage.from(bucket).download(path);
  if (dl.error || !dl.data) return json({ error: 'Kunne ikke hente filen: ' + (dl.error?.message || '') }, 400);
  const fileBuf = await dl.data.arrayBuffer();

  // 2) last opp til DeepL dokument-API
  const up = new FormData();
  up.append('target_lang', target_lang);
  up.append('source_lang', 'NB');
  up.append('file', new Blob([fileBuf]), filename);
  const upRes = await fetch(base + '/v2/document', { method: 'POST', headers: { 'Authorization': 'DeepL-Auth-Key ' + key }, body: up });
  const upData = await upRes.json().catch(() => ({}));
  if (!upRes.ok) return json({ error: (upData && (upData.message || upData.error)) || `DeepL-opplasting feilet (${upRes.status})` }, 400);
  const { document_id, document_key } = upData;

  // 3) poll status til ferdig (maks ~110s)
  let status = 'queued';
  for (let i = 0; i < 55; i++) {
    await sleep(2000);
    const st = await fetch(base + `/v2/document/${document_id}`, { method: 'POST', headers: { 'Authorization': 'DeepL-Auth-Key ' + key, 'content-type': 'application/json' }, body: JSON.stringify({ document_key }) });
    const sd = await st.json().catch(() => ({}));
    status = sd.status;
    if (status === 'done') break;
    if (status === 'error') return json({ error: 'DeepL-oversettelse feilet: ' + (sd.message || sd.error_message || '') }, 400);
  }
  if (status !== 'done') return json({ error: 'Tidsavbrudd – dokumentet var for stort/tregt. Prøv et mindre dokument.' }, 408);

  // 4) hent resultatet (binaert)
  const res = await fetch(base + `/v2/document/${document_id}/result`, { method: 'POST', headers: { 'Authorization': 'DeepL-Auth-Key ' + key, 'content-type': 'application/json' }, body: JSON.stringify({ document_key }) });
  if (!res.ok) return json({ error: `Kunne ikke hente oversatt dokument (${res.status})` }, 400);
  const outBuf = await res.arrayBuffer();
  return json({ ok: true, fileBase64: b64(outBuf), contentType: res.headers.get('content-type') || 'application/octet-stream' });
});
