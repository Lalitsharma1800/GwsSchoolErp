export default async function login_lazy() {
        
    const module = await import("../../module/login_module");
        
    return {
            Component: module.default
    };
}