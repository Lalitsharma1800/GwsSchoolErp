import { redirect } from "react-router-dom";
import { authentication } from "@/supabase";
export default async function admin_loader(){
       try { 

        await authentication.getSession();
        
        const user = await authentication.getUser();
        
        const role = await authentication.getRole(user.id);

         if (role !== "admin") throw error; 
        return null;
        }
        catch(error){
            throw redirect("/login");
        }
        return null;
}