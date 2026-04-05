import { supabase } from "../../supabase";
import store from "../../store/store";

// student data with class filter
export async function searchWithClass(classNumber) {
const { data, error } = await supabase
                                  .from('students_basic')
                                  .select(
                                    `
                                    full_name,
                                    father_name,
                                    mother_name,
                                    total_amount,
                                    paid_amount,
                                    due_amount,
                                    ...class_teacher!inner(
                                      ...classes!inner(
                                        class_name
                                      )
                                    )
                                    `,
                                  )
                                  .eq(
                                    'classes.class_number',
                                    classNumber,
                                  )
         if(error || !data){
            if(error.code === ""){
              throw new Error("No Internet..");
            }
            if(!data){
              throw new Error("No data found");
            }
            throw new Error("There is an issue, please try again later");
         }   
         return data;
}

// fees details of an student
export async function  fees_details() {
      const { data, error } = await supabase
                              .from('students_basic')
                              .select(`
                                  id,
                                  full_name,
                                  father_name,
                                  mother_name,
                                  Total_Amount,
                                  Paid_Amount,
                                  due_amount,
                                  class_teacher(
                                  classes(
                                  class_name
                              ))
                                  `)
  if(error){
    throw error;
  }
  console.log(data)
  return data;
}

