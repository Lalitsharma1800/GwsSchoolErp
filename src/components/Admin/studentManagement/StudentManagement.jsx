import Header from "../../Header/Header";
import FacultyCard from "../../FacultyCard/FacultyCard";
import { useState } from "react";


export default function StudentManagement(){

    const [inputValue, SetInputValue] = useState("")
    const [inputActive, setInputActive] = useState(false);
    const [chooseClass, setChooseClass] = useState(false)
    const classes = [1,2,3,4,5,6,7,8,9,10,11,12]

    


    return(
        <div className="bg-neutral-200 w-full min-h-screen">
           {/* <Header/> */}

            <div className="w-auto flex justify-center items-center  ">
                <div className="font-Roboto w-auto  text-2xl lg:text-3xl 2xl:text-5xl  py-4 px-12 text-center my-4 text-white bg-[#05424D] border border-black mx-1 md:mx-4 rounded-2xl">Students Management</div>
            </div> 

            <div className="m-3 flex  sm:flex-row justify-center items-center flex-wrap gap-x-3.5 gap-y-2">
                                <FacultyCard  content={"Total Students"}  count={2500} />
                                <FacultyCard content={"Today's Attendance"}  count={8} />
                                <FacultyCard content={"On Leave"}  count={8} />
                                <FacultyCard content={"Pending Actions"}  count={8} />                  
            </div>

            <div className=" bg-white  m-3 mx-12 rounded flex flex-col justify-center items-center">
                           
                <h4 className="text-xl m-4">Search & Filters</h4>
       
       
                 <form className="flex flex-col sm:flex-row gap-4 md:gap-5 items-center">
                    
                    <div className="flex flex-col sm:flex-row gap-2">
                          
                        {inputActive && <input className="border w-11/12 outline-0 p-1 rounded"  type="text"   placeholder={inputValue} />}
                            
                        <select className="border w-11/12 outline-0 p-1 whitespace-break-spaces rounded font-medium cursor-pointer" name="" onChange={(e) =>{ SetInputValue(e.target.value) 
                            if(e.target.value === "Student Name" || e.target.value === "Father Name"){
                                setInputActive(true)
                                setChooseClass(false)
                            }
                            else if(e.target.value === "Class"){
                                setChooseClass(true)
                                setInputActive(false)
                            }
                            else{
                                setInputActive(false)
                                setChooseClass(false)
                            }}}>
                            
                            <option value="Search & Filter">Search by</option>
                            <option value="Class">Class</option>
                            <option value="Student Name">Student Name</option>
                            <option value="Father Name">Father Name</option>
                            <option value="All Class">All Class</option>
                        
                        </select>
                        
                        {chooseClass && <select  className="border cursor-pointer outline-0 p-1 rounded font-medium">{classes.map((clas) => (<option value={clas} className="cursor-pointer">class-{clas}</option>))}</select>}
                    </div>
                        
                    <button className="px-4 py-1 bg-blue-700 text-white rounded">Submit</button>
                </form>
                           
                           
                <div className="w-full  max-h-125 overflow-auto bg-white m-3 rounded-2xl md:flex justify-center items-center">
                        
                    <table className="border m-6 overflow-hidden text-[12px] ">
                        
                        <thead>
                            <tr className="">
                                <th className="border whitespace-nowrap border-black px-6">S. NO.</th>
                                <th className="border whitespace-nowrap border-black px-6">Class</th>
                                <th className="border whitespace-nowrap border-black px-6">Student's Name</th>
                                <th className="border whitespace-nowrap border-black px-6">Father's Name</th>
                                <th className="border whitespace-nowrap border-black px-6">Total Fess</th>
                                <th className="border whitespace-nowrap border-black px-6">Paid Amount</th>
                                <th className="border whitespace-nowrap border-black px-6">UnPaid Amount</th>
                                <th className="border whitespace-nowrap border-black px-6">See Details</th>   
                                <th className="border whitespace-nowrap border-black px-6">Edit Details</th>
                            </tr>
                        </thead>
                    
                        <tbody>
                            <tr>
                                <td className="text-center whitespace-nowrap border border-black">1</td>
                                <td className="text-center whitespace-nowrap border border-black">10th</td>
                                <td className="text-center whitespace-nowrap border border-black"> Lalit Sharma</td>
                                <td className="text-center whitespace-nowrap border border-black">Dharmendra</td>
                                <td className="text-center whitespace-nowrap border border-black">5000</td>
                                <td className="text-center whitespace-nowrap border border-black">5000</td>
                                <td className="text-center whitespace-nowrap border border-black">0</td>
                                <td className="text-center whitespace-nowrap border border-black  2xl:py-2"><button className="bg-neutral-200 px-3 m-1 rounded-lg  text-black outline-1">Edit</button></td>
                                <td className="text-center whitespace-nowrap border border-black"><button className="bg-neutral-200 px-3 m-1 rounded-lg  text-black outline-1">Edit</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                    {/* tables ends here */}
                    {/* print table button */}

                <button className="px-3 mb-3 rounded-2xl text-center text-white bg-blue-700 cursor-pointer border border-black">Print</button>
            </div>
        </div>
    )
}