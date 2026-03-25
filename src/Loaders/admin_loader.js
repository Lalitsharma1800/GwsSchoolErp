import { redirect } from "react-router-dom";

export async function admin_loader(){

       try {  
        }
        catch(error){
            throw redirect("/login");
        }
        return null;
    }