import { admin_dashboard_route } from "./admin_routes/admin_dashboard_route";
import { teacher_dashboard_route } from "./teacher_routes/teacher_dashboard_route";
import { student_dashboard_route } from "./student_dashboard_route/student_dashboard_route";
import { login_route } from "./login_route";
import { router } from "./root_route";

export default router;
export {login_route,admin_dashboard_route, teacher_dashboard_route, student_dashboard_route};