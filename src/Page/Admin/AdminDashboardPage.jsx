import { lazy } from "react";
import { AdminHeader as Header, AdminDashboard } from "../../components";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

export default function AdminDashboardPage(){
    const name = useSelector(state => state.auth.userData.name)
    return(
        <>
        <Header name={name}/>
        <Outlet/>
        
        </>
    )
}