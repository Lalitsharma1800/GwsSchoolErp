
import Card from "../../Admin/Card/Card"
import { examIcon,  feeIcon,  noticeicon, 
         resulticon,    calendarIcon,    } from "./../../../assets/index"

export default function StudentDashboard({
    student_Name = "Student"
}){

    return(
        <div className=" w-full min-h-screen ">
            
            <div className="mt-4">
                <h1 className="font-medium text-center text-2xl">Welcome, {student_Name} </h1>
                <p className="text-neutral-600 text-center font-medium text-[14px]">Class- <span className="text-black">X</span>, Section-<span className="text-black">A</span></p>
                <p className="text-neutral-600 text-center font-medium text-[14px]">Attendance- <span className="text-black">80%</span></p>
            </div>

            {/* Cards to navigate */}

            <div className="w-auto  flex justify-center items-center">
                <div className="w-auto    m-1 md:mx-4 py-4 mobile:p-4  border bg-[#F5F5F4] rounded-2xl  flex flex-wrap items-center justify-center gap-x-10 gap-3 md:gap-10">
                    
                    <Card content="Fees Management" iconLink={feeIcon} navigationRoute={"#"}/>
                    <Card content="Exams" iconLink={examIcon} navigationRoute={"#"}/>
                    <Card content="Result" iconLink={resulticon} navigationRoute={"#"}/>
                    <Card content="Notices" iconLink={noticeicon} navigationRoute={"#"}/>
                    <Card content="Calender" iconLink={calendarIcon} navigationRoute={"#"}/>   
                
                </div>
            </div>

            
            
        </div>
    )
}