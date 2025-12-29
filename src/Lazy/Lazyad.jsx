import { lazy, Suspense } from "react";
import Loading from "../components/Loading/Loading";

const Admin = lazy(() => import("./../Page/Admin/AdminDashboardPage"))

function Lazyad(){
    return(
        <Suspense fallback={Loading}>
            <Admin/>
        </Suspense>
    )
}