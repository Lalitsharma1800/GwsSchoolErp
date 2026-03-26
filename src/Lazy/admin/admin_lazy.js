
async function admin_parent() {
   
        const module = await import("../../module/admin/admin_module");
        return {
            Component: module.default,
            loader: module.loader,
            shouldRevalidate: module.shouldRevalidate,
            ErrorBoundary: module.ErrorBoundary,
        }
}

async function admin_dashboard_lazy() {
   
        const module = await import("../../module/admin/admin_dashboard_module");
        return {
            Component: module.default,
            ErrorBoundary: module.ErrorBoundary,
        }
}


export  const  admin_lazy = {
    parent: admin_parent,
    dashboard: admin_dashboard_lazy
}