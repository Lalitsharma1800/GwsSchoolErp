import Navbar2 from "@/components/NavBar/Navbar";
import HeroSection from "@/components/heroSection/HeroSection";
import FeatureCard from "@/components/featureCard/FeatureCard";

export default function NewDashboard(){
    const featureCardContent = [
        {title2:"Manage Teachers", toLink:"/admin/ManageTeachers"},
        {title2:"Manage Students",toLink:"/admin/ManageStudents"},
        {title2: "HR",toLink:"/admin/HR"},
        {title2: "Manage Accounts",toLink:"/admin/ManageAccounts"}
    ]
    return(
        <>
        <Navbar2/>
        <HeroSection />
        {/* text = action */}
        <div className=" w-full font-Inter  my-6">
                <div className="flex flex-col gap-1 justify-center items-center">
                            <p className="font-bold text-3xl">Action Centre</p>
                            <div className="flex flex-col gap-0.5 justify-center items-center">
                                <div className="bg-amber-600 w-24 h-0.5 "></div>
                                <div className="bg-amber-600 w-24 h-0.5 "></div>
                            </div>
            </div>
        </div>
        {/* feature cards */}
        <div className="w-full  flex justify-center items-center my-2">
            <div className="flex flex-col md:flex-row md:max-w-200 gap-2 md:gap-5 flex-wrap w-full px-10 ">
                {
                    featureCardContent.map((content2) => (
                        <FeatureCard title={content2.title2} toLink={content2.toLink}/>
                    ))
                }
                {/* <FeatureCard title="Manage Teacher" toLink="/"   />
                <FeatureCard title="Manage Student" toLink="/admin" />
                <FeatureCard title="HR" toLink="/teacher222" />
                <FeatureCard title="Manage Accounts" toLink="/222"/> */}
            </div> 

        </div>
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