import { AdminDashboardPage as Component } from "@/Page";
import { admin_loader as loader} from "@/Loaders/adminLoader/admin_loader";
import { admin_action as action } from "@/action/admin_action";
import { ErrorBoundary } from "@/components/ErrorBoundary";


export default Component;
export {action, loader,ErrorBoundary};