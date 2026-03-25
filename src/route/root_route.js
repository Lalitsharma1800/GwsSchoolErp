import { createBrowserRouter } from "react-router-dom";
import root_loader from "@/Loaders/root_loader";
import { login_route ,student_dashboard_route, teacher_dashboard_route, admin_dashboard_route } from "./route_index";
import Root_LayOut from "@/Page/Root_LayOut";
import { LoginPage } from "@/Page";


export const router = createBrowserRouter([
    {
        path:"/",
        Component: Root_LayOut,
        loader: root_loader,
        shouldRevalidate: () => false,
        children: [
            admin_dashboard_route,
            student_dashboard_route
        ]
    }
])

