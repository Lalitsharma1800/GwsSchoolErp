export default function HeroSection(){
    return(
<section className="relative w-full min-h-[70vh] flex items-center bg-gray-50  overflow-hidden ">
      
      {/* RIGHT IMAGE */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.pixabay.com/photo/2025/09/22/14/39/visualization-9848776_1280.jpg"
          alt="Maa Saraswati"
          className="w-full h-full object-cover"
        />

        {/* WHITE FADE OVERLAY */}
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/90 to-white/0"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl px-6 md:px-12 lg:px-20">
        
        {/* TOP LABEL */}
        <p className="text-xl sm:text-2xl md:text-3xl tracking-widest  font-serif font-medium ">
          Welcome to,
        </p>

        {/* HEADING */}
        <h1 className="mt-2 ml-4 font-Roboto text-3xl sm:text-4xl md:text-5xl font-bold text-green-700 max-w-2xl leading-tight">
          Green World School
        </h1>

        {/* SEARCH BAR */}
        <div className="font-montserrat text-xl mt-2 flex w-full max-w-xl">
          
        <p className="ml-12">Where learning meets nature.</p>
        </div>
      </div>
      

</section>
    )
}