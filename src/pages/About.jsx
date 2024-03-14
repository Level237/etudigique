import { useEffect, useRef } from "react";
import animationData from "../../src/assets/loties/anim.json"
import Lottie from "lottie-web"
import Circle from "../components/Circle";
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
        <section className="h-10 bg-[#554444]">

        </section>
        <section>
        <div  ></div>
        </section>
        <Circle width="470px" height="470px" bgColor="#ffcc00" opacity="0.2" top="200px" left="-150px"/>
        <section className="flex justify-center items-center mx-36">
          
        <div><h1 class="max-w-3xl  text-2xl  font-bold  md:text-2xl xl:text-3xl text-black max-sm:text-3xl">Etudier dans les plus grandes écoles en Belgique</h1></div>
        <div ref={container} className="w-50"></div>
        <div><h1 class="max-w-3xl  text-2xl  font-bold  md:text-2xl xl:text-3xl text-black max-sm:text-3xl">Etudier dans les plus grandes écoles en Belgique</h1></div>
        
        </section>
        </>
    )
}

export default About;