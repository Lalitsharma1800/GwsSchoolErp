import Navbar2 from "@/components/NavBar/Navbar";
import Footer from "@/components/footer/footer";
import { Outlet } from "react-router-dom"

export default function TeacherDashboardPage(){

            const menuList = [
            { href: "/teacher", label: "Dashboard", end: true},
            { href: "/teacher/ManageStudents", label: "Student", end: true },
    ]
    return(
            <>
            <Navbar2  menuList={menuList}/>
            <Outlet/>
            <Footer/>
            </>
    )
}