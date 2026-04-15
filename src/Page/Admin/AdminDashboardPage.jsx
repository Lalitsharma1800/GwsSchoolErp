import { Outlet } from "react-router-dom";
import Navbar2 from "@/components/NavBar/Navbar";
import Footer from "@/components/footer/footer";


export default function AdminDashboardPage(){
        
    const menuList = [
            { href: "/admin", label: "Dashboard", end: true},
            { href: "/admin/Faculty", label: "Finance", end: true },
            { href: "/admin/facultyManagement", label: "Faculty", end: false},
                    ]
return(
        <>
        <Navbar2 menuList={menuList}/>
        <Outlet/>
        <Footer/>
        </>
    )
}