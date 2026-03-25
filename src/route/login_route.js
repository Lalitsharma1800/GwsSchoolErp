 export const login_route = {
    path: "/login",
    lazy: async () => {
        const module = await import("./../Page/Login/LoginPage");
        return {Component: module.default};
    }
}