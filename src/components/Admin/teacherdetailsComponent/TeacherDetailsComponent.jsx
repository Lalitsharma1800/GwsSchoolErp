import { useEffect, useState } from "react"

export default function TeacherDetails({
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

    
    console.log(defaultSubject)
    const [teacher, setTeacher] = useState({
        name: "",
        classname: "",
        age: "",
        gender: "",
        phone: "",
        subject: "",
        qualification: "",
        experience: 0,
        adhaar: null,
        joined: null
    })
    
    useEffect(() => {
        setTeacher({
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
    },[defaultName, defaultClass, defaultAge, defaultGender, defaultPhone, defaultSubject, defaultQualification, defaultExperience, joined])

    const [edit, SetEdit] = useState(editable)
    console.log(teacher.subject)

    return(
        <div className="bg-white  m-3 p-5  sm:mx-12 gap-3 rounded flex flex-col justify-center ">
                                <div className="text-xl text-center   font-medium underline">Teacher Details</div>
                                <div className="flex flex-col  sm:ml-8 gap-1 text-[12px] sm:text-xl">
                                    
                                    <div> Name:<input type="text" disabled={!edit} value={teacher.name} onChange={(e) => setTeacher(prev => ({...prev, name: e.target.value}))}  className="text-black bg-white p-1 outline-0"/></div>
                                    <div> Class:<input type="text" disabled={!edit} value={teacher.classname} onChange={(e) => setTeacher(prev => ({...prev, classname: e.target.value}))}  className="text-black bg-white p-1 outline-0"/></div>
                                    <div> Phone no:<input type="text" disabled={!edit} value={teacher.phone}  onChange={(e) => setTeacher(prev => ({...prev, phone: e.target.value}))} className="text-black bg-white p-1 outline-0"/></div>
                                    <div> Qualification:<input type="text" disabled={!edit} value={teacher.qualification} onChange={(e) => setTeacher(prev => ({...prev, qualification: e.target.value}))}  className="text-black outline-0 bg-white p-1"/></div>
                                    <div> Subjects:<input type="text" disabled={!edit} value={teacher.subject}  onChange={(e) => setTeacher(prev => ({...prev, subject: e.target.value}))} className="text-black bg-white p-1 outline-0"/></div>
                                </div>
                                <div className="flex justify-center items-center"> 
                                    {!editable && <button onClick={() => SetEdit(!edit)}  className="px-2  hover:bg-blue-800 rounded-2xl text-center text-white bg-blue-700 cursor-pointer border border-black">Edit</button>}  
                                    {editable && <button onClick={() => SetEdit(!edit)}  className="px-2  hover:bg-blue-800 rounded-2xl text-center text-white bg-blue-700 cursor-pointer border border-black">Save</button>}
                                </div>
        </div>
    )
}