import {supabase} from "./../../supabase/index"
import store from "../../store/store";
import { setTeacherInfo } from "../../store/teacherInfoSlice"
import { delay } from "./../../supabase/index";
import validation from "@/inputValidation/inputValidation";


export async function editTeacherData(teacher){

        await delay(100);
        // validate name
        validation.nameValidation(teacher.name);
        // validate phone number
        validation.phoneValidation(teacher.phone);
        // age validation
        validation.ageValidationforTeacher(teacher.age);
        // aadhar validation
        validation.aadharValidation(teacher.aadhaar);
        // aadhaar cleanup
        let aadhaar =  validation.cleanAadhaar(teacher.aadhaar);
       
        const { data, error } = await supabase
                                        .from('teachers')
                                        .update(
                                            { 
                                                name: teacher.name, 
                                                phone: Number(teacher.phone), 
                                                qualification: teacher.qualification, 
                                                subjects: teacher.subjects, 
                                                age: teacher.age, 
                                                gender: teacher.gender.toLowerCase(),
                                                aadhaar: aadhaar, 
                                                joined: teacher.joined,
                                                experience: Number(teacher.experience),
                                            })
                                        .eq('id', teacher.id)
                                        .select('name,phone,qualification,subjects,age,gender,aadhaar,joined,experience')

            if(error || !data){
                if(error.code === ""){
                    throw new Error("Connect to internet...")
                }
                if(error.code == "22P02"){
                    throw new Error("Invalid Input, Please Enter a valid input");
                }
                throw new Error("Updation Failed, Please try again later.");
            } 

            aadhaar = validation.formatAadhaar(data[0]?.aadhaar);
            store.dispatch(setTeacherInfo({
                        name: data[0]?.name,
                        age:  data[0]?.age,
                        gender: data[0]?.gender,
                        phone:  data[0]?.phone,
                        subject:  data[0]?.subjects,
                        qualification:  data[0]?.qualification,
                        experience:  data[0]?.experience,
                        aadhaar: aadhaar
                    })
                )
}