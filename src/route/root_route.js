import { createBrowserRouter } from "react-router-dom";
import root_loader from "@/Loaders/root_loader";
import { login_route } from "./login_route";


export default router = createBrowserRouter([
    {
        path: "/",
        Component: Root_LayOut,
        loader: root_loader,
        shouldRevalidate: () => false,
        children: [
            login_route,
            
        ]
    }
])