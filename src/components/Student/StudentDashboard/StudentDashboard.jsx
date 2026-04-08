import Dashboard from "@/components/Dashboard/Dashboard"

export default function StudentDashboard({
}){
        const content = [
                {title:"Exams", toLink:"/student"},
                {title:"Attandence",toLink:"/admin/ManageStudents"},
                {title: "Fees",toLink:"/admin/HR"},
                {title: "Notices",toLink:"/admin/ManageAccounts"},
    ]

    return(
        <>
        <Dashboard content={content}/>
        </>
    )
}