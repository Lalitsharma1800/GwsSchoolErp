import { supabase } from "../supabaseApi/supabase_Client";



export async function login(userId, pass) {
    const email =   `${userId}@gmail.com`

    const {data, error} = await supabase.auth.signInWithPassword({email: email, password: pass})

    if(error){
        throw error;
    }
}

// Be aware that you may get back an error message that will not distinguish between the cases
//  where the account does not exist or that the email/phone and password combination is wrong
//   or that the account can only be accessed via social login.
