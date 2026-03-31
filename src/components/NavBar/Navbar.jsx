import { Avatar } from "../ui/avatar";
import Logo from "../logo";
import { Navbar,Demo } from "../ui/navbar";



export default function Navbar2(){

    const navigationLink = [
        { href: "#", label: "Dashboard", active: true },
        { href: "#", label: "Administration", active: false },
        { href: "#", label: "Faculty", active: false },
        { href: "#", label: "HR", active: false },
        { href: "#", label: "Students", active: false },
    ]
    

    return(
       

        <Navbar 
            className="font-Roboto"
            logo={<Logo/>}
            navigationLinks = {navigationLink}
        >
            
        </Navbar>
        // <header  
        // className="sticky top-0 border-b z-50 
        // w-full h-14 xl:h-20 2xl:h-30 
        // bg-neutral-100 flex justify-between 
        //  items-center  px-8">
            
        //     <h1><Logo/></h1>
        //     <nav> 
        //         <Hover_Card content={"hello"} hover_card_content={"hover content"} />
        //     </nav>
        //     <div>Profile</div>
        // </header>
    )
}