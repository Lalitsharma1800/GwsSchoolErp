import { navbarIcon,profileicon } from "./../../assets/index"


export default function Header({
        name = "user",
        toggleSidebar,
}){
    return(
            <header className=" w-full h-14 xl:h-20 2xl:h-30 bg-white flex justify-between  items-center">
                    
                <button className="cursor-pointer hover:bg-neutral-300 rounded px-1 ml-1 w-13 h-10 flex justify-center items-center" onClick={(e) => toggleSidebar()}>
                            
                        <img className="w-6 md:w-8 xl:w-12 h-auto" src={navbarIcon} alt="" />
                
                </button>
                
                <h1 className='font-serif font-bold text-black text-xl md:text-2xl xl:text-4xl 2xl:text-7xl text-shadow-lg/30 xl:text-shadow-lg text-shadow-neutral-900 cursor-pointer'>GWS</h1>
                                    
                <div className="flex justify-center items-center pr-2">
                    
                    <button className="w-9  h-8 cursor-pointer  rounded-2xl hover:bg-neutral-300 flex justify-center items-center"><img className="m-2 w-6 rounded-2xl" src={profileicon} alt="" /></button>
                                    
                    <div className="hidden sm:flex justify-center items-center gap-2">
                        <div className="font-medium font-serif  xl:text-2xl">{name}</div>
                    </div>
                </div>
            </header>
    )
}