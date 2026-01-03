import {supabase} from "./../../supabase/index"
import store from "../../store/store";
import { setTeacherInfo } from "../../store/teacherInfoSlice"


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
                    store.dispatch(setTeacherInfo({
                                name: data[0]?.name,
                                age:  data[0]?.age,
                                gender: data[0]?.gender,
                                phone:  data[0]?.phone,
                                subject:  data[0]?.subjects,
                                qualification:  data[0]?.qualification,
                                experience:  data[0]?.experience,
                            })
                        )
                    return data;
        }  
        catch(error){
            throw error;
        }

}