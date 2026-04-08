import Dashboard from "@/components/Dashboard/Dashboard";
export default function TeacherDashboard(){

        const content = [
                {title:"Fees Status", toLink:"/teacher/fees"},
                {title:"Manage Students",toLink:"/teacher/ManageStudents"},
                {title: "Exams",toLink:"/teacher/HR"},
                {title: "Attendance",toLink:"/teacher/attendance"},
                {title: "Notices",toLink:"/teacher/notices"},
                {title: "Calender",toLink:"/teacher/calender"},
        ]

    return(
        <>
            <Dashboard content={content}/>
        </>
    )
}