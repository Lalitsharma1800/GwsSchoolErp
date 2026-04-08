export default function Pagedescriptor({text}){
    return(
        <>
            <div className=" w-full font-Inter  my-6 cursor-default">
                            <div className="flex flex-col gap-1 justify-center items-center">
                                        <p className="font-bold text-3xl">{text}</p>
                                        <div className="flex flex-col gap-0.5 justify-center items-center">
                                            <div className="bg-amber-600 w-24 h-0.5 "></div>
                                            <div className="bg-amber-600 w-24 h-0.5 "></div>
                                        </div>
                        </div>
                    </div>
        </>
    )
}