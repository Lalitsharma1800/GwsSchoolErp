import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
     teacher_data, 
     teacherCount, 
     teacher_details 
} from "../../../fetchApi";

import { setTeacherInfo } from "../../../store/teacherInfoSlice";

import FacultyCard from "./../../FacultyCard/FacultyCard"
import TeacherDetails from "../teacherdetailsComponent/TeacherDetails/TeacherDetailsComponent";
import Pagedescriptor from "@/components/pagedescriptor/Pagedescriptor";


export default function TeacherManagement(){

    const dispatch = useDispatch();

    const[isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const [totalCount, setTotalCount] = useState("")
    const [teachersList, setTeacherList] = useState(null)
    const [hasSearched, setHasSearched] = useState(false)

    const[countLoading, setCountLoading] = useState(false);
    
    const [isListLoading, setIsListLoading] = useState(false)
    const [isDetailsLoading, setIsDetailsLoading] = useState(false)
    const [showDetails, setShowDetails] = useState(false)

    const[viewId, setViewId] = useState(null);

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
            setErrorMessage(error.message);
            setIsError(true);
        }
    };

    fetchCount();
},[]);


const stats = [
    {content:"Total Faculty", count:totalCount, countLoading:countLoading},
    {content:"Today's Attendance", count:totalCount, countLoading:countLoading},
    {content:"On Leave", count:totalCount, countLoading:countLoading},
    {content:"Pending", count:totalCount, countLoading:countLoading}
]


 /* ----------------------------------
     Fetch teachers data/list
  -----------------------------------*/


const handleSearch = async () => {
    try{
        setIsListLoading(true)
        const teacher_List = await teacher_data();
        teacher_List.map((data) => {
                data.viewStatus = false;
        })
        setTeacherList(teacher_List);
        setIsError(false);
    }
    catch(error){
            setErrorMessage(error.message);
            setIsError(true);
            setHasSearched(false);
    } 
    finally{
        setIsListLoading(false)
        setHasSearched(true)
    }
};
  
  /* ----------------------------------
     Fetch individual teacher details
  -----------------------------------*/
const handleViewDetails = async (id,index) => {
    
        try{
            // loading spinner and remove details component from screen
            setShowDetails(false);
            setIsDetailsLoading(true);

            await teacher_details(id); 

            const row = teachersList[index];
            if (!row) return;

            const _class = `${row.classes?.class_number}'${row.classes?.section}'`  ;

                dispatch(
                    setTeacherInfo({
                        id: row.teachers?.id,
                        name: row.teachers?.name,
                        classname: _class,
                        phone: row.teachers?.phone,
                    })
                )
                setViewId(id);
                setIsError(false);
                
        }
        catch(error){
            setErrorMessage(error.message);
            setIsError(true);
        }
        finally{
        setIsDetailsLoading(false)
        setShowDetails(true)
        }
    };

return(    
    <>    
    <div>
            <div className="bg-linear-to-r from-white via-white/90 to-white/0">
                <Pagedescriptor text="Faculty Management" />
            </div>
        
           
            {/* Error */}
            {isError && <p className="font-Inter text-red-500 flex justify-center w-full ">{errorMessage}, please try again later.</p>}


            {/* Stats */}
            <div className="m-3   flex  sm:flex-row justify-center items-center flex-wrap gap-x-3.5 gap-y-2">
                                {
                                    stats.map((stat, index) => (
                                        <FacultyCard key={index} content={stat.content} count={stat.count} countLoading={stat.countLoading} />
                                    ))
                                }
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
                                                {column.classes?.class_number} {column.classes?.section}
                                            </td>
                                            
                                            <td  className="text-center whitespace-nowrap border border-black px-2">
                                                {column.teachers?.name}
                                            </td>
                                            
                                            <td className="text-center whitespace-nowrap border border-black px-2">
                                                {column.teachers?.phone}
                                            </td>
                                            
                                            <td className="text-center whitespace-nowrap border border-black px-2">
                                                <button onClick={ () =>{ handleViewDetails(column.teachers.id,index)}} 
                                                    className="bg-neutral-500 flex justify-center items-center text-white m-1 px-2 rounded-2xl outline-black outline-1 cursor-pointer gap-2">
                                                        View
                                                        {viewId === column.teachers.id && <div className="w-1 h-1 rounded-full text-2xl bg-red-500"></div>}
                                                </button>
                                                

                                            </td>
                                        
                                        </tr>
                                ))}
                        </tbody>
                    </table>
                </div>

                    {/* tables ends here */}
                    

                <div className="px-3 mb-3 hover:bg-blue-800 rounded-2xl text-center text-white bg-blue-700 cursor-pointer border border-black">
                    
                    {/* search and refresh button */}
                    {
                        !isListLoading && <div>
                                            {
                                                hasSearched &&  
                                                        <button onClick={async () => {
                                                                                        await handleSearch()}} 
                                                                                    className="cursor-pointer">
                                                                                refresh
                                                        </button>
                                            }
                                            {
                                                !hasSearched && 
                                                    <button onClick={async () => {
                                                                        await handleSearch()}} 
                                                                    className="cursor-pointer">
                                                                Search
                                                    </button>                                                   
                                            }
                                        </div>
                    }
                    {/* Spinner while list load */}
                    { isListLoading && <div className=" m-1 w-4  h-4 border-2  border-white border-t-transparent rounded-full animate-spin"></div> }                  
                </div>
            </div>
                {/* Details Section */}
            {
                !isDetailsLoading && showDetails  && <TeacherDetails setTeacherList={setTeacherList} setShowDetails={setShowDetails} setView={setViewId}/>
            }
            {
                isDetailsLoading  && <div 
                                className="w-full  flex justify-center items-center">
                                <div className=" m-1 w-8  h-8 border-2  border-black border-t-transparent rounded-full animate-spin">
                                </div>
                            </div>
            }
    </div>
    </>

)}