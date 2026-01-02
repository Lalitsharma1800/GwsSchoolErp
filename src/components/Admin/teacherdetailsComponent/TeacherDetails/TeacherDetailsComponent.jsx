import {  useState } from "react"
import { useDispatch, useSelector } from "react-redux";


import { editTeacherData } from "../../../../updateApi"
import { setTeacherInfo } from "../../../../store/teacherInfoSlice"
import TeacherDetailsLine from "../TeacherDetailsLine.jsx/TeacherDetailsLine"



export default function TeacherDetails({setdata}){
    const dispatch = useDispatch();

    const teacher = useSelector((state) => state.teacherInfo.teacherInfo);
    
    const [edit, setEdit] = useState(false)
    const [loading, setLoading] = useState(false)

    
    const handleSave = async () => {

        try{
            setLoading(true)

            await editTeacherData(teacher);
            
            setdata((prev) =>
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
        }
        catch(error){
            console.error(error)
        }
        finally{
            setEdit(false)
            setLoading(false)
        }
    };
    

    return(
        <div className="bg-white  m-3 p-5  sm:mx-12 gap-3 rounded flex flex-col justify-center ">
                                <div className="text-xl text-center   font-medium underline">Teacher Details</div>
                                <div className="flex flex-col  overflow-hidden  sm:ml-8 gap-0  text-[12px] sm:text-xl border-t">
                                    
                                    <TeacherDetailsLine detailsName={"Name"} detailsValue={teacher.name} disabled={!edit} onChangeHandler={(e) => dispatch(setTeacherInfo({name: e.target.value}))}/>
                                    <TeacherDetailsLine detailsName={"Class"} detailsValue={teacher.classname} onChangeHandler={(e) => dispatch(setTeacherInfo({classname: e.target.value}))}/>
                                    <TeacherDetailsLine detailsName={"Age"} detailsValue={teacher.age} disabled={!edit} onChangeHandler={(e) => dispatch(setTeacherInfo({age: e.target.value}))}/>
                                    <TeacherDetailsLine detailsName={"Gender"} detailsValue={teacher.gender} disabled={!edit} onChangeHandler={(e) => dispatch(setTeacherInfo({gender: e.target.value}))}/>
                                    <TeacherDetailsLine detailsName={"Phone"} detailsValue={teacher.phone} disabled={!edit} onChangeHandler={(e) => dispatch(setTeacherInfo({phone: e.target.value}))}/>
                                    <TeacherDetailsLine detailsName={"Aadhar No"} detailsValue={teacher.aadhar??"N/A"}/>
                                    <TeacherDetailsLine detailsName={"Joined On"} detailsValue={teacher.joined}/>
                                    <TeacherDetailsLine detailsName={"Qualification"} detailsValue={teacher.qualification} disabled={!edit} onChangeHandler={(e) => dispatch(setTeacherInfo({qualification: e.target.value}))}/>
                                    <TeacherDetailsLine detailsName={"Subjects"} detailsValue={teacher.subjects} disabled={!edit} onChangeHandler={(e) => dispatch(setTeacherInfo({subjects: e.target.value}))}/>
                                    <TeacherDetailsLine detailsName={"Experience"} detailsValue={teacher.experience} disabled={!edit} onChangeHandler={(e) => dispatch(setTeacherInfo({experience: e.target.value}))}/>
                                    
                                  
                                </div>
                                <div className="flex justify-center items-center"> 
                                    {!edit && <button onClick={() => setEdit(!edit)}  className="px-2  hover:bg-blue-800 rounded-2xl text-center text-white bg-blue-700 cursor-pointer border border-black">Edit</button>}  
                                    {edit  && <div  className="px-2  hover:bg-blue-800 rounded-2xl text-center text-white bg-blue-700 cursor-pointer border border-black">{loading && <div className=" m-1 w-4  h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>}{!loading && <button  onClick={() =>{
                                         handleSave()
                                    }}>Save</button>}</div>}
                                
                                </div>
                                

        </div>
    )
}