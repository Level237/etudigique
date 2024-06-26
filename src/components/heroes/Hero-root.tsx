
import Lottie from "lottie-web"
import Button from "../ui/button"
import campus from "../../assets/img/campus.jpg"
import OwnWave from "../Wave"
import { useEffect, useRef } from "react"
import animationData from "../../assets/loties/gradient.json"
import { Link } from "react-router-dom"

const HeroRoot=()=>{

    const container=useRef<any>(null)

    useEffect(()=>{
        Lottie.loadAnimation({
            animationData: animationData,
            autoplay: true,
            container: container.current,
            loop: true,
            renderer: "svg",
          })
          container.current=null;
    },[])
    return (
        <>
        <section  className=" bg-white mb-2 dark:bg-gray-900"
        
        >
    
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Réalisez votre projet d'étude en Belgique</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Nous vous accompagnons étape par étape jusqu'a l'obtention<br></br> de votre visa étudiant.</p>
            <Link to="contactez-nous" className="inline-flex items-center bg-[#ffff] text-black justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 ">Rejoignez nous</Link>
            <Button title="En Savoir plus" link='admission' type='primary'  color="black" icon={ <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>} />
        </div>
        <div className="relative hidden lg:mt-0 lg:col-span-5 lg:flex">
        
            <img src={campus} className="w-20" style={{ width:"70vw",borderRadius:"30%",objectFit:"cover",height:"75vh" }} alt="mockup"/>
        </div>
    </div>
    <OwnWave color="#ffcc00" amplitude={10} point={18}  deg={-180} paused={false} opacity="0.7"/>
    
</section>
        </>
    )
}

export default HeroRoot;