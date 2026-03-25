export const teacher_dashboard_route = {
    path: "/teacher",
    lazy: async () => {
        const module = await import("./../../module/teacher_module");
        return {
            Component: module.default,
            loader: module.loader,
            ErrorBoundary: module.ErrorBoundary,
        };
    }
}