import Dashboard from "../Dashboard/Dashboard";


export default function AdminDashboard(){

    const content = [
                {title:"Manage Teachers", toLink:"/admin/ManageTeachers"},
                {title:"Manage Students",toLink:"/admin/ManageStudents"},
                {title: "HR",toLink:"/admin/HR"},
                {title: "Manage Accounts",toLink:"/admin/ManageAccounts"}
    ]


    return(
            <>
            <Dashboard content = {content}/>
            {/* footer */}
        <hr className="mt-10"/>
            <footer className="h-20 w-full px-10">
                <ul className="flex justify-between items-center flex-wrap">
                    <li>Contact</li>
                    <li>About Us</li>
                    <li>Privacy-Policy</li>
                </ul>
            </footer>
            </>
    )
}