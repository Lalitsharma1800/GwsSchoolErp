import {supabase} from "./../../supabase/index"
import store from "../../store/store";
import { setTeacherInfo } from "../../store/teacherInfoSlice"
import { delay } from "./../../supabase/index";


export async function editTeacherData(teacher){


               
        if (!/^\d+$/.test(teacher.phone)) {
            console.log("hii1")
            await delay(100);
            store.dispatch(setTeacherInfo({
                                phone:  "N/A", 
                            })
                        )
                        console.log("hii2")
            throw new Error("Invalid phone number, Please Enter a valid number");
        }
            
       
            const { data, error } = await supabase
                                    .from('teachers')
                                    .update({ name: teacher.name, 
                                            phone: Number(teacher.phone), 
                                            qualification: teacher.qualification, 
                                            subjects: teacher.subject, 
                                            age: teacher.age, 
                                            gender: teacher.gender.toLowerCase(),
                                            aadhar: Number(teacher.adhaar), 
                                            joined: teacher.joined,
                                            experience: Number(teacher.experience),
                                        })
                                    .eq('id', teacher.id)
                                    .select('name,phone,qualification,subjects,age,gender,aadhar,joined,experience')
                    if(error || !data){
                       if(error.code === ""){
                        throw new Error("Connect to internet...")
                       }
                        throw new Error("Updation Failed, Please try again later.");
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