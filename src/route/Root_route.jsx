import { createBrowserRouter } from "react-router-dom";
import { FallBack } from "@/components";
import { Admin_parent_route } from "./admin_routes/Admin_dashboard_parent_route";
import Navbar2 from "@/components/NavBar/Navbar";
import { 
            Login_route, 
            Login_route_2_path_login, 
            Student_dashboard_route, 
            Teacher_dashboard_route, 
        } from "./route_index";


import Root_LayOut from "@/Page/Root_LayOut";

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const Router = createBrowserRouter([
    {
        path:"/",
        
        Component: Root_LayOut,
        
        errorElement: <div className="grid place-content-center">Internal Server Error</div>,
        
        hydrateFallbackElement:<FallBack/>,
        
        children: [
            Login_route,
            Login_route_2_path_login,
            Admin_parent_route,
            Student_dashboard_route,
            
            
            
            {
                path: "/hello",
                children: [
                    {
                        index: true,
                        element: <FallBack/>
                    }
                ]
            }
        ]
    },
    {
            path: "/*",
            Component: Navbar2
            // element: <div className="w-full h-screen fixed text-2xl text-black grid place-content-center">Error 404, Page Not Found</div>
    }

])

