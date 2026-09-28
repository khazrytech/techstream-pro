import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fqixivwvmtggpuftrnxxq.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxaXhpdndtdGdncHVmdHJueHhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk4OTU2NDIsImV4cCI6MjEwNTQ3MTY0Mn0.6p1CLy1YF_miQSSEK2JsGxS-EqnLQxLfmZB6boZmRWQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
