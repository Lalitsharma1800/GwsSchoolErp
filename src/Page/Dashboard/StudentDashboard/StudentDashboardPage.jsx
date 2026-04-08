import Navbar2 from "@/components/NavBar/Navbar";
import Footer from "@/components/footer/footer";
import { Outlet } from "react-router-dom";

export default function StudentDashboardPage(){
                const menuList = [
            { href: "/student", label: "Dashboard", end: true},
            { href: "/student/fees", label: "Fees", end: false},
            { href: "/student/attandence", label: "Student", end: false },
            { href: "/student/notices", label: "Notices", end: false },
    ]
    return(
        <>
        <Navbar2 menuList={menuList}/>
        <Outlet />
        <Footer />
        </>
    )
}