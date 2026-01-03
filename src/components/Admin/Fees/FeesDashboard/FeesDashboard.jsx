import { useState } from "react";
import FeesCard from "../FeesCard/FeesCard";


export default function FeesDashboard(){

    const totalDues = "2,00,00,000";
    const collectedDues = "1,00,00,000";
    const pendingDues = "1,00,00,00,000";
    const [inputValue, SetInputValue] = useState("")
    const [inputActive, setInputActive] = useState(false);
    const [chooseClass, setChooseClass] = useState(false)
    const classes = [1,2,3,4,5,6,7,8,9,10,11,12]
    

    return(
        <div className="bg-neutral-200 w-full min-h-screen">
            
             <div className="w-auto flex justify-center items-center  ">
                <div className="font-Roboto w-auto  text-2xl lg:text-3xl 2xl:text-5xl  py-4 px-12 text-center my-4 text-white bg-[#05424D] border border-black mx-1 md:mx-4 rounded-2xl">Fees Records</div>
            </div>
            
            <div className="m-3 flex  sm:flex-row justify-center items-center flex-wrap gap-x-3.5 gap-y-2">
                <FeesCard  duesStatus={"Total Dues"}  amount={totalDues} />
                <FeesCard duesStatus={"Collected Dues"}  amount={collectedDues} />
                <FeesCard duesStatus={"Pending Dues"}  amount={pendingDues} />
                <FeesCard duesStatus={"This Month"}  amount={pendingDues} />
                <FeesCard duesStatus={"This Year"}  amount={pendingDues} />
            </div>

            {/* Search and filter Section */}
            <div className="m-3 mb-0 mx-6 sm:mx-12 lg:mx-24 rounded flex flex-col justify-center items-center">
                
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
                    
                    {/* Fees record table start*/}
                
                <div className="w-full  max-h-96 overflow-auto  m-3  bg-white lg:flex justify-center items-center">
                    
                    <table className="border  m-6 overflow-hidden text-[12px] 2xl:text-3xl">
                        
                        {/* heading in tables */}
                        <thead  className="bg-white" >
                        <tr>
                            <th className="border whitespace-nowrap border-black p-2 2xl:px-6">S. NO.</th>
                            <th className="border whitespace-nowrap border-black p-2 2xl:px-6">Class</th>
                            <th className="border whitespace-nowrap border-black p-2 2xl:px-6">Student's Name</th>
                            <th className="border whitespace-nowrap border-black p-2 2xl:px-6">Father's Name</th>
                            <th className="border whitespace-nowrap border-black p-2 2xl:px-6">Total Fess</th>
                            <th className="border whitespace-nowrap border-black p-2 2xl:px-6">Paid Amount</th>
                            <th className="border whitespace-nowrap border-black p-2 2xl:px-6">UnPaid Amount</th>
                            <th className="border whitespace-nowrap border-black p-2 2xl:px-6">See Details</th>
                            <th className="border whitespace-nowrap border-black p-2 2xl:px-6">Edit Details</th>
                            
                        </tr>
                        </thead>
                        
                        {/* rows in table */}
                        <tbody className="bg-white">
                            <tr >
                                <td className="text-center whitespace-nowrap border border-black  2xl:py-2">1</td>
                                <td className="text-center whitespace-nowrap border border-black  2xl:py-2">10th</td>
                                <td className="text-center whitespace-nowrap border border-black  2xl:py-2"> Lalit Sharma</td>
                                <td className="text-center whitespace-nowrap border border-black  2xl:py-2">Dharmendra</td>
                                <td className="text-center whitespace-nowrap border border-black  2xl:py-2">5000</td>
                                <td className="text-center whitespace-nowrap border border-black  2xl:py-2">5000</td>
                                <td className="text-center whitespace-nowrap border border-black  2xl:py-2">0</td>
                                <td className="text-center whitespace-nowrap border border-black  2xl:py-2"><button className="bg-neutral-200 px-3 m-1 rounded-lg  text-black outline-1">Details</button></td>
                                <td className="text-center whitespace-nowrap border border-black  2xl:py-2"><button className="bg-neutral-200 px-3 m-1 rounded-lg  text-black outline-1">Edit</button></td>
                            </tr>
                           
                            
                        </tbody>
                    </table>
                </div>
                            {/* tables ends here */}
                            {/* button for print table */}
                <button className="px-3 mb-3 rounded-2xl text-center text-white bg-blue-700 cursor-pointer border border-black">Print</button>
            </div>
        </div>
    )
}