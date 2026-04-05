import {createClient} from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
const supabaseSecretKey = import.meta.env.VITE_SUPABASE_SECRET_KEY

export const supabase = createClient(supabaseUrl, supabasePublishableKey, supabaseSecretKey)