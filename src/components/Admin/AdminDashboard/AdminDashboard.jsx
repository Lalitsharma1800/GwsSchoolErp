import { 
            examIcon,  feeIcon, stafficon, noticeicon, salleryicon, recordIcon,
            resulticon, teachericon,  studenticon, calendarIcon,    
        } from "../../../assets/index";
import Card from "../Card/Card";
import authentication from "../../../supabase/authentication";
import { useNavigate } from "react-router-dom";



export default function AdminDashboard(){

    const navigate = useNavigate()

    const  handleLogOut = async () => {
        console.log("clicked")
        await authentication.logout();
        navigate("/")
    }
    return(
       
            <div className=" w-full  pb-10">
                
                <div className="w-auto flex justify-center items-center  ">
                    <div className="font-Roboto w-auto  text-2xl lg:text-3xl 2xl:text-5xl  py-4 px-12 text-center my-4 text-white bg-[#05424D] border border-black mx-1 md:mx-4 rounded-2xl">Admin Dashboard</div>
                    <button onClick={(e) => handleLogOut()}>logout</button>
                </div> 

                <div className="w-auto  flex justify-center items-center">
                    <div className="w-auto    m-1 md:mx-4 py-4 mobile:p-4  border bg-[#F5F5F4] rounded-2xl  flex flex-wrap items-center justify-center gap-x-10 gap-3 md:gap-10">
                        
                        <Card content="Fees Management" iconLink={feeIcon} navigationRoute={"admin/feesManagement"}/>
                        <Card content="Sallery Management" iconLink={salleryicon} navigationRoute={"#"}/>
                        <Card content="Teacher Management" iconLink={teachericon} navigationRoute="admin/teacherManagement"/>
                        <Card content="Student Management" iconLink={studenticon} navigationRoute={"#"}/>
                        <Card content="Other Staff" iconLink={stafficon} navigationRoute={"#"}/> 
                        <Card content="Exams" iconLink={examIcon} navigationRoute={"#"}/>
                        <Card content="Result" iconLink={resulticon} navigationRoute={"#"}/>
                        <Card content="Records" iconLink={recordIcon} navigationRoute={"#"}/>
                        <Card content="Notices" iconLink={noticeicon} navigationRoute={"#"}/>
                        <Card content="Calender" iconLink={calendarIcon} navigationRoute={"#"}/>   
                    
                    </div>
                </div>

                <footer className="py-2"> <div className="bg-neutral-200 mt-3 h-0.5 w-full "></div></footer>
                
            </div>
    )
}