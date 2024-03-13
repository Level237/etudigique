import { useEffect, useRef } from "react";
import animationData from "../../src/assets/loties/anim.json"
import Lottie from "lottie-web"
const About=()=>{
    let container = useRef(null); 
    useEffect(()=>{
        
        Lottie.loadAnimation({
          animationData: animationData,
          autoplay: true,
          container: container.current,
          loop: true,
          renderer: "svg",
        })
        
        container.current=null
        
       
      },[])
    return (
        <>
        <section  className={`relative h-[50vh] bg-center bg-cover bg-[url('assets/img/admission/admission.jpg')] `}>
        <div  className="flex items-center justify-center absolute inset-0 bg-[#000000] w-100 opacity-[0.7]">
          
        </div>
        <div  className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-5xl font-bold text-white"> A propos de nous</h2>
        </div>
        </section>
        <section className="h-10 bg-[#cc3333]">

        </section>
        <section>
        <div  ></div>
        </section>

        <section className="flex justify-center w-70">
        <div ref={container} className="w-50"></div>
        <div><h1 class="max-w-3xl  text-4xl text-center font-bold  md:text-5xl xl:text-5xl text-black max-sm:text-3xl">Etudier dans les plus grandes écoles en Belgique</h1></div>
        </section>
        </>
    )
}

export default About;