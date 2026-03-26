import { Admin_dashboard_route } from "../admin_routes/Admin_dashboard_route";
import {admin_lazy} from "@/Lazy/admin/admin_lazy";


export const Admin_parent_route = {
    
    path: "admin",
    lazy: admin_lazy.parent,
    children: [
                    Admin_dashboard_route
                ]
    
}
