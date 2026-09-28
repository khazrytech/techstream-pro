import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://fqixivwmtggpuftrnxxq.supabase.co"
const supabaseKey = "sb_publishable_VhSD2Thx5qKL383FRa1t3Q_xmICS0S1"

export const supabase = createClient(supabaseUrl, supabaseKey)
