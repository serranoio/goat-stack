import { createClient } from '@supabase/supabase-js';

// Don't forget types.
export const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_ANON_KEY!
);

