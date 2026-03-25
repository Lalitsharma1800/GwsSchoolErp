import { supabase } from "./supabase";
import store from "./../store/store"
import { loggedin, loggedout, setSession, setRole, setEmail, setUserId, setName } from "./../store/authSlice";

// it contains login, logout, change pass, and add user

// const dispatch = useDispatch();

export class Authentication{
    async  authState() {
                try{
                    const { data:{subscription},error } =  supabase.auth.onAuthStateChange((event, session) => {

                        if (event === 'INITIAL_SESSION') {
                            store.dispatch(setSession(session))
                        } else if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
                            getSession();
                        } else if (event === 'SIGNED_OUT') {
                        
                        } else if (event === 'PASSWORD_RECOVERY') {
                            // handle password recovery event
                        } else {
                            // handle user updated event
                        }
                        })

                        return () => {
                            subscription.unsubscribe();
                        };
                }
                catch(error){
                    throw error;
                }
    }
    async  getSession() {
        try{
            const {data,error} = await supabase.auth.getSession();
            
            const session = data.session;
            if(error) throw error;
            if(!data) throw new Error("System Error");
            if(!session) throw new Error("Session Not Fount");
    
            store.dispatch(setSession(session));
            return session;
        }
        catch(error){
            throw error;
        }
    }
    async  getUser() {
        try{
            const {data:{user},error} = await supabase.auth.getUser();
        

            if(!user){
                throw new Error("User Not Found");
            }
            else if(error){
                throw error;
            }
            else{
                store.dispatch(setUserId(user.id))
                store.dispatch(setEmail(user.email))
                return user;
            }
        }
        catch(error){
            throw error;
        }
    }
    async getRole(id) {
        try{
            const {data, error} =  await supabase
                                .from('profile_users') 
                                .select(`role,name`) 
                                .eq('id', id)
                                .single()

            if(error){
                        throw error;
            }
            else if(!data ){
                throw error("user data not found");
            }
            else{
                store.dispatch(setName(data.name))
                store.dispatch(setRole(data.role))
                return data.role;
            }
        }
        catch(error){
            throw error;
        }
    }
    async login(gmail, password){
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
                    if(!user) throw new Error("Invalid Credentials, user not found")

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
    async logout() {
        try{
            const { error } = await supabase.auth.signOut()
            
            if(error){
                throw new Error("logout failed try again")
            }
            console.log("loggedOut Successfully")
            store.dispatch(loggedout());
        }
        catch(error){
            throw error;
        }
    }
}
const authentication = new Authentication();
export default authentication;



export async function authState() {
    try{
        const { data } =  supabase.auth.onAuthStateChange((event, session) => {
            console.log(event, session)
            if (event === 'INITIAL_SESSION') {
                store.dispatch(setSession(session))
            } else if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
                getSession();
            } else if (event === 'SIGNED_OUT') {
              
            } else if (event === 'PASSWORD_RECOVERY') {
                // handle password recovery event
            } else if (event === 'USER_UPDATED') {
                // handle user updated event
            }
            })
            return data;
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
            
            if(!data || data && !data.session) {return data}

            throw new Error("Session not found2")};

        store.dispatch(setSession(data.session));
        return data;
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
            return data;
        }
        store.dispatch(setUserId(data.user.id))
        store.dispatch(setEmail(data.user.email))
        return data.user;
    }
    catch(error){
        throw error;
    }
}

export async function getRole(id) {
    try{
        const {data, error} =  await supabase
                            .from('profile_users') 
                            .select(`role,name`) 
                            .eq('id', id)
                            .single()

        if(error){
                    throw error;
        }
        else if(!data ){
            console.error(`error in getrole`)
        }
        else{
            store.dispatch(setName(data.name))
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
                if(!user) throw new Error("Invalid Credentials, user not found")

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


