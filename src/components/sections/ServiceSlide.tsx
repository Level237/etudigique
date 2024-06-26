

type ServiceSlideType={
    title:string,
}
const ServiceSlide=(props:ServiceSlideType)=>{

    return (
        <>
        <section className={`relative h-[50vh] bg-center bg-cover bg-[url('assets/img/equivalence.jpg')] `}>
        <div className="flex items-center justify-center absolute inset-0 bg-[#ffcc00] w-100 opacity-[0.7]">
          
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-5xl max-sm:text-3xl font-bold text-white"> {props.title}</h2>
        </div>
        </section>
        <section className="h-10 bg-[#cc3333]">

        </section>
        </>
    )
}

export default ServiceSlide;