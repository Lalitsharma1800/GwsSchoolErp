import { Spinner } from "../ui/spinner"
export default function FacultyCard({
     content,
    count,
    countLoading    
}
){

   
    return(
           <div className="w-40 h-30 relative  md:w-50 md:h-30 lg:w-50 lg:h-30 2xl:w-xl 2xl:h-40 bg-white text-black   border  rounded-xl 
        text-center grid-rows-3  place-content-center cursor-pointer hover:scale-105 hover:shadow-xl/10 transition duration-300">
           <h2 className="leading-6 mt-1 mb-3 lg:my-2 2xl:my-9 lg:text-2xl 2xl:text-5xl"> {content} </h2>
            <h3 className="font-light mt-1 px-2  lg:text-xl 2xl:text-5xl"> {count} </h3>
            
    </div>
    )
}