import React from "react";
import {Link} from "react-router-dom"

export default function Footer(){
    
    return(
    
    <footer className='w-full'> 
        
        {/* black straight line */}
        <div className='bg-neutral-200  h-px'></div>
        
        {/* privacy policy and other stuff */}
        <ul className='text-[12px] text-black  flex flex-wrap justify-center items-center gap-3 max-w-7xl'>
          <li className='hover:text-blue-700 cursor-pointer' >Help</li>
          <li className='hover:text-blue-700 cursor-pointer'>About</li>
          <li className='hover:text-blue-700 cursor-pointer'>Privacy Policy</li>
          <li className='hover:text-blue-700 cursor-pointer'>©All Right Reserved</li>
        </ul>
        
    </footer>

)}