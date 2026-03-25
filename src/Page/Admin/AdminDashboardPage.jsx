import { lazy } from "react";
import { AdminHeader as Header, AdminDashboard } from "../../components";
import { useSelector } from "react-redux";
import { Outlet, useNavigate, useNavigation } from "react-router-dom";
import { Spinner } from "@/components/ui/spinner";

export default function AdminDashboardPage(){
    const name = useSelector(state => state.auth.userData.name)
    const navigation = useNavigation();
    
    const busy = navigation.state === "loading" || navigation.state === "submitting";
    return(
        <>
        <Header name={name}/>
        {busy && <div>Loading</div>}
        <div>Hello bachho</div>
        <Outlet/>
        </>
    )
}