import { login_lazy } from "@/Lazy/lazy_index";
 
export const Login_route = {
    index: true,
    lazy: login_lazy
}

 export const Login_route_2_path_login = {
    path: "login",
    lazy: login_lazy
}