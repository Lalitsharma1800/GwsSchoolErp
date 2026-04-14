import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { authentication } from "@/supabase"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function ProfileBar(){


  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const hanleLogout = async() => {
      try{
          setError(null);
          await authentication.logout();
          navigate("/login");
      }
      catch(error){
        setError(error.message);
      }
  }
 

  return (
 
      <DropdownMenu>
      {/* The Trigger is usually a Button or Avatar */}
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
                <AvatarImage src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=5OK7djfD3cnNmQ-DR0iQzF-vmA-iTNN1TbuEyCG1DfA=" />
                <AvatarFallback>UN</AvatarFallback>
        </Avatar> 
       
      </DropdownMenuTrigger>

      {/* The Content houses all menu items */}
      <DropdownMenuContent className="w-auto cursor-pointer ">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator/>
        
        <DropdownMenuItem className=" cursor-pointer">Change Password</DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-600  cursor-pointer"
          onClick = {() => hanleLogout()}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
      {error && alert("LogOut failed, Please try again")}
    </DropdownMenu>
  )
}


