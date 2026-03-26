import { redirect } from "react-router-dom";
import { authentication } from "@/supabase";
export default async function root_loader(){
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


// ---------------x---------x----------------------x------------

// import { redirect } from "react-router-dom";
// import { getSession, getUser, getRole } from "../../supabase/index";


// export default async function StudentLoader() {
       
//        const data = await getSession()
//        if(data === null || data.session === null || data.session === undefined){
//               throw redirect("/");
//        }
//        const user = await getUser()
//        if(user === null){
//               throw redirect("/");
//        } 
//        const role = await getRole(user.id)
//        if(role !== "student"){
//        throw redirect("/");
//        }
//        return null;
// }