import Navbar2 from "@/components/NavBar/Navbar";
import HeroSection from "@/components/heroSection/HeroSection";
import FeatureCard from "@/components/featureCard/FeatureCard";
export default function NewDashboard(){
    return(
        <>
        <Navbar2/>
        <HeroSection />
        {/* text = action */}
        <div className=" w-full font-Inter  my-6">
                <div className="flex flex-col gap-1 justify-center items-center">
                            <p className="font-bold text-2xl">Action Centre</p>
                            <div className="flex flex-col gap-0.5 justify-center items-center">
                                <div className="bg-amber-300 w-24 h-0.5 rounded-2xl"></div>
                                <div className="bg-amber-300 w-24 h-0.5 rounded-2xl"></div>
                            </div>
            </div>
        </div>
        {/* feature cards */}
        <div className="w-full  flex justify-center items-center ">
            <div className="flex flex-col md:flex-row md:max-w-200 gap-2 md:gap-5 flex-wrap w-full px-10 ">
                <FeatureCard title="Manage Teacher" toLink="/"   />
                <FeatureCard title="Manage Student" toLink="/admin" />
                <FeatureCard title="HR" toLink="/teacher222" />
                <FeatureCard title="Manage Accounts" toLink="/222"/>
            </div> 

        </div>
        </>
        
    )
}