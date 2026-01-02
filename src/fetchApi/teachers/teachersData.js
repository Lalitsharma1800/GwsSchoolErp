import { supabase } from "../../supabase";
import store from "../../store/store";
import { setTeacherInfo } from "../../store/teacherInfoSlice";

export async function teacher_data(){
const { data, error } = await supabase
  .from('class_teacher')
  .select(`
    classes(
    class_name
    ),
    teachers(
    id,
    name,
    phone
    )
     `)
  if(error){
    throw error;
  }
  return data;
};


export async function  teacherCount() {

    const { count, error } = await supabase
                            .from("teachers")
                            .select("*", { count: "exact", head: true });
    
    if (error) throw error;

    return count;
    
};


export async function teacher_details(id){

let { data, error } = await supabase
  .from('teachers')
  .select(`
    qualification, subjects,age,gender,joined,experience,aadhar
     `)
     .eq('id', id)
  if(error){
    console.log(error)
    throw error;
  }
 console.log(data)
  store.dispatch(setTeacherInfo({
    id: id,
    age: data[0].age,
    gender: data[0].gender,
    subjects: data[0].subjects,
    qualification: data[0].qualification,
    experience: data[0].experience,
    aadhar: data[0].aadhar,
    joined: data[0].joined,
  }))
  return data;
};
  