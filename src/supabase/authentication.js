import { supabase } from "./supabase";
import store from "./../store/store"
import { loggedin, loggedout, setSession, setRole } from "./../store/authSlice";

// it contains login, logout, change pass, and add user

// const dispatch = useDispatch();

export async function authState() {
    try{
        const { data } =  supabase.auth.onAuthStateChange((event, session) => {
            console.log(event, session)
            if (event === 'INITIAL_SESSION') {
                store.dispatch(setSession(session))
            } else if (event === 'SIGNED_IN') {
                getSession();
            } else if (event === 'SIGNED_OUT') {
              
            } else if (event === 'PASSWORD_RECOVERY') {
                // handle password recovery event
            } else if (event === 'TOKEN_REFRESHED') {
                getSession()
            } else if (event === 'USER_UPDATED') {
                // handle user updated event
            }
            })
    }
    catch(error){
        throw error;
    }
}

// it  returns session object which contains data such as role and etc
export async function getSession() {
    try{
        const {data,error} = await supabase.auth.getSession();
        
        if(error || !data || !data.session){ 
            
            if(!data || data && !data.session) {throw new Error("Session not found1")}

            throw new Error("Session not found2")};

        store.dispatch(setSession(data.session));
        return data.session;
    }
    catch(error){
        throw error;
    }

}

// it returns user object which contains data such as role and etc
export async function getUser() {
    try{
        const {data,error} = await supabase.auth.getUser();

        if(error || !data || !data.user){
            throw new Error("Invalid Credentials and error in getuser")
        }
        return data.user;
    }
    catch(error){
        throw error;
    }
}

export async function getRole(id) {
    try{
        const {data, error} =  await supabase
                            .from('user_profiles') 
                            .select('role') 
                            .eq('id', id)
                            .single()

        if(error){
            console.log(error)
                    throw error;
        }
        else if(!data ){
            console.error(`error in getrole`)
        }
        else{
            store.dispatch(setRole(data.role))
            return data.role;
        }
    }
    catch(error){
        throw error;
    }
}

// login returns user object which contains data such as role and etc
export  async function login(gmail, password){


    try{
         const {data, error} = await supabase.auth.signInWithPassword({email:gmail, password: password})

         if(error || !data){
            console.log(error)
            throw new Error("Invalid Credentials 1");
         }

        try{
            const session = await getSession();

            if(!session){
                throw new Error("Invalid Credential and session not found")
            }

            try{
                const user = await getUser();
                if(!user) throw new Error("Invalid Credentials user not found")

                else{
                  const role = await getRole(user.id)
                  return role;
                }
                
            }
            catch(error){
                throw error;
            }
        }
        catch(error){
            throw error;
        }
    }
    catch(error){
        throw error;
    }
}

// logout
export async function logout() {
    try{
        const { error } = await supabase.auth.signOut()
        
        if(error){
            throw new Error("logout failed try again")
        }
        console.log("logged out zzzzzzzz")
        store.dispatch(loggedout());
    }
    catch(error){
        throw error;
    }
}


