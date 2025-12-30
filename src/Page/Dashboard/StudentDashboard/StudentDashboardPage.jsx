import { AdminHeader, StudentDashboard } from "../../../components";
import { useSelector } from "react-redux";

export default function StudentDashboardPage(){

    const name = useSelector(state => state.auth.userData.name)
    return(
        <>
        <AdminHeader name={name}/>
        <StudentDashboard student_Name={name}/>
        </>
    )
}