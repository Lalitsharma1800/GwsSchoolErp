import { useCallback, useState } from "react";
import FeesCard from "../FeesCard/FeesCard";
import { TableHeading } from "../../Table/Table";
import { fees_details } from "../../../../fetchApi";
import { useForm } from "react-hook-form";



export default function FeesDashboard(){

    const totalDues = "2,000,00,000";
    const collectedDues = "1,00,00,000";
    const pendingDues = "1,00,00,00,000";
    const [searchedBy, setSearchedBy] = useState(null);
    const [inputValue, SetInputValue] = useState("")
    const [inputActive, setInputActive] = useState(false);
    const [chooseClass, setChooseClass] = useState(false)
    const classes = [1,2,3,4,5,6,7,8,9,10,11,12]
    const headings = [
                            "S.No." , "Class", "Student's Name", 
                            "Father's Name", "Mother's Name" ,"Total Amount",
                            "Paid Amount", "Due Amount", "See Details"
    ]

    const searchOption = [
                            "Search by", "Class", "Student Name", "Father Name", "All Students"
    ]

    const [list, setList] = useState(null);
    const [loading, setLoading] = useState(false)

    const onSubmit = useCallback(async (searchedBy) => {
        setLoading(true);
        if(searchedBy === "All Students"){
            console.log({inputValue})
            const list =  await fees_details();
            if(list){
                setList(list);
            }
        }
        else if(searchedBy == "Class"){
            console.log({inputValue})
            // const list = await feesDetailsWithClass(Number(inputValue))
            // if(list){
            //     setList(list);
            // }
        }
        else{
            console.log({inputValue})
            console.log("NOT ALL STUDENTS")
        }
        setLoading(false);
    },[])

    const {register, handleSubmit, formState: { errors, isSubmitting }} = useForm();
    
    const handleViewDetails = useCallback(async (id, index) => {}, [])

    return(
        <div className="bg-neutral-200 w-full min-h-screen">
            
             <div className="w-auto flex justify-center items-center  ">
                <div className="font-Roboto w-auto  text-2xl lg:text-3xl 2xl:text-5xl  py-4 px-12 text-center my-4 text-white bg-[#05424D] border border-black mx-1 md:mx-4 rounded-2xl">Fees Records</div>
            </div>
            {/* fees card */}
            <div className="m-3 flex  sm:flex-row justify-center items-center flex-wrap gap-x-3.5 gap-y-2">
                <FeesCard   
                    duesStatus={"Total Dues"}  amount={totalDues} 
                />

                <FeesCard 
                    duesStatus={"Collected Dues"}  amount={collectedDues} 
                />

                <FeesCard 
                    duesStatus={"Pending Dues"}  amount={pendingDues} 
                />

                <FeesCard 
                    duesStatus={"This Month"}  amount={pendingDues} 
                />

                <FeesCard 
                    duesStatus={"This Year"}  amount={pendingDues} 
                />

            </div>

            {/* Search and filter Section */}
            <div className="m-3 mb-0 mx-6 sm:mx-12 lg:mx-24 rounded flex flex-col justify-center items-center">
                
                <h4 className="text-xl m-4">
                    Search & Filters
                </h4>
                
                <form className="flex flex-col sm:flex-row gap-4 md:gap-5 items-center"  onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className="flex flex-col sm:flex-row gap-2">
                          
                        {inputActive && <input className="border w-11/12 outline-0 p-1 rounded"  type="text" {...register("filter", { required:true  })}   placeholder={searchedBy} />}
                        {chooseClass && <select onChange={(e) => SetInputValue(e.target.value)} className="border cursor-pointer outline-0 p-1 rounded font-medium">{classes.map((clas) => (<option value={clas} className="cursor-pointer">class-{clas}</option>))}</select>}
                       
                        <select className="border w-11/12 outline-0 p-1 whitespace-break-spaces rounded font-medium cursor-pointer" name="" onChange={(e) =>{ setSearchedBy(e.target.value) 
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
                            }
                            }}>
                                 
                            
                            {
                                searchOption.map((option) => {
                                    return <option value={option}>{option}</option>
                                })
                            }
                        
                        </select>
                        
                        
                    </div>
                        
                    <button className="px-4 py-1 bg-blue-700 text-white rounded" 
                            onClick={() => onSubmit(searchedBy)}    >
                            Submit
                    </button>
                </form>
                    
                    {/* Fees record table start*/}
                
                <div className="w-full  max-h-96 overflow-auto  m-3  bg-white lg:flex justify-center items-center">
                    
                    <table className="border  m-6 overflow-hidden text-[12px] 2xl:text-3xl">
                        
                        {/* heading in tables */}
                        
                        <TableHeading headings={headings}/>
                        
                        {/* rows in table */}
                        <tbody className="bg-white">
                            { list &&
                                    list.map((column,index) => (
                                        <tr key={`${column.id}`}>
                                            <td  className="text-center whitespace-nowrap border border-black px-2">
                                                {index+1}
                                            </td>
                                            
                                            <td  className="text-center whitespace-nowrap border border-black px-2">
                                                {column.class_teacher?.classes?.class_name}
                                            </td>
                                            
                                            <td  className="text-center whitespace-nowrap border border-black px-2">
                                                {column.full_name}
                                            </td>
                                            
                                            <td className="text-center whitespace-nowrap border border-black px-2">
                                                {column.father_name}
                                            </td>

                                            <td className="text-center whitespace-nowrap border border-black px-2">
                                                {column.mother_name}
                                            </td>
                                            <td className="text-center whitespace-nowrap border border-black px-2">
                                                {column.Total_Amount}
                                            </td>
                                            <td className="text-center whitespace-nowrap border border-black px-2">
                                                {column.Paid_Amount}
                                            </td>
                                            <td className="text-center whitespace-nowrap border border-black px-2">
                                                {column.due_amount}
                                            </td>
                                            
                                            <td className="text-center whitespace-nowrap border border-black px-2">
                                                <button onClick={async () =>{await handleViewDetails(column.id,index)}} 
                                                    className="bg-neutral-500 text-white m-1 px-2 rounded-2xl outline-black outline-1 cursor-pointer">
                                                        View
                                                </button>
                                            </td>
                                        
                                        </tr>
                                ))} 
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