import { Admin_dashboard_route } from "./Admin_dashboard_route";
import { Admin_teacherManagement_route } from "./Admin_teacherManagement_route";
import {admin_lazy} from "@/Lazy/admin/admin_lazy";


export const Admin_parent_route = {
    
    path: "admin",
    lazy: admin_lazy.parent,
    children: [
                    Admin_dashboard_route,
                    Admin_teacherManagement_route
                ]
    
}
