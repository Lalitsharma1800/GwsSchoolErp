export default function TeacherDetailsLine({
    detailsName,
    detailsValue,
    disabled = true,
    onChangeHandler,
}){
    return(
            <div className="sm:border border-t-white flex  flex-col smallMobile:flex-row  sm:gap-3 font-semibold">
                <span className=" w-40  pl-2">{detailsName}:</span>
                <input type="text" disabled={disabled} value={detailsValue} 
                onChange={(e) => onChangeHandler}  
                className="text-black  inline w-11/12  max-w-6xl  px-1 outline-0 font-medium"/></div>
            
    )
}