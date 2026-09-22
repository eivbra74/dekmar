// Supabase Edge Function: send-report (deployet via dashboard-editor)
// Sender en generert PDF som e-postvedlegg fra post@dekmar.no via Resend.
// Kun innloggede portal-brukere kan kalle den. RESEND_API_KEY ligger som
// server-hemmelighet (aldri i frontend). Verify JWT skal staa AV - funksjonen
// gjoer sin egen auth-sjekk (samme moenster som invite-user).
import { createClient } from 'jsr:@supabase/supabase-js@2';

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};
const json = (b: unknown, s = 200) =>
  new Response(JSON.stringify(b), { status: s, headers: { ...cors, 'content-type': 'application/json' } });

const FROM = 'Dekmar AS <post@dekmar.no>';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function toList(v: unknown): string[] {
  if (!v) return [];
  const arr = Array.isArray(v) ? v : String(v).split(/[,;]/);
  return arr.map((x) => String(x).trim()).filter((x) => EMAIL_RE.test(x));
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors });
  if (req.method !== 'POST') return json({ error: 'method not allowed' }, 405);

  const url = Deno.env.get('SUPABASE_URL')!;
  const service = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  const resendKey = Deno.env.get('RESEND_API_KEY');
  if (!resendKey) return json({ error: 'RESEND_API_KEY mangler i miljoevariabler' }, 500);

  const admin = createClient(url, service, { auth: { persistSession: false } });

  // Bekreft at kalleren er en innlogget bruker (JWT i Authorization)
  const token = (req.headers.get('Authorization') || '').replace('Bearer ', '');
  const { data: { user } } = await admin.auth.getUser(token);
  if (!user) return json({ error: 'unauthorized' }, 401);

  let body: Record<string, unknown> = {};
  try { body = await req.json(); } catch (_e) { /* ignore */ }

  const to = toList(body.to);
  const cc = toList(body.cc);
  const subject = String(body.subject || '').trim();
  const message = String(body.message || '').trim();
  const pdfBase64 = typeof body.pdfBase64 === 'string' ? body.pdfBase64 : '';
  const pdfFilename = String(body.pdfFilename || 'rapport.pdf').trim() || 'rapport.pdf';

  if (!to.length) return json({ error: 'Mottaker (gyldig e-post) mangler' }, 400);
  if (!subject) return json({ error: 'Emne mangler' }, 400);

  // Enkel HTML-body med linjeskift bevart
  const safe = (s: string) => s.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c] as string));
  const html =
    `<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#1a1a1a;line-height:1.6">` +
    (message ? `<p>${safe(message).replace(/\n/g, '<br>')}</p>` : '') +
    `<p style="margin-top:24px;color:#555">Med vennlig hilsen<br><strong>Dekmar AS</strong><br>` +
    `<a href="https://dekmar.no" style="color:#1a5fb4">dekmar.no</a> &middot; post@dekmar.no</p>` +
    `</div>`;

  const payload: Record<string, unknown> = {
    from: FROM,
    to,
    subject,
    html,
    reply_to: 'post@dekmar.no',
  };
  if (cc.length) payload.cc = cc;
  if (pdfBase64) {
    payload.attachments = [{ filename: pdfFilename, content: pdfBase64 }];
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${resendKey}`, 'content-type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const out = await res.json().catch(() => ({}));
  if (!res.ok) {
    const msg = (out && (out.message || out.error)) || `Resend-feil (${res.status})`;
    return json({ error: msg }, 400);
  }
  return json({ ok: true, id: out.id });
});
