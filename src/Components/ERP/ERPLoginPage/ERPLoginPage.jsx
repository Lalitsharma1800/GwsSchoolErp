import React from "react";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import icon from "../../../assests/cross_icon.svg"


// const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY)



export default function ERPLoginPage({loginBtn, setLoginBtn}) {


// to prevent reloading
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form Submitted")
  }
 
  return (
     <>

      {  // if login button clicked 
        loginBtn && <div  className=" w-full py-1 flex justify-center items-center">

              <div className="h-full w-4/5 small:w-[63%]  sm:w-2/5 lg:w-120 rounded-2xl bg-neutral-200">

                <div className=" flex justify-end items-center mt-1 mr-1"><img src={icon} className="w-6 cursor-pointer" alt="" onClick={(e) => {
                  return (setLoginBtn(false))
                  
                }}/></div>
                <h1 className="text-2xl sm:text-3xl text-black font-serif text-center  border-b ">Green World School</h1>

                

                <form action="" onSubmit={handleSubmit} className="flex flex-col justify-center items-center my-10 gap-5 w-full ">
                    
                    
                    
                    <div className="flex flex-col    gap-1 text-black w-11/12  ">
                      <label htmlFor="" className="text-black  p-1 w-11/12">Select Role</label>
                      <select name="" required id="" className="outline-1 bg-white rounded outline-black    p-1 text-neutral-500">
                        <option value="Select Role" selected>Select Role</option>
                        <option value="Director"  className="text-black">Director</option>
                        <option value="Principal" className="text-black">Principal</option>
                        <option value="Exam" className="text-black">Exam</option>
                        <option value="Accounts" className="text-black">Accounts</option>
                        <option value="Teacher" className="text-black">Teacher</option>
                        <option value="Student" className="text-black">Student</option>
                      </select>
                    </div>


                    <div className="flex flex-col  items-center gap-1 text-white w-full  ">
                      <label htmlFor="" className="text-black  p-1 w-11/12">UserId:</label>
                      <input type="text" placeholder="Enter UserId" 
                       className="bg-white  p-1 w-11/12 outline-1 outline-black rounded text-black"/>
                    </div>


                    <div className="flex flex-col justify-center items-center gap-1 text-white w-full ">
                      <label htmlFor="userPass" className="text-black  p-1 w-11/12">Enter Password:</label>
                      <input type="text"  className=" p-1 outline-1 bg-white outline-black rounded text-black w-11/12" name="userPass" placeholder="Enter Password"/>
                    </div>


                    <div>
                      <button type="submit" className="bg-black  p-1 px-5 rounded-2xl cursor-pointer text-white font-mono">Submit</button>
                    </div>


                </form>

              </div>
                  </div>
      }

    </>
  );
}