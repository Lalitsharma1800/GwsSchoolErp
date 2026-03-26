import { AdminDashboardPage as Component } from "@/Page";
import { admin_loader as loader} from "@/Loaders/index_loader";
import { admin_action as action } from "@/action/admin_action";
import { ErrorBoundary } from "@/components/ErrorBoundary";

export const shouldRevalidate = () => {
                                        return false;
                                        };
export default Component;
export {action, loader,ErrorBoundary};