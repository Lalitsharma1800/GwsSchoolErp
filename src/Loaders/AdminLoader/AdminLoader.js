import { redirect } from "react-router-dom";
import { authentication } from "@/supabase";
export default async function root_loader(){
       try { 

        await authentication.getSession();
        
        const user = await authentication.getUser();
        
        await authentication.getRole(user.id);

         if (role !== "admin") throw error; 
        return redirect("/ad,in");
        }
        catch(error){
            throw redirect("/login");
        }
        return null;
}



// import { redirect } from "react-router-dom";
// import { getSession, getUser, getRole } from "../../supabase/index";


// export default async function AdminLoader() {

//      const data = await getSession()
//      if(data.session === null || data.session === undefined){
//             throw redirect("/");
//     } 
//     const user = await getUser()
//      if(!user){
//             throw redirect("/");
//     } 
//     const role = await getRole(user.id)
//    if(role !== "admin"){
//      throw redirect("/");
//    }
//     return null;
// }