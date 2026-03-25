export const admin_dashboard_route = {
    path: "/admin",
    lazy: async () => {
        const module = await import("./../module/admin_module");
        return {
            Component: module.default,
            loader: module.loader,
            ErrorBoundary: module.ErrorBoundary,
        };
    }
}
export const teacher_dashboard_route = {
    path: "/teacher",
    lazy: async () => {
        const module = await import("./../module/teacher_module");
        return {
            Component: module.default,
            loader: module.loader,
            ErrorBoundary: module.ErrorBoundary,
        };
    }
}
export const student_dashboard_route = {
    path: "/student",
    lazy: async () => {
        const module = await import("./../module/student_module");
        return {
            Component: module.default,
            loader: module.loader,
            ErrorBoundary: module.ErrorBoundary,
        };
    }
}