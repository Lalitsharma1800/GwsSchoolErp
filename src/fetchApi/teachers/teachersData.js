import { supabase } from "../../supabase";

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
  return data;
};
  