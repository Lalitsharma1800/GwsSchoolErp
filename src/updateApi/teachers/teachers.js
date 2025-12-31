import {supabase} from "./../../supabase/index"

export async function editTeacherData(teacher){
    
try{
    const { data, error } = await supabase
                            .from('teachers')
                            .update({ name: teacher.name, 
                                    phone: teacher.phone, 
                                    qualification: teacher.qualification, 
                                    subjects: teacher.subject, 
                                    age: teacher.age, 
                                    gender: teacher.gender.toLowerCase(),
                                    aadhar: Number(teacher.adhaar), 
                                    joined: teacher.joined,
                                    experience: Number(teacher.experience)
                                 })
                            .eq('id', teacher.id)
                            .select('name,phone,qualification,subjects,age,gender,aadhar,joined,experience')
    if(error || !data){
        console.log(error)
        throw error;
    } 
    console.log(data)
    return data;
}  
catch(error){
    throw error;
}

}