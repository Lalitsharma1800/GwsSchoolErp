import { supabase } from "../../supabase";
import store from "../../store/store";


class GetStudentData{

  // student data with class filter
  async getbyClass(class_number = 1){
        const obj = await supabase
                                  .from('class_teacher')
                                  .select(`
                                    students_basic(
                                      full_name,
                                      father_name,
                                      mother_name,
                                      Total_Amount,
                                      Paid_Amount,
                                      due_amount
                                    ),
                                    classes(
                                      class_number
                                    )
                                  `)
                                  .eq('classes.class_number', class_number)
        const data = obj.data;
        const error = obj.error;
         if(error || !data){
            if(error.code === ""){
              throw new Error("No Internet..");
            }
            if(error){
              throw new Error("There is an issue, please try again later");
            }
              throw new Error("No data found");
         }
        

         console.log(data);   
         return data;
  }

// get fees details and basic details for all
  async ForAll(){

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
                                  class_number
                              ))
                                  `)
            if(error || !data){
                      if(error.code === ""){
                          throw new Error("No Internet Connection, Please Connect to internet")
                      }
                     if(error){
                        throw new Error("There is an issue, please try again later");
                      }
                        throw new Error("No data found");
                }
            console.log(data);
            return data;
  }
}

const getStudentData = new GetStudentData();
export default getStudentData;



