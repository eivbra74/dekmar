// Supabase Edge Function: invite-user
// Sender e-postinvitasjon til en ny ansatt. Kun innloggede brukere kan kalle den.
// Service-nøkkelen brukes kun her på serveren (aldri i frontend).
import { createClient } from 'jsr:@supabase/supabase-js@2';

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, 'content-type': 'application/json' } });

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors });
  if (req.method !== 'POST') return json({ error: 'method not allowed' }, 405);

  const url = Deno.env.get('SUPABASE_URL')!;
  const anon = Deno.env.get('SUPABASE_ANON_KEY')!;
  const service = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  const authHeader = req.headers.get('Authorization') ?? '';

  // 1) Bekreft at kalleren er innlogget
  const asUser = createClient(url, anon, { global: { headers: { Authorization: authHeader } } });
  const { data: { user }, error: authErr } = await asUser.auth.getUser();
  if (authErr || !user) return json({ error: 'unauthorized' }, 401);

  // 2) Hent e-post
  let email = '';
  try { email = (await req.json()).email?.trim() ?? ''; } catch { /* ignore */ }
  if (!email) return json({ error: 'email required' }, 400);

  // 3) Inviter via admin-API
  const admin = createClient(url, service);
  const { error } = await admin.auth.admin.inviteUserByEmail(email, {
    redirectTo: 'https://dekmar.no/ks/portal/?setpw=1',
  });
  if (error) return json({ error: error.message }, 400);
  return json({ ok: true });
});
