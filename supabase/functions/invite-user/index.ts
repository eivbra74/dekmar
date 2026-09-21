// Supabase Edge Function: invite-user (deployet via dashboard-editor)
// Sender e-postinvitasjon til en ny ansatt. Kun innloggede brukere kan kalle den.
// Service-nøkkelen brukes kun her på serveren (aldri i frontend).
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
  const admin = createClient(url, service, { auth: { persistSession: false } });

  // Bekreft at kalleren er en innlogget bruker (JWT i Authorization)
  const token = (req.headers.get('Authorization') || '').replace('Bearer ', '');
  const { data: { user } } = await admin.auth.getUser(token);
  if (!user) return json({ error: 'unauthorized' }, 401);

  let email = '';
  try { email = ((await req.json()).email || '').trim(); } catch (_e) { /* ignore */ }
  if (!email) return json({ error: 'email required' }, 400);

  const { error } = await admin.auth.admin.inviteUserByEmail(email, {
    redirectTo: 'https://dekmar.no/ks/portal/?setpw=1',
  });
  if (error) return json({ error: error.message }, 400);
  return json({ ok: true });
});
