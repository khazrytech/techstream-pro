import { createClient } from '@supabase/supabase-js';

// Hapa tunatumia Environment Variables ulizoweka Vercel, na dummy URL ikikosekana
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://mfano.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'mfano_key';

export const supabase = createClient(supabaseUrl, supabaseKey);
