import Dashboard from "../../Dashboard/Dashboard";

export default function AdminDashboard(){

    const content = [
                {title:"Manage Faculty", toLink:"/admin/facultyManagement"},
                {title:"Manage Students",toLink:"/admin/ManageStudents", message:"(Currently Not Available)"},
    ]


    return(
            <>
            <Dashboard content = {content}/>
            </>
    )
}