import { redirect } from "react-router-dom";
import { getSession, getUser, getRole } from "../../supabase/index";


export default async function AdminLoader() {

     const data = await getSession()
     if(data.session === null || data.session === undefined){
            throw redirect("/");
    } 
    const user = await getUser()
     if(!user){
            throw redirect("/");
    } 
    const role = await getRole(user.id)
   if(role !== "admin"){
     throw redirect("/");
   }
    return null;
}