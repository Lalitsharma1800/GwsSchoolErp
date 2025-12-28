import { redirect } from "react-router-dom";
import { getSession, getUser, getRole } from "../../supabase/index";


export default async function AdminLoader() {

    const session = await getSession()
     if(!session){
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