import { Link } from "react-router-dom";

export default function FeatureCard({
    title = "Manage Faculty",
    toLink = "/",
    message = null,
}){
    
return(
        
  
<div className="font-Inter font-semibold  w-full md:max-w-56 my-0 ">
        <div className="flex flex-col justify-center items-center h-16 hover:bg-blue-950 hover:text-white active:bg-blue-950 active:text-white">
            <h2 className="cursor-pointer"><Link to={toLink}>{title}</Link></h2>
            {message && <p className="text-xs text-red-400">{message}</p>}
        </div>
<div className="w-full border-b-4 border-dotted border-neutral-300 py-px" ></div>
</div>

    )
}