import { redirect } from "react-router-dom";
import { authentication } from "@/supabase";
export default async function root_loader(){
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
        return null;
}


// --------------x-------------x----------

// import { redirect } from "react-router-dom";
// import { getSession, getUser, getRole } from "../../supabase/index";



// export default async function TeacherLoader() {
//      const data = await getSession()
//      if(data.session === null || data.session === undefined){
//             throw redirect("/");
//     } 
//     const user = await getUser()
//      if(!user){
//             throw redirect("/");
//     } 
//     const role = await getRole(user.id)
//    if(role !== "teacher"){
//      throw redirect("/");
//    }
//     return null;
// }