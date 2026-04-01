import { Outlet } from "react-router-dom";
import Navbar2 from "@/components/NavBar/Navbar";

export default function AdminDashboardPage(){
        
    
    
    const menuList = [
            { href: "/admin", label: "Dashboard"},
            { href: "/admin/Faculty", label: "Faculty"},
            { href: "/admin/HR", label: "HR" },
            { href: "/admin/Student", label: "Student" },
            { href: "/admin/Faculty", label: "Finance" },
            
    ]
    
return(
        <>
        <Navbar2 menuList={menuList}/>
        <Outlet/>
        </>
    )
}