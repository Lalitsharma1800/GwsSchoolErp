import { TeacherDashboardPage as Component } from "@/Page";
import { teacher_loader as loader} from "@/Loaders/TeacherLoader/teacher_loader";
import { teacher_action as action } from "@/action/teacher_action";
import { ErrorBoundary } from "@/components/ErrorBoundary";


export default Component;
export {action, loader,ErrorBoundary};