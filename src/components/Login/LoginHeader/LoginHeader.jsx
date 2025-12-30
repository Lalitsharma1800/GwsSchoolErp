import {Link} from "react-router-dom"


export default function LoginHeader(){

return(
    <header  className='bg-neutral-200 border-b  w-full h-16 flex justify-around items-center '>
            
            <div className='bg-neutral-200  border-b w-full h-16 flex justify-between items-center md:max-w-4xl mx-3'>
            
            <Link to={"/"}>

            {/* // School Logo */}
            <h1 className='font-serif font-bold text-black text-xl text-shadow-lg/30 text-shadow-neutral-900 '>GWS</h1>
            
            {/* // For screen Readers Only */}
            <h1 className="sr-only">Green World School</h1> 
            </Link>
            
            {/* // Adm inquiry */}
            <Link to={"/admission"}>
            <h4 className=' font-serif font-medium  '>Admission</h4>
          
            </Link>

            </div>

    </header>
)}