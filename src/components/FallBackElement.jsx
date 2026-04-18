import Logo from "./logo";
import { Spinner } from "./ui/spinner";


export default function FallBack(){
    return(
        <div className="grid  place-content-center h-screen">
            <Logo/>
             <Spinner className="size-8 inline ml-2"/>
        </div>
    )
}