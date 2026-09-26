// Supabase Edge Function: set-user-password
// Lets an ADMIN set/change a user's password directly (for field use where the
// employee has no email access). The service key is used only here on the server
// (never in the frontend). The caller must be logged in AND have role 'admin'
// (verified against profiles), otherwise the call is rejected.
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

  // 1) Caller must be logged in.
  const token = (req.headers.get('Authorization') || '').replace('Bearer ', '');
  const { data: { user } } = await admin.auth.getUser(token);
  if (!user) return json({ error: 'unauthorized' }, 401);

  // 2) Caller must be admin (role read on the server, cannot be faked from frontend).
  const { data: me } = await admin.from('profiles').select('role').eq('id', user.id).single();
  if (!me || me.role !== 'admin') return json({ error: 'forbidden' }, 403);

  // 3) Input.
  let email = '', password = '';
  try { const b = await req.json(); email = (b.email || '').trim().toLowerCase(); password = String(b.password || ''); } catch (_e) { /* ignore */ }
  if (!email) return json({ error: 'email required' }, 400);
  if (password.length < 8) return json({ error: 'password too short (min 8)' }, 400);

  // 4) Find the user in auth (authoritative, independent of profiles.email).
  const { data: list, error: listErr } = await admin.auth.admin.listUsers({ page: 1, perPage: 1000 });
  if (listErr) return json({ error: listErr.message }, 400);
  const found = list && list.users ? list.users.find((u) => (u.email || '').toLowerCase() === email) : null;

  if (found) {
    const { error } = await admin.auth.admin.updateUserById(found.id, { password, email_confirm: true });
    if (error) return json({ error: error.message }, 400);
    return json({ ok: true, mode: 'updated' });
  }

  // 5) Does not exist yet -> create a confirmed user with the password.
  const { error } = await admin.auth.admin.createUser({ email, password, email_confirm: true });
  if (error) return json({ error: error.message }, 400);
  return json({ ok: true, mode: 'created' });
});
