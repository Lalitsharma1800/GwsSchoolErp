import { Outlet, useNavigation } from "react-router-dom";
import { Spinner } from "@/components/ui/spinner";

export default function Root_LayOut(){
    
    const navigation = useNavigation();
    
    return(
        <>
        {navigation.state == "Loading" && <Spinner className="size-8"/>}
        <Outlet/>
        </>
    )
}