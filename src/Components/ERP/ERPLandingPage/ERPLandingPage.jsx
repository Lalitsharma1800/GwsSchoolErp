import React, { useState } from "react";
import { Link } from "react-router-dom";
import ERPFooter from "../ERPFooter/ERPFooter";
import ERPHeader from "../ERPHeader/ERPHeader";
import ERPLoginPage from "../ERPLoginPage/ERPLoginPage";

export default function ERPLandingPage(){

  const [loginBtn, setLoginBtn] = useState(false);

    return(
      <div className="w-full h-screen">
         <ERPHeader />
        <div className="  w-full h-screen bg-[url(https://cdn.pixabay.com/photo/2022/04/30/07/26/derp-castle-7165037_1280.jpg)]   ">
         
          {/* <img src="https://cdn.pixabay.com/photo/2022/04/30/07/26/derp-castle-7165037_1280.jpg" 
          className="fixed -z-1" alt="" /> */}
       
       
       {  !loginBtn &&  <div className="w-full h-100 grid place-content-center  ">

            

            <div className="text-xl md:text-3xl bg-[#00000096] rounded-2xl text-white p-5">
              <h1 className=" smallMobile:hidden font-montserrat font-medium  text-center  ">GWS,</h1>
              <h1 className="hidden smallMobile:block font-montserrat font-medium  text-center  ">Green World School,</h1>
              <h2 className="text-center">Welcome!</h2>
            </div>
        

        <div className="w-full flex  flex-col gap-2 smallMobile:flex-row smallMobile:justify-around mt-5">
        
        <Link className="" 
        to={"/"}
        >  <button className="bg-white hover:bg-neutral-200 cursor-pointer font-mono outline-none border-2  border-black text-black p-2 rounded"
            onClick={(e) => {
             return setLoginBtn(true) 
            }}
          >Login</button>
          </Link>
        <button className="bg-white hover:bg-neutral-200 cursor-pointer font-mono text-neutral-900  p-2 border-2 border-black rounded">Contact Us</button>
        </div>
       </div>}

       <ERPLoginPage loginBtn={loginBtn} setLoginBtn={setLoginBtn}/>
       

       
             
        </div>
        <ERPFooter />
        </div>
    )
}