import { teacher_data } from "../../../fetchingfunctions/teachers/teachersData";
import FacultyCard from "./../../FacultyCard/FacultyCard"
import { useEffect, useState } from "react";
import { supabase } from "../../../supabase";
import { teacherCount } from "../../../fetchingfunctions/teachers/teachersData";
import { teacher_details } from "../../../fetchingfunctions/teachers/teachersData";


export default function TeacherManagement(){

    const [searched, setSearched] = useState(false)
    const [count, setCount] = useState("")
    const [data, setData] = useState(null)
    const [moreDetails, setMoreDetails] = useState(null)

    const moreDetailBtn = async (id) => {
       try{
         const details = await teacher_details(id)
         setMoreDetails(details)
         console.log(moreDetails)
       }
       catch(error){
        throw error;
       }
        
    }

    const handleSearch = async () => {
        try{
            const data = await teacher_data();
            setData(data)
        }
        catch(error){
            throw error;
        } 
    }

    useEffect(() => {
       async function teacher_count(){
        try{
            const count = await teacherCount();
            setCount(count)
        }
        catch(error){
            throw error;
        }
       }
        teacher_count();
    },[])

    
    

    return(
         <div>
           
       <div className="bg-neutral-200 min-h-screen pb-3 border-b-2">
          

            <div className="w-auto   flex justify-center items-center  ">
                <div className="font-Roboto w-auto  sm:text-2xl lg:text-3xl 2xl:text-5xl  py-4 px-12 text-center my-4 text-white bg-[#05424D] border border-black mx-1 md:mx-4 rounded-2xl">Teacher Management</div>
            </div> 

            <div className="m-3   flex  sm:flex-row justify-center items-center flex-wrap gap-x-3.5 gap-y-2">
                                <FacultyCard  content={"Total Faculty"}  count={count} />
                                <FacultyCard content={"Today's Attendance"}  count={count} />
                                <FacultyCard content={"On Leave"}  count={0} />
                                <FacultyCard content={"Pending Actions"}  count={0} />                  
            </div>

            <div className=" bg-white  m-3 mx-12 rounded flex flex-col justify-center items-center">
                           
                <h4 className="text-xl mt-4">Search & Filters</h4>
                                                                             
                <div className="w-full  max-h-125 overflow-auto bg-white mb-3 rounded-2xl sm:flex justify-center items-center">
                        
                    <table className="border  overflow-hidden text-[12px] md:text-[16px]">
                        
                        <thead>
                            <tr className="">
                                <th className="border whitespace-nowrap border-black px-6">S. NO.</th>
                                <th className="border whitespace-nowrap border-black px-6">Class</th>
                                <th className="border whitespace-nowrap border-black px-6"> Name</th>
                                <th className="border whitespace-nowrap border-black px-6">Phone no</th>
                                <th className="border whitespace-nowrap border-black px-6">See Details</th>   
                            </tr>
                        </thead>
                    
                        <tbody>
                                { data &&
                                    data.map((row,index) => (
                                      <tr key={`${row.teachers.user_id}`}>
                                        <td  className="text-center whitespace-nowrap border border-black px-2">{index+1}</td>
                                        <td  className="text-center whitespace-nowrap border border-black px-2">{row.classes?.class_name}</td>
                                        <td  className="text-center whitespace-nowrap border border-black px-2">{row.teachers?.name}</td>
                                        <td className="text-center whitespace-nowrap border border-black px-2">{row.teachers?.phone}</td>
                                        <td className="text-center whitespace-nowrap border border-black px-2"><button onClick={async () => await moreDetailBtn(row.teachers.user_id)}  className="bg-neutral-200 cursor-pointer px-3 m-1 rounded-lg  text-black outline-1">Click </button></td>
                                      </tr>
                                    ))
                                }
                                {
                                    !data &&
                                    <tr>
                                        <td  className="font-bold">No data to show</td>
                                    </tr>
                                }
                        </tbody>
                    </table>
                </div>

                    {/* tables ends here */}
                    {/* print table button */}

                <div className="px-3 mb-3 hover:bg-blue-800 rounded-2xl text-center text-white bg-blue-700 cursor-pointer border border-black">
                    {searched && <div>Print</div>}
                    {!searched && <button onClick={async (e) => {await handleSearch()
                      setSearched(true)
                    }}>Search</button>}</div>
            </div>
            </div>
        </div>
        
    )
}