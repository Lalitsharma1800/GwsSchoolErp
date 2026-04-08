export default async function lazy_teacher_parent() {
   
        const module = await import("../../module/teacher_module");
        return {
            Component: module.default,
            loader: module.loader,
            ErrorBoundary: module.ErrorBoundary,
        }
}