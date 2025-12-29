import { useNavigate } from "react-router-dom"
export default function Card({
    content = "Not Available",
    iconLink,
    navigationRoute,
    }){
        const navigate = useNavigate();

    return(
        <div className="w-30 h-30 relative  sm:w-50 md:h-35 lg:w-70 lg:h-55 2xl:w-xl 2xl:h-96  bg-white border  rounded-xl 
        text-center grid-rows-3  place-content-center cursor-pointer hover:scale-105 hover:shadow-xl/10 transition duration-300">
           <div className="flex justify-center items-center lg:relative -top-4 2xl:-top-9 "> <img className="w-7 lg:w-13 2xl:w-20" src={iconLink} alt="" /></div>
            <div className="leading-4 mt-1 mb-3 lg:my-4 lg:text-2xl 2xl:text-5xl">{content}</div>
            <button 
            className="bg-[#136B78] text-white border border-black rounded-lg 
              hover:opacity-70  transition duration-300 hover:shadow-lg/30  cursor-pointer
            lg:text-xl px-3 py-0 pb-1  sm:px-5 lg:mt-4  lg:py-2 2xl:text-5xl 2xl:py-4 2xl:relative -bottom-14" onClick={(e) => navigate({navigationRoute})}>Click here</button>
            </div>
    )
}