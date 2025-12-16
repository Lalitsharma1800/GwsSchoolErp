import React from "react";

function ERPFooter(){
    return(
        
         <footer className="">
          <div className="bg-neutral-400 w-full h-0.5  mb-3"></div>


          <div className="text-neutral-600 flex flex-col  md:flex-row gap-15  
          md:justify-around mt-10 mx-3 smallMobile:mx-10 2xl:mx-0 2xl:justify-center max-w-1850px">
            
            
            <ul className="">
              <li className="text-black font-medium mb-3 text-xl underline">Useful Links</li>
              <ul className="flex flex-col gap-1 text-[18px]">
                <li>Home</li>
              <li>About Us</li>
              <li>Products</li>
              <li>Services</li>
              <li>Legal</li>
              <li>Contact Us</li>
              </ul>
            </ul>


            <div className="medium:max-w-1/3  text-[18px]">
              <div className="text-black font-medium text-xl underline">About Us</div>
              <p className="mt-3">We are a team of passionate people whose goal is to improve everyone's life 
                through disruptive products. We build great products to solve your business problems.
                <br />
                <br />
                Our products are designed for small to medium size companies willing to optimize their performance.</p>
            </div>



            <div className="text-[18px]">
              <div className="text-black font-medium text-xl underline">Connect with Us</div>
              <ul className="mt-3 flex flex-col  gap-0.5">
                <li>Contact Us</li>
                <li className="wrap-break-word">info@yourcompany.example.com</li>
                <li>+91 999999999</li>
              </ul>
              <ul className="flex flex-wrap gap-3 items-center mt-2 ml-2">
                <li>F</li>
                <li>X</li>
                <li>in</li>
                <li>H</li>
              </ul>
            </div>
          </div>

          <div className="w-full mb-4"></div>
        </footer>
        
    )
}

export default ERPFooter;