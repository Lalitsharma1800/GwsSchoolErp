import Dashboard from "@/components/Dashboard/Dashboard";
export default function TeacherDashboard(){

        const content = [
                {title:"Fees Status", toLink:"/teacher/fees"},
                {title:"Manage Students",toLink:"/teacher/ManageStudents"},
        ]

    return(
        <>
            <Dashboard content={content}/>
        </>
    )
}