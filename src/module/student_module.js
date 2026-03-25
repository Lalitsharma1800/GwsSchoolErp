import { StudentDashboardPage as Component } from "@/Page";
import { student_loader as loader} from "@/Loaders/student_loader";
import { student_action as action } from "action/student_action";
import { ErrorBoundary } from "@/components/ErrorBoundary";


export default Component;
export {action, loader,ErrorBoundary};