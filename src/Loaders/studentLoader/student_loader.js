import { redirect } from "react-router-dom";
import { authentication } from "@/supabase";
export default async function student_loader(){
       try { 

        await authentication.getSession();
        
        const user = await authentication.getUser();
        
        const role =  await authentication.getRole(user.id);

         if (role !== "student") throw error; 
        return redirect("/student");
        }
        catch(error){
            throw redirect("/login");
        }
        return null;
}
