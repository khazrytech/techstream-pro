import { createClient } from '@supabase/supabase-js';

// Tutaweka URL na Key halisi za Supabase yako baadaye kwenye faili la .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://mfano.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'mfano-key';

export const supabase = createClient(supabaseUrl, supabaseKey);
