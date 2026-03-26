 export const Login_route = {
    index: true,
    lazy: async () => {
        const module = await import("../module/login_module");
        return {Component: module.default};
    }
}
 export const Login_route_2_path_login = {
    path: "/login",
    lazy: async () => {
        const module = await import("../module/login_module");
        return {Component: module.default};
    }
}