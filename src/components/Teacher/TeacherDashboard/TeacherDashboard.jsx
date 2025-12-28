import Header from "../../Header/Header";
import Card from "../../Admin/Card/Card";
import {examIcon,  feeIcon, noticeicon, recordIcon,
         resulticon,   studenticon, calendarIcon,  } from "./../../../assets/index";

export default function TeacherDashboard(){
    return(
        <div className="w-full h-screen bg-neutral-200">

            <div className="w-auto flex justify-center items-center  ">
                <h1 className="font-Roboto w-auto  text-2xl lg:text-3xl 2xl:text-5xl  py-4 px-12 text-center my-4 text-white bg-[#05424D] border border-black mx-1 md:mx-4 rounded-2xl">Teacher Dashboard</h1>
            </div>

            <div className="w-auto  flex justify-center items-center">
                <div className="w-auto    m-1 md:mx-4 py-4 mobile:p-4  border bg-[#F5F5F4] rounded-2xl  flex flex-wrap items-center justify-center gap-x-10 gap-3 md:gap-10">
                    <Card content="Fees Management" iconLink={feeIcon} navigationRoute={"#"}/>
                    <Card content="Student Management" iconLink={studenticon} navigationRoute={"#"}/>
                    <Card content="Exams" iconLink={examIcon} navigationRoute={"#"}/>
                    <Card content="Result" iconLink={resulticon} navigationRoute={"#"}/>
                    <Card content="Attendance" iconLink={recordIcon} navigationRoute={"#"}/>
                    <Card content="Notices" iconLink={noticeicon} navigationRoute={"#"}/>
                    <Card content="Calender" iconLink={calendarIcon} navigationRoute={"#"}/>  
                </div>
            </div>
        </div>
    )
}