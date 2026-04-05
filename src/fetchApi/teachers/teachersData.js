import { supabase } from "../../supabase";
import store from "../../store/store";
import { setTeacherInfo } from "../../store/teacherInfoSlice";
import validation from "@/inputValidation/inputValidation";

// count
export async function  teacherCount() {

    const { count, error } = await supabase
                            .from("teachers")
                            .select("*", { count: "exact", head: true });

    if(error || !count){
                if(error.code === ""){
                    throw new Error("No Internet Connection, Please Connect to internet");
                }
    }
    if (error) throw error;
    return count;
};


// basic teacher detail
export async function teacher_data(){

            const { data, error } = await supabase
                                            .from('class_teacher')
                                            .select(`
                                                    classes(
                                                      class_number,
                                                      section
                                                    ),
                                                    teachers(
                                                      id,
                                                      name,
                                                      phone
                                                    )
                                              `)

                if(error || !data){
                      if(error.code === ""){
                          throw new Error("No Internet Connection, Please Connect to internet")
                      }

                }
              if(error){
                throw error;
              }
              return data;
};



// specific teacher detail
export async function teacher_details(id){

    const { data, error } = await supabase
                                    .from('teachers')
                                    .select(`
                                      qualification, subjects,age,gender,joined,experience,aadhaar
                                      `)
                                      .eq('id', id);

      
      
      
      if(error || !data){
          if(error.code === ""){
              throw new Error("No Internet Connection, Please Connect to internet")
          }
          if(!data){
            throw new Error("No data found");
          }
          throw new Error("There is an issue in fetching teacher details");
      }


      let aadhaar;
      try{
              aadhaar = validation.formatAadhaar(data[0].aadhaar);
      }
      catch(error){
        throw error;
      }
      
      store.dispatch(setTeacherInfo({
        id: id,
        age: data[0].age,
        gender: data[0].gender,
        subjects: data[0].subjects,
        qualification: data[0].qualification,
        experience: data[0].experience,
        aadhaar: aadhaar,
        joined: data[0].joined,
      }))
};
  