import { redirect } from "react-router-dom";
import { getSession, getUser, getRole } from "../../supabase/index";


export default async function StudentLoader() {

    const session = await getSession()
     if(!session){
            throw redirect("/");
    } 
    const user = await getUser()
     if(!user){
            throw redirect("/");
    } 
    const role = await getRole(user.id)
   if(role !== "student"){
     throw redirect("/");
   }
    return null;
}