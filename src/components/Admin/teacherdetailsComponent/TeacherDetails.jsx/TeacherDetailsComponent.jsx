import { useEffect, useState } from "react"
import { editTeacherData } from "../../../../updateApi"
import TeacherDetailsLine from "../TeacherDetailsLine.jsx/TeacherDetailsLine"

export default function TeacherDetails({
    id,
    defaultName,
    defaultClass,
    defaultPhone,
    defaultAge,
    defaultGender,
    defaultSubject,
    defaultQualification,
    defaultExperience = 0,
    adhaar = null,
    joined = null,
    editable = false,
}){
    const [loading, setLoading] = useState(false)
    const [teacher, setTeacher] = useState({
        id: "",
        name: "",
        classname: "",
        age: "",
        gender: "",
        phone: "",
        subject: "",
        qualification: "",
        experience: 0,
        adhaar: 0,
        joined: 0

    })
    
    useEffect(() => {
        if(!edit){
        setTeacher({
            id: id,
            name: defaultName,
            classname:defaultClass,
            age: defaultAge,
            gender:defaultGender,
            phone: defaultPhone,
            subject: defaultSubject,
            qualification: defaultQualification,
            experience: defaultExperience,
            adhaar: adhaar,
            joined: joined
        })
    }
    },[defaultName, defaultAge, defaultGender, defaultPhone, defaultSubject, defaultQualification, defaultExperience])

    const [edit, setEdit] = useState(editable)


     const handleSave = async (teacher) => {
        try{
            setLoading(true)
            const data = await editTeacherData(teacher);
            console.log("data:")
            console.log(data)
           

            setTeacher({
            name: data[0]?.name,
            age:  data[0]?.age,
            gender: data[0]?.gender,
            phone:  data[0]?.phone,
            subject:  data[0]?.subjects,
            qualification:  data[0]?.qualification,
            experience:  data[0]?.experience,
        })
            

        }
        catch(error){
            throw error;
        }
        finally{
            setEdit(!edit)
             setLoading(false)
        }
    }
    

    return(
        <div className="bg-white  m-3 p-5  sm:mx-12 gap-3 rounded flex flex-col justify-center ">
                                <div className="text-xl text-center   font-medium underline">Teacher Details</div>
                                <div className="flex flex-col  overflow-hidden  sm:ml-8 gap-0  text-[12px] sm:text-xl">
                                    
                                    <div className="sm:border flex  flex-col smallMobile:flex-row  sm:gap-3 font-semibold"><span className=" w-40 pl-2"> Name:</span><input type="text" disabled={!edit} value={teacher.name} onChange={(e) => setTeacher(prev => ({...prev, name: e.target.value}))}  className="text-black  inline w-11/12  max-w-6xl  px-1 outline-0 font-medium"/></div>
                                    <div className="sm:border border-t-white flex flex-col smallMobile:flex-row   sm:gap-3 font-semibold"> <span className=" w-40 pl-2">Class:</span><input type="text" disabled value={teacher.classname} onChange={(e) => setTeacher(prev => ({...prev, classname: e.target.value}))}  className="text-black w-11/12 max-w-6xl bg-white px-1 outline-0  font-medium"/></div>
                             
                                    <TeacherDetailsLine detailsName={"Age"} detailsValue={teacher.age} disabled={!edit} onChangeHandler={(e) => setTeacher(prev => ({...prev, age: e.target.value}))}/>
                                    <TeacherDetailsLine detailsName={"Gender"} detailsValue={teacher.gender} disabled={!edit} onChangeHandler={(e) => setTeacher(prev => ({...prev, gender: e.target.value}))}/>
                                    <TeacherDetailsLine detailsName={"Phone"} detailsValue={teacher.phone} disabled={!edit} onChangeHandler={(e) => setTeacher(prev => ({...prev, phone: e.target.value}))}/>
                                    <TeacherDetailsLine detailsName={"Aadhar No"} detailsValue={teacher.adhaar}/>
                                    <TeacherDetailsLine detailsName={"Joined On"} detailsValue={teacher.joined}/>
                                    <TeacherDetailsLine detailsName={"Qualification"} detailsValue={teacher.qualification} disabled={!edit} onChangeHandler={(e) => setTeacher(prev => ({...prev, qualification: e.target.value}))}/>
                                    <TeacherDetailsLine detailsName={"Subjects"} detailsValue={teacher.subject} disabled={!edit} onChangeHandler={(e) => setTeacher(prev => ({...prev, subject: e.target.value}))}/>
                                    <TeacherDetailsLine detailsName={"Experience"} detailsValue={teacher.experience} disabled={!edit} onChangeHandler={(e) => setTeacher(prev => ({...prev, experience: e.target.value}))}/>
                                    
                                  
                                </div>
                                <div className="flex justify-center items-center"> 
                                    {!edit && <button onClick={() => setEdit(!edit)}  className="px-2  hover:bg-blue-800 rounded-2xl text-center text-white bg-blue-700 cursor-pointer border border-black">Edit</button>}  
                                    {edit  && <div  className="px-2  hover:bg-blue-800 rounded-2xl text-center text-white bg-blue-700 cursor-pointer border border-black">{loading && <div className=" m-1 w-4  h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>}{!loading && <button  onClick={() =>{
                                         handleSave(teacher)
                                    }}>Save</button>}</div>}
                                
                                </div>
                                

        </div>
    )
}