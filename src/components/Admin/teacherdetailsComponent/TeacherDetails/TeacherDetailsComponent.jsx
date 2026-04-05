import {  useState } from "react"
import { useDispatch, useSelector } from "react-redux";


import { editTeacherData } from "../../../../updateApi"
import { setTeacherInfo } from "../../../../store/teacherInfoSlice"
import TeacherDetailsLine from "../TeacherDetailsLine.jsx/TeacherDetailsLine";
import { delay } from "@/supabase";
import validation from "@/inputValidation/inputValidation";



export default function TeacherDetails({setTeacherList}){
    const dispatch = useDispatch();

    const teacher = useSelector((state) => state.teacherInfo.teacherInfo);
    
    const [edit, setEdit] = useState(false)
    const [loading, setLoading] = useState(false);
    
    const[isError, setIsError] = useState(false);
    const[errorMessage, setErrorMessage] = useState(null);

    
    const handleSave = async () => {

        try{
            setLoading(true)

            

            await editTeacherData(teacher);
            
            setTeacherList((prev) =>
                prev.map(row =>
                    row.teachers.id === teacher.id
                        ? {
                            ...row,
                            teachers: {
                                ...row.teachers,
                                name: teacher.name,
                                phone: teacher.phone,
                            },
                            }
                        : row
                        )
            );
            setIsError(false);
        }
        catch(error){
            setIsError(false);
            await delay(50);
            setIsError(true);
            setErrorMessage(error.message);
        }
        finally{
            setEdit(false)
            setLoading(false)
        }
    };

    const updateField = (field) => (e) => dispatch(setTeacherInfo({ [field]: e.target.value }));

    

    return(
        <div className="bg-white  m-3 p-5  sm:mx-12 gap-3 rounded flex flex-col justify-center ">                   
            <h2 className="text-xl text-center   font-medium underline">
                Teacher Details
            </h2>

            <div className="flex flex-col  overflow-hidden  sm:ml-8 gap-0  text-[12px] sm:text-xl border-t">
                
                <TeacherDetailsLine 
                    detailsName={"Name"} 
                    detailsValue={teacher.name} 
                    disabled={!edit} 
                    onChangeHandler={updateField("name")}
                />

                <TeacherDetailsLine 
                    detailsName={"Class"} 
                    detailsValue={teacher.classname}
                    
                />

                <TeacherDetailsLine 
                    detailsName={"Age"} 
                    detailsValue={teacher.age} 
                    disabled={!edit} 
                    onChangeHandler={updateField("age")}
                />

                <TeacherDetailsLine 
                    detailsName={"Gender"} 
                    detailsValue={teacher.gender} 
                    disabled={!edit} 
                    onChangeHandler={updateField("gender")}
                />

                <TeacherDetailsLine 
                    detailsName={"Phone"}
                    detailsValue={teacher.phone} 
                    disabled={!edit} 
                    onChangeHandler={updateField("phone")}
                />

                <TeacherDetailsLine 
                    detailsName={"Aadhaar No"} 
                    detailsValue={teacher.aadhaar??"N/A"}
                    disabled={!edit} 
                    onChangeHandler={updateField("aadhaar")}
                />

                <TeacherDetailsLine 
                    detailsName={"Joined On"} 
                    detailsValue={teacher.joined}
                />

                <TeacherDetailsLine 
                    detailsName={"Qualification"} 
                    detailsValue={teacher.qualification} 
                    disabled={!edit} 
                    onChangeHandler={updateField("qualification")}
                />

                <TeacherDetailsLine 
                    detailsName={"Subjects"} 
                    detailsValue={teacher.subjects} 
                    disabled={!edit}
                    onChangeHandler={updateField("subjects")}
                />

                <TeacherDetailsLine 
                    detailsName={"Experience"} 
                    detailsValue={teacher.experience} 
                    disabled={!edit} 
                    onChangeHandler={updateField("experience")}
                />
            </div>
            
            {/*  save & edit button */}
            <div className="flex justify-center items-center"> 
                {/*  this is edit button */}
                {!edit && (
                    <button 
                        onClick={() => setEdit(true)}
                        className="px-2  hover:bg-blue-800 rounded-2xl text-center text-white bg-blue-700 cursor-pointer border border-black">
                            Edit
                    </button>
                )}  
                 {/* this is save button */}
                {edit  && 
                    <div  
                        className="px-2  hover:bg-blue-800 rounded-2xl text-center text-white bg-blue-700 cursor-pointer border border-black">
                            {/*  this is spinner */}
                            {loading && 
                                <div 
                                    className=" m-1 w-4  h-4 border-2 border-white border-t-transparent rounded-full animate-spin">
                                </div>
                            }
                            {/* this is save button */}
                            {!loading &&
                                <button
                                    disabled={loading}  
                                    onClick={() =>{handleSave()}
                                }>
                                    Save
                                </button>
                            }
                    </div>
                }
            </div>
            {/* Error */}
            {isError && <p className="font-Inter text-red-500 flex justify-center w-full ">{errorMessage}</p>}
        </div>
    )
}