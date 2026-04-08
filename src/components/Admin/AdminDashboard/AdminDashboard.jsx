import Dashboard from "../../Dashboard/Dashboard";

export default function AdminDashboard(){

    const content = [
                {title:"Manage Faculty", toLink:"/admin/facultyManagement"},
                {title:"Manage Students",toLink:"/admin/ManageStudents"},
                {title: "HR",toLink:"/admin/HR"},
                {title: "Manage Accounts",toLink:"/admin/ManageAccounts"},
                {title: "Communication",toLink:"/admin/ManageAccounts"},
    ]


    return(
            <>
            <Dashboard content = {content}/>
            </>
    )
}