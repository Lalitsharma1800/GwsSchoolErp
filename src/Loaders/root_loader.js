import { redirect } from "react-router-dom";
import { authentication } from "@/supabase";
export default async function root_loader(){
       try { 

        await authentication.getSession();
        
        const user = await authentication.getUser();
        
        const role = await authentication.getRole(user.id);

        redirect(`/${role}`);
        }
        catch(error){
            throw redirect("/login");
        }
        return null;
}