import { Link } from "react-router-dom";

export default function FeatureCard({
    title = "Manage Faculty",
    toLink = "/",
}){
    
return(
        
  
<div className="font-Inter font-semibold w-full md:max-w-56 my-0 ">
        <div className="flex justify-center items-center h-16 hover:bg-blue-950 hover:text-white">
            <h2 className="cursor-pointer"><Link to={toLink}>{title}</Link></h2>
        </div>
   <div className="w-full border-b-4 border-dotted border-black py-0.5" ></div>
</div>

    )
}