import { createClient } from '@supabase/supabase-js'

// Don't forget types.
export const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
)
