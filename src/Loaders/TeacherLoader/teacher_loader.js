import { redirect } from "react-router-dom";
import { authentication } from "@/supabase";
export default async function teacher_loader(){
       try { 

        await authentication.getSession();
        
        const user = await authentication.getUser();
        
        const role =  await authentication.getRole(user.id);

        if (role !== "teacher") throw error; 
        return redirect("/teacher");
        }
        catch(error){
            throw redirect("/login");
        }
}