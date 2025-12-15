import { createClient } from "@supabase/supabase-js";
import { supabase } from "../supabaseApi/supabase_Client";


// const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY)

export async function login(userId, pass) {
    const email =   `${userId}@gmail.com`

    const {data, error} = await supabase.auth.signInWithPassword({
        email: email,
        password: pass
    })

    if(error){
        throw error
        return data;
    }
}


