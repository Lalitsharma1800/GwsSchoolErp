import LoginForm from "@/components/Login/LoginForm/LoginForm";
import LoginFooter from "@/components/Login/LoginFooter/LoginFooter";
import LoginHeader from "@/components/Login/LoginHeader/LoginHeader";


export default function LoginPage(){
    return(
        <>
        <LoginHeader/>
        <LoginForm/>
        <LoginFooter/>
        </>
    )
}