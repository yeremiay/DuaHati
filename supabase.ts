import { createClient } from '@supabase/supabase-js';

// Ambil Project URL dan Anon Key dari Dashboard Supabase kamu
const supabaseUrl = 'https://xyzabc.supabase.co';
const supabaseAnonKey = 'eyJh......';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);