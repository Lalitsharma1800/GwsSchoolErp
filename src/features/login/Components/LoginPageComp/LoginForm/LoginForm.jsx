import React from "react"
import { useEffect, useState } from "react"
import { Link, redirect } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { login } from "../../../../../services/auth_service"
import { supabase } from "../../../../../supabaseApi/supabase_Client"
import { Form } from "react-router-dom"

// Contain => welcome paragraph and login form

export default function LoginForm(){

    const [role, setRole] = useState("")
    const [userId, setUserId] = useState("")
    const [pass, setPass] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();


    // to prevent reloading
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        setLoading(true)


        try{
            //  we not need to store this b'coz we this already 
            // stored in local storage and we don't need to access
            //  it here we only want to know that user is authenticated or not
            await login(userId, pass)

            setLoading(false);
            alert("logged in successfully")
        
              const {data} = await supabase 
              .from('instruments')
              .select('role')
              .single()


            }
          catch(err){
            setLoading(false);
            alert("throws = invalid credential")
            setError(err.message)
          }
        
          }

    


return(
        <main className='w-full  mt-3 flex flex-col justify-center items-center gap-2 max-w-2xl mx-auto '>
            
                            {/* main tag => welcome paragraph starts */}

            <h1 className='text-2xl font-serif wrap-break-word text-center'>Welcome to GWS Dabra,</h1>
            <h2 className=' text-xl bg-neutral-200 px-2 outline-1 rounded  font-mono text-center'>Login</h2>
                
                            {/* main => welcome paragraph ends */}


                            {/*  login form starts */}

                <form action="" onSubmit={handleSubmit}  className=" flex flex-col justify-center items-center my-5 mx-2 gap-5 w-full ">
                            
                            
                            {/*  role selection removed because of security reasons:
                                    if user give wrong role but right credentials he didn't logged in but he can know that role is 
                                    correct only credentials are wrong through network in devtools
                             */}

                            

                            {/* fill  UserID */}

                            <div className="flex flex-col  items-center gap-1 text-white w-full  ">
                                <label htmlFor="" className="text-black  p-1 w-11/12">UserId:*</label>
                                <input type="text" placeholder="Enter UserId" 
                                className="bg-white  p-1 w-11/12 outline-1 outline-black rounded text-black"  
                                onChange={(e) => {setUserId(e.target.value)}} required/>
                            </div>

                            {/* fill  Password */}

                            <div className="flex flex-col justify-center items-center gap-1 text-white w-full ">
                                <label htmlFor="userPass" className="text-black  p-1 w-11/12">Enter Password:*</label>
                                <input type="password"  className=" p-1 outline-1 bg-white outline-black rounded text-black w-11/12" name="userPass" placeholder="Enter Password"
                                onChange={(e) => {setPass(e.target.value)}} required/>
                            </div>


                            {/* Submit button */}

                           <div>
                            {!loading && <button type="submit" className="bg-black  p-1 px-5 rounded-2xl cursor-pointer text-white font-mono">Submit</button> }
                            {loading && <button type="submit" className="bg-black  p-1 px-5 rounded-2xl cursor-pointer text-white font-mono flex justify-center items-center"><svg className=" size-5 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle className="opacity-55" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-85" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" /></svg></button>}
                           </div>
                  </form>

                            {/*  login form ends */}
        </main>
)}

