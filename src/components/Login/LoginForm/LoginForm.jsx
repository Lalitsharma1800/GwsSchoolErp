import { useForm } from "react-hook-form";
import { login} from "../../../supabase/index";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSession, setRole } from "../../../store/authSlice";





export default function LoginForm(){

    // const [userData, setUserData] = useContext(userContext);

    const navigate = useNavigate();
    const {register, handleSubmit, formState: { errors, isSubmitting }} = useForm();
    const [err, setErr] = useState("");
   
      

      const onSubmit = async (data) => {
        setErr(null);
        
        try {
          const role = await login(data.email, data.Password)
          navigate(`/${role}`)
        } 
        catch (error) {
          setErr(error.message);
        }
      }
    

return(
        <main className='w-full  mt-3 flex flex-col justify-center items-center gap-2 max-w-2xl mx-auto '>
            
                            {/* main tag => welcome paragraph starts */}

            <h1 className='text-2xl font-serif wrap-break-word text-center'>Welcome to GWS Dabra,</h1>
            <h2 className=' text-xl bg-neutral-200 px-2 outline-1 rounded  font-mono text-center'>Login</h2>
                
                            {/* main => welcome paragraph ends */}


                            {/*  login form starts with react router form */}

                <form onSubmit={handleSubmit(onSubmit)}   className=" flex flex-col justify-center items-center my-5 mx-2 gap-5 w-full ">
                            
                            
                            {/*  role selection removed because of security reasons:
                                    if user give wrong role but right credentials he didn't logged in but he can know that role is 
                                    correct only credentials are wrong through network in devtools
                             */}

                            

                            {/* UserID/E-mail */}

                            <div className="flex flex-col  items-center gap-1 text-white w-full  ">
                                
                                <label htmlFor="email" className="text-black  p-1 w-11/12">E-mail:*</label>
                                
                                <input type="text"   {...register("email", { required:true  })} placeholder="Enter E-mail" 
                                className="bg-white  p-1 w-11/12 outline-1 outline-black rounded text-black"  
                                />
                            
                            </div>

                            {/* fill  Password */}

                            <div className="flex flex-col justify-center items-center gap-1 text-white w-full ">
                                
                                <label htmlFor="Password"  className="text-black  p-1 w-11/12">Enter Password:*</label>
                                
                                <input type="password"  {...register("Password", { required:true })}  className=" p-1 outline-1 bg-white outline-black rounded text-black w-11/12"  placeholder="Enter Password"
                                 />

                            </div>


                               {/* Error */}
                            {err && (
                              <p className="text-red-600 text-sm">
                                {err}
                              </p>
                               )}
                              
                            {/* Submit button */}

                           <div>
                            <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-black  p-1 px-5 rounded-2xl cursor-pointer text-white font-mono">
                              {isSubmitting ? (
                                <svg className=" size-5 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle className="opacity-55" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-85" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                                </svg>
                              ):(
                                "Submit"
                              )}
                            </button>
                            {/* {!loading && <button type="submit" className="bg-black  p-1 px-5 rounded-2xl cursor-pointer text-white font-mono">Submit</button> }
                            {loading && <button type="submit" className="bg-black  p-1 px-5 rounded-2xl cursor-pointer text-white font-mono flex justify-center items-center"><svg className=" size-5 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle className="opacity-55" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-85" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" /></svg></button>}
                            */}
                            </div>
                  </form>

                            {/*  login form ends */}
        </main>
)}