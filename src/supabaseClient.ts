import { createClient } from '@supabase/supabase-js'

// Credenciais do seu projeto Supabase
// Nota: Para produção, recomenda-se usar variáveis de ambiente (.env)
const supabaseUrl = 'https://qlqkyjykudaxuqsrvurn.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFscWt5anlrdWRheHVxc3J2dXJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2OTA3MjgsImV4cCI6MjA5NDI2NjcyOH0.w5dTOpiIySz0mln89xJUeql3a1j3QQIiyAHFpbF9-J8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
