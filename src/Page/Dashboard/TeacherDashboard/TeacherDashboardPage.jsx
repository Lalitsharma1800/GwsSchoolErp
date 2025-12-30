import { TeacherDashboard, Header } from "../../../components";
import { useSelector } from "react-redux";

export default function TeacherDashboardPage(){
    const name = useSelector(state => state.auth.userData.name)
    return(
        <div  className="w-full min-h-screen bg-neutral-200">
            <Header name={name}/>
            <TeacherDashboard/>
        </div>
    )
}