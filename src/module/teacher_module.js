import { TeacherDashboardPage as Component } from "@/Page";
import teacher_loader from "@/Loaders/TeacherLoader/teacher_loader";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const loader =  teacher_loader;
export default Component;
export { loader,ErrorBoundary};