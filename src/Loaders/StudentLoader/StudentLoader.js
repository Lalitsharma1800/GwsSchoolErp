import { redirect } from "react-router-dom";
import { getSession, getUser, getRole } from "../../supabase/index";


export default async function StudentLoader() {
       
       const data = await getSession()
       if(data === null || data.session === null || data.session === undefined){
              throw redirect("/");
       }
       const user = await getUser()
       if(user === null){
              throw redirect("/");
       } 
       const role = await getRole(user.id)
       if(role !== "student"){
       throw redirect("/");
       }
       return null;
}