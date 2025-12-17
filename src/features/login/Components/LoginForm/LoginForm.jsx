import React from "react"
import { Link } from "react-router-dom"

// Contain welcome paragraph and login form

export default function LoginForm(){

return(
        <main className='w-full  mt-3 flex flex-col justify-center items-center gap-2 max-w-2xl mx-auto '>
            
                            {/* main => welcome paragraph starts */}

            <h1 className='text-2xl font-serif wrap-break-word text-center'>Welcome to GWS Dabra,</h1>
            <h2 className=' text-xl bg-neutral-200 px-2 outline-1 rounded  font-mono text-center'>Login</h2>
                
                            {/* main => welcome paragraph ends */}


                            {/*  login form starts */}

                <form action=""  className=" flex flex-col justify-center items-center my-5 mx-2 gap-5 w-full ">
                            
                            
                            {/*  select role */}

                            <div className="flex flex-col    gap-1 text-black w-11/12  ">
                                <label htmlFor="" className="text-black  p-1 w-11/12">Select Role*</label>
                                <select name="" required id="" defaultValue={"developer"} className="outline-1 bg-white rounded outline-black    p-1 text-neutral-500">
                                    <option value="Select Role" >Select Role</option>
                                    <option value="Director"  className="text-black">Director</option>
                                    <option value="Principal" className="text-black">Principal</option>
                                    <option value="Exam" className="text-black">Exam</option>
                                    <option value="Accounts" className="text-black">Accounts</option>
                                    <option value="Teacher" className="text-black">Teacher</option>
                                    <option value="Student" className="text-black">Student</option>
                                    <option value="developer" className="text-black">Developer</option>
                                </select>
                            </div>

                            {/* fill  UserID */}

                            <div className="flex flex-col  items-center gap-1 text-white w-full  ">
                                <label htmlFor="" className="text-black  p-1 w-11/12">UserId:*</label>
                                <input type="text" placeholder="Enter UserId" 
                                className="bg-white  p-1 w-11/12 outline-1 outline-black rounded text-black"  required/>
                            </div>

                            {/* fill  Password */}

                            <div className="flex flex-col justify-center items-center gap-1 text-white w-full ">
                                <label htmlFor="userPass" className="text-black  p-1 w-11/12">Enter Password:*</label>
                                <input type="text"  className=" p-1 outline-1 bg-white outline-black rounded text-black w-11/12" name="userPass" placeholder="Enter Password"
                                required/>
                            </div>


                            {/* Submit button */}

                            <button type="submit" className="bg-black  p-1 px-5 rounded-2xl cursor-pointer text-white font-mono">Submit</button>

                  </form>

                            {/*  login form ends */}
        </main>
)}