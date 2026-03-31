import { Avatar } from "../ui/avatar";
import Logo from "../logo";
import { Navbar } from "../ui/navbar";



export default function Navbar2(){

    const menuList = [
            { href: "/k1", label: "Dashboard"},
            { href: "/k2", label: "Faculty"},
            { href: "/k3", label: "HR" },
            { href: "/k4", label: "Student" },
            { href: "/k5", label: "Finance" },
            { href: "/k6", label: "Communication" }
    ]
    

    return(
        <Navbar navigationLinks={menuList}/>
       
    )
}