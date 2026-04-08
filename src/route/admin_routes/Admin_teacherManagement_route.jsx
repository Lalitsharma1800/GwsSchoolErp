import {admin_lazy} from "../../Lazy/admin/admin_lazy"
import { FallBack } from "@/components"


export const Admin_teacherManagement_route = {
    
    path: "facultyManagement",
    hydrateFallbackElement:<FallBack/>,
    lazy: admin_lazy.teacherManagement,
    
}