import { admin_lazy } from "@/Lazy/admin/admin_lazy"

export const Admin_dashboard_route = {
    path: "",
    lazy: admin_lazy.dashboard,
}