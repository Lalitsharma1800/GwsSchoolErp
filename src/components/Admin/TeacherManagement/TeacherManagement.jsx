import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Spinner } from "@/components/ui/spinner";

import {
     teacher_data, 
     teacherCount, 
     teacher_details 
} from "../../../fetchApi";

import { setTeacherInfo } from "../../../store/teacherInfoSlice";

import FacultyCard from "./../../FacultyCard/FacultyCard"
import TeacherDetails from "../teacherdetailsComponent/TeacherDetails/TeacherDetailsComponent";


export default function TeacherManagement(){

    const dispatch = useDispatch();

    const [totalCount, setTotalCount] = useState("")
    const [teachersList, setTeacherList] = useState(null)
    const [hasSearched, setHasSearched] = useState(false)

    const[countLoading, setCountLoading] = useState(false);
    
    const [isListLoading, setIsListLoading] = useState(false)
    const [isDetailsLoading, setIsDetailsLoading] = useState(false)
    const [showDetails, setShowDetails] = useState(false)

 /* ----------------------------------
     Fetch teacher count on mount
  -----------------------------------*/

useEffect(() => {
    const fetchCount = async () => {
        try{
            setCountLoading(true);
            const count = await teacherCount();
            setTotalCount(count)
            setCountLoading(false);
        }
        catch(error){
            console.error("Failed to fetch teacher count", error);
        }
    };

    fetchCount();
},[]);


 /* ----------------------------------
     Fetch teachers list
  -----------------------------------*/


const handleSearch = async () => {
    try{
        setIsListLoading(true)
        const teacher_List = await teacher_data();
        setTeacherList(teacher_List)
    }
    catch(error){
        throw error;
    } 
    finally{
        setIsListLoading(false)
        setHasSearched(true)
    }
};
  
  /* ----------------------------------
     Fetch teacher details
  -----------------------------------*/
const handleViewDetails = async (id,index) => {
    
        try{
            setShowDetails(false)
            setIsDetailsLoading(true)

            
            await teacher_details(id) 

            const row = teachersList[index];
            if (!row) return;

                dispatch(
                    setTeacherInfo({
                        id: row.teachers?.id,
                        name: row.teachers?.name,
                        classname: row.classes?.class_name,
                        phone: row.teachers?.phone,
                    })
                )
                
        }
        catch(error){
        throw error;
        }
        finally{
        setIsDetailsLoading(false)
        setShowDetails(true)
        }
};

return(     
    <div className="bg-neutral-200 min-h-screen pb-3 border-b-2">
        
            {/* Header */}
            <div className="w-auto   flex justify-center items-center  ">
                <h2 className="font-Roboto w-auto  sm:text-2xl lg:text-3xl 2xl:text-5xl py-1 px-2 sm:py-4 sm:px-12 text-center my-4 text-white bg-[#05424D] border border-black mx-1 md:mx-4 rounded-2xl">
                    Teacher Management
                </h2>
            </div> 
            {/* Stats */}
            <div className="m-3   flex  sm:flex-row justify-center items-center flex-wrap gap-x-3.5 gap-y-2">
                                <FacultyCard content={"Total Faculty"}  count={totalCount} countLoading={countLoading} />
                                <FacultyCard content={"Today's Attendance"}  count={totalCount} countLoading={countLoading}/>
                                <FacultyCard content={"On Leave"}  count={0} countLoading={countLoading}/>
                                <FacultyCard content={"Pending Actions"}  count={0} countLoading={countLoading}/>                  
            </div>

            <div className=" bg-white  m-3 sm:mx-12 rounded flex flex-col justify-center items-center">

                <h4 className="text-xl mt-4">
                    Search & Filters
                </h4>
                    {/* Table */}                                                         
                <div className="w-full  max-h-125 overflow-auto bg-white mb-3 px-3 sm:flex justify-center items-center">
                        
                    <table className="border  overflow-hidden text-[12px] md:text-[16px]">
                        <thead>
                            <tr>
                                
                                <th className="border whitespace-nowrap border-black px-6">
                                    S. NO.
                                </th>
                                
                                <th className="border whitespace-nowrap border-black px-6">
                                    Class
                                </th>
                                
                                <th className="border whitespace-nowrap border-black px-6">
                                        Name
                                </th>
                                
                                <th className="border whitespace-nowrap border-black px-6">
                                    Phone no
                                </th>
                                
                                <th className="border whitespace-nowrap border-black px-6">
                                    See Details
                                </th>   
                            </tr>
                        </thead>
                        <tbody>
                                { teachersList &&
                                    teachersList.map((column,index) => (
                                        <tr key={`${column.teachers.id}`}>
                                            <td  className="text-center whitespace-nowrap border border-black px-2">
                                                {index+1}
                                            </td>
                                            
                                            <td  className="text-center whitespace-nowrap border border-black px-2">
                                                {column.classes?.class_name}
                                            </td>
                                            
                                            <td  className="text-center whitespace-nowrap border border-black px-2">
                                                {column.teachers?.name}
                                            </td>
                                            
                                            <td className="text-center whitespace-nowrap border border-black px-2">
                                                {column.teachers?.phone}
                                            </td>
                                            
                                            <td className="text-center whitespace-nowrap border border-black px-2">
                                                <button onClick={ () =>{ handleViewDetails(column.teachers.id,index)}} 
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
                    

                <div className="px-3 mb-3 hover:bg-blue-800 rounded-2xl text-center text-white bg-blue-700 cursor-pointer border border-black">
                    
                    {/* search table button */}
                    {!hasSearched &&   <div>
                                        {!isListLoading &&  <button onClick={async () => {
                                                                    await handleSearch()}} 
                                                                className="cursor-pointer">
                                                            Search
                                                        </button>
                                        }
                                        {isListLoading && <div 
                                                        className=" m-1 w-4  h-4 border-2  border-white border-t-transparent rounded-full animate-spin">
                                                    </div>
                                        }
                                    </div>
                    }
                    {/* print table button */}
                    {hasSearched && <div>Print</div>}
                </div>
            </div>
                {/* Details Section */}
            {
                !isDetailsLoading && showDetails  && <TeacherDetails setTeacherList={setTeacherList}/>
            }
            {
                isDetailsLoading  && <div 
                                className="w-full  flex justify-center items-center">
                                <div className=" m-1 w-8  h-8 border-2 bg-neutral-200 border-black border-t-transparent rounded-full animate-spin">
                                </div>
                            </div>
            }
    </div>
)}