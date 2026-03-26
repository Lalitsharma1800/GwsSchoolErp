import { createBrowserRouter } from "react-router-dom";

import { 
            Login_route, Login_route_2_path_login, Student_dashboard_route, Teacher_dashboard_route, Admin_dashboard_route } from "./route_index";
import Root_LayOut from "@/Page/Root_LayOut";
import { Spinner } from "@/components/ui/spinner";


export const Router = createBrowserRouter([
    {
        path:"/",
        Component: Root_LayOut,
        errorElement: <div>Error</div>,
        hydrateFallbackElement: <Spinner className="size-8 "/>,
        shouldRevalidate: () => false,
        children: [
            Login_route,
            Login_route_2_path_login,
            Admin_dashboard_route,
            Student_dashboard_route,
        ]
    },
    {
            path: "/*",
            element: <div className="w-full h-screen fixed text-2xl text-black grid place-content-center">Error 404, Page Not Found</div>
    }

])

