import { useEffect, useRef } from "react";
import animationData from "../../src/assets/loties/anim.json"
import Lottie from "lottie-web"
import Circle from "../components/Circle";
import img1 from "../assets/img/about/about.png"
import img2 from "../assets/img/about/about1.jpg"
import img3 from "../assets/img/admission/admission6.jpg"
import Button from "../components/ui/button";
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
        <section  className={`relative h-[70vh] bg-center bg-cover bg-[url('assets/img/admission/admission.jpg')] `}>
        <div  className="flex items-center justify-center absolute inset-0 bg-[#121533]  w-100 opacity-[0.8]">
          
        </div>
        <div  className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold text-[#ffcc33]"> A propos de nous</h2>
        <p className="text-center text-white mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's <br/>standard dummy text ever since the
        1500s </p>
        </div>
        </section>
      
        <section>
        <div  ></div>
        </section>
        <Circle width="470px" height="470px" bgColor="#ffcc00" opacity="0.2" top="200px" left="-150px"/>
        <section className="flex justify-center gap-10 mx-36 mt-36">
          <div className="w-[390px]">
            <div className="w-full relative top-0">
            <img className="w-full" src={img1}/>
            <img className="w-full absolute inset-0 z-20  left-32 top-36" src={img2}/>
            </div>
          </div>
       <div className="flex flex-col flex-1 ml-32">
        <h2 className="text-[#cc3333]">Pourquoi Etudigique?</h2>
        <h2 className="font-bold text-4xl">Votre Partenaire pour les études en Belgique</h2>
        <p className="mt-7">Etudigique est votre allié de confiance pour la réalisation de votre projet d'étude en Belgique. Fondée en 2022 par des entrepreneurs camerounais, notre agence d'immigration étudiante est dédiée à faciliter votre parcours académique en Belgique. Nous comprenons que le processus d'immigration des étudiants peut être complexe et intimidant, mais nous sommes là pour le rendre aussi simple et sans stress que possible pour vous.</p>
          <div className="mt-7">
            <Button  title="En savoir plus" color="white" type="secondary"/>
          </div>
        
       </div>
      
        </section>

        <section className="mt-40 flex justify-center">
        <div className="flex flex-col flex-1">
        <h2 className="text-[#cc3333]">Pourquoi Etudigique?</h2>
        <h2 className="font-bold text-4xl">Votre Partenaire pour les études en Belgique</h2>
        <p className="mt-7">Etudigique est votre allié de confiance pour la réalisation de votre projet d'étude en Belgique. Fondée en 2022 par des entrepreneurs camerounais, notre agence d'immigration étudiante est dédiée à faciliter votre parcours académique en Belgique. Nous comprenons que le processus d'immigration des étudiants peut être complexe et intimidant, mais nous sommes là pour le rendre aussi simple et sans stress que possible pour vous.</p>
          <div className="mt-7">
            <Button  title="En savoir plus" color="white" type="secondary"/>
          </div>
        
       </div>
       <div className="flex-1 mr-4">
       <img className="w-full" src={img3}/>
       </div>
        </section>
        </>
    )
}

export default About;