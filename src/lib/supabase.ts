import { createClient } from '@supabase/supabase-js';

// Tunaweka fallback yenye mfumo wa link halisi ili Next.js isigome wakati wa Build
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://mfano.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'mfano_key';

export const supabase = createClient(supabaseUrl, supabaseKey);
