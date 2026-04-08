import HeroSection from "@/components/heroSection/HeroSection";
import FeatureCard from "@/components/featureCard/FeatureCard";
import Pagedescriptor from "@/components/pagedescriptor/Pagedescriptor";


export default function Dashboard({content}){
    const featureCardContent = (content) ? [...content] : [{title: "Manage fee", toLink:"/Managefee"}];
    return(
        <>
        <HeroSection />
        {/* text = action */}
        <Pagedescriptor text="Action Centre"/>
        {/* feature cards */}
        <div className="w-full  flex justify-center items-center my-2">
            <div className="flex flex-col md:flex-row md:max-w-200 gap-2 md:gap-5 justify-center flex-wrap w-full px-10 ">
                {
                    featureCardContent.map((content2,index) => (
                        <FeatureCard key={index} title={content2.title} toLink={content2.toLink}/>
                    ))
                }
            </div> 
        </div>
        </>
        
    )
}