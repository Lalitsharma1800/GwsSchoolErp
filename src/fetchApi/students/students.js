import { supabase } from "../../supabase";
import store from "../../store/store";

export async function student_data(){
const { data, error } = await supabase
  .from('students_basic')
  .select(`
    class_id, 
    roll_no,
    admission_no,
    email,
    father_name,
    mother_name
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


