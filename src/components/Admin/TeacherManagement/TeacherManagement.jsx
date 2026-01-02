import FacultyCard from "./../../FacultyCard/FacultyCard"
import { useEffect, useState } from "react";
import { teacher_data, teacherCount, teacher_details } from "../../../fetchApi";
import TeacherDetails from "../teacherdetailsComponent/TeacherDetails.jsx/TeacherDetailsComponent";


export default function TeacherManagement(){

    const [searched, setSearched] = useState(false)
    const [count, setCount] = useState("")
    const [data, setData] = useState(null)
    const [moreDetails, setMoreDetails] = useState(null)
    const [index, setIndex] = useState(null)
    const editable = false;
    const [loading1, setloading1] = useState(false)
    const [loading2, setloading2] = useState(false)

   

    const moreDetailBtn = async (id,index) => {
        setloading2(true)
           try{
             const details = await teacher_details(id)
             setMoreDetails(details)
             setIndex(index)
             
            }
           catch(error){
            throw error;
           }
           finally{
            setloading2(false)
           }
        }

    const handleSearch = async () => {
        try{
            setloading1(true)
            const data = await teacher_data();
            setData(data)
        }
        catch(error){
            throw error;
        } 
        finally{
            setloading1(false)
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
                            <div className="font-Roboto w-auto  sm:text-2xl lg:text-3xl 2xl:text-5xl py-1 px-2 sm:py-4 sm:px-12 text-center my-4 text-white bg-[#05424D] border border-black mx-1 md:mx-4 rounded-2xl">Teacher Management</div>
                        </div> 

                        <div className="m-3   flex  sm:flex-row justify-center items-center flex-wrap gap-x-3.5 gap-y-2">
                                            <FacultyCard  content={"Total Faculty"}  count={count} />
                                            <FacultyCard content={"Today's Attendance"}  count={count} />
                                            <FacultyCard content={"On Leave"}  count={0} />
                                            <FacultyCard content={"Pending Actions"}  count={0} />                  
                        </div>

                        <div className=" bg-white  m-3 sm:mx-12 rounded flex flex-col justify-center items-center">
                                    
                            <h4 className="text-xl mt-4">Search & Filters</h4>
                                                                                        
                            <div className="w-full  max-h-125 overflow-auto bg-white mb-3 px-3 sm:flex justify-center items-center">
                                    
                                <table className="border  overflow-hidden text-[12px] md:text-[16px]">
                                    
                                    <thead>
                                        <tr >
                                            <th className="border whitespace-nowrap border-black px-6">S. NO.</th>
                                            <th className="border whitespace-nowrap border-black px-6">Class</th>
                                            <th className="border whitespace-nowrap border-black px-6"> Name</th>
                                            <th className="border whitespace-nowrap border-black px-6">Phone no</th>
                                            <th className="border whitespace-nowrap border-black px-6">See Details</th>   
                                        </tr>
                                    </thead>
                                
                                    <tbody>
                                            { data &&
                                                data.map((column,index) => (
                                                <tr key={`${column.teachers.id}`}>
                                                    <td  className="text-center whitespace-nowrap border border-black px-2">{index+1}</td>
                                                    <td  className="text-center whitespace-nowrap border border-black px-2">{column.classes?.class_name}</td>
                                                    <td  className="text-center whitespace-nowrap border border-black px-2">{column.teachers?.name}</td>
                                                    <td className="text-center whitespace-nowrap border border-black px-2">{column.teachers?.phone}</td>
                                                    <td className="text-center whitespace-nowrap border border-black px-2">
                                                        <button onClick={async () =>{ 
                                                                                    await moreDetailBtn(column.teachers.id,index)     
                                                        }} className="bg-neutral-500 text-white m-1 px-2 rounded-2xl outline-black outline-1 cursor-pointer"  >Click</button>
                                                    </td>
                                                </tr>
                                                ))
                                            }
                                            { searched && data?.length === 0 && (
                                            <tr>
                                                <td colSpan="5">No data found</td>
                                            </tr>
                                            )}

                                    </tbody>
                                </table>
                            </div>

                                {/* tables ends here */}
                                {/* print table button */}

                            <div className="px-3 mb-3 hover:bg-blue-800 rounded-2xl text-center text-white bg-blue-700 cursor-pointer border border-black">
                                {searched && <div>Print</div>}
                                {!searched && 
                                <div>
                                    {!loading1
                                     && 
                                    <button  
                                    onClick={async () => {
                                    setloading1(!loading1)
                                    await handleSearch()
                                    setSearched(true)
                                    }} className="cursor-pointer" >Search</button>}
                                    {loading1
                                    && 
                                    <div className=" m-1 w-4  h-4 border-2  border-white border-t-transparent
                                     rounded-full animate-spin">
                                    </div>}
                                </div>
                                }
                            </div>
                        </div>

                               

                        {
                           !loading2 && moreDetails  && <TeacherDetails  id={data[index]?.teachers.id}  
                                                            defaultName={data[index]?.teachers.name}
                                                            defaultClass={data[index]?.classes.class_name}
                                                            defaultPhone={data[index]?.teachers.phone}   
                                                            defaultAge={moreDetails[0]?.age??"not imported"}
                                                            defaultGender={moreDetails[0]?.gender??"not available"}
                                                            defaultSubject={moreDetails[0]?.subjects}
                                                            defaultQualification={moreDetails[0]?.qualification}
                                                            defaultExperience={moreDetails[0]?.experience??"not available"}
                                                            adhaar={moreDetails[0]?.aadhar??"not available"}
                                                            joined={moreDetails[0]?.joined??"not available"}
                                                            editable = {editable} />
                        
                        }
                        {
                            loading2  && <div className="w-full  flex justify-center items-center"><div className=" m-1 w-8  h-8 border-2 bg-neutral-200 border-black border-t-transparent rounded-full animate-spin"></div></div>
                        }
                </div>

                
        </div>
        
    )
}