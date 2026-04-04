import { supabase } from "./supabase";
import store from "./../store/store"
import {loggedout, setSession, setRole, setEmail, setUserId, setName } from "./../store/authSlice";

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
    // it  returns session object which contains data such as role and etc
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
    // it returns user object which contains data such as role and etc
    async  getUser() {
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
    // it returns users role and name and sends to store
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
                console.log(data.name)
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
    async login(gmail, password){
        
            const {data, error} = await supabase.auth.signInWithPassword({email:gmail, password: password})

            if(error || !data){
                console.log(error)
                throw new Error("Invalid Credentials 1");
            }
            
                const session = await authentication.getSession();

                if(!session){
                    throw new Error("Invalid Credential and session not found")
                }

                    const user = await authentication.getUser();
                    if(!user) throw new Error("Invalid Credentials, user not found")

                    else{
                        const role = await authentication.getRole(user.id)
                        return role;
                    }
        }
    // logout
    async logout() {
            const { error } = await supabase.auth.signOut()
            
            if(error){
                throw new Error("logout failed try again")
            }
            console.log("loggedOut Successfully")
            store.dispatch(loggedout());
    }
}

const authentication = new Authentication();
export default authentication;


