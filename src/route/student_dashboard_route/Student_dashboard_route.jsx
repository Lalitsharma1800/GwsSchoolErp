export const Student_dashboard_route = {
    path: "/student",
    lazy: async () => {
        const module = await import("../../module/student_module");
        return {
            Component: module.default,
            loader: module.loader,
            ErrorBoundary: module.ErrorBoundary,
        };
    }
}