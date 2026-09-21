import { createClient } from '@supabase/supabase-js';

// Dekmar KS – frittstående Supabase-konto (org «Dekmar KS», prosjekt «Dekmar KS», eu-west-1).
// Publishable key er trygg i nettleseren fordi Row Level Security er på for alle tabeller.
// Secret-nøkkelen skal ALDRI ligge her.
export const SUPABASE_URL = 'https://lqubxffanaxstpghiedp.supabase.co';
export const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_bLwTEXjhYy4ihlBKo_Zu7A_35JYKCbI';
export const KS_PHOTO_BUCKET = 'ks-photos';

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    storageKey: 'dekmar-ks-auth',
  },
});
