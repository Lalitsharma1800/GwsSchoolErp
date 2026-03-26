import  AdminDashboard  from "@/components/Admin/AdminDashboard/AdminDashboard";

export const Admin_dashboard_route = {
    path: "/admin",
    lazy: async () => {
        
        const module = await import("../../module/admin_module");
        
        return {
            Component: module.default,
            loader: module.loader,
            ErrorBoundary: module.ErrorBoundary,
        };
    },
    children: 
                [
                    
                    {
                                    path: "",
                                    Component: AdminDashboard,
                                    
                    }
                ]
    
}
