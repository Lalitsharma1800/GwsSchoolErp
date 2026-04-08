import { createBrowserRouter } from "react-router-dom";
import { FallBack } from "@/components";
import { Admin_parent_route } from "./admin_routes/admin_parent_route";
import { 
            Login_route, 
            Login_route_2_path_login, // for /login
            Student_dashboard_route, 
        } from "./route_index";
import { Admin_teacherManagement_route } from "./admin_routes/Admin_teacherManagement_route";

import Dashboard from "@/components/Admin/Dashboard/Dashboard";
import Root_LayOut from "@/Page/Root_LayOut";



export const Router = createBrowserRouter([
    {
        path:"/",
        
        Component: Root_LayOut,
        
        errorElement: <div className="grid place-content-center">Internal Server Error</div>,
        
        hydrateFallbackElement:<FallBack/>,
        
        children: [
            Login_route,  // for "/"
            Login_route_2_path_login,  // for "/login"
            Admin_parent_route,      // for "/admin"
            Student_dashboard_route,
            Admin_teacherManagement_route,
            {
                path: "/hello",
                children: [
                    {
                        index: true,
                        element: <FallBack/>,
                        
                    }
                ]
            }
        ]
    },
    {
            path: "/*",
            Component: Dashboard,
            hydrateFallbackElement:<FallBack/>,
            // element: <div className="w-full h-screen fixed text-2xl text-black grid place-content-center">Error 404, Page Not Found</div>
    }

])

