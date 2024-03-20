import { useEffect, useRef } from "react";
import animationData from "../../src/assets/loties/anim.json"
import Lottie from "lottie-web"
import Circle from "../components/Circle";
import img1 from "../assets/img/about/about.png"
import img2 from "../assets/img/about/about1.jpg"
import img3 from "../assets/img/admission/admission6.jpg"
import Button from "../components/ui/button";
import about from "../../src/assets/img/admission.png"
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
        <section className="bg-[#0000000a]">
        <section  className={`relative h-[70vh] bg-center  bg-cover bg-[url('assets/img/admission/admission.jpg')] `}>
        <div  className="flex items-center justify-center absolute inset-0 bg-[#121533]  w-100 opacity-[0.8]">
          
        </div>
        <div  className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold text-[#ffcc33] text-center"> A propos de nous</h2>
        <p className="text-center text-white mt-3 max-sm:mx-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's <br/>standard dummy text ever since the
        1500s </p>
        </div>
        </section>
      
        <section>
        <div  ></div>
        </section>
        <Circle width="470px" height="470px" bgColor="#ffcc00" opacity="0.2" top="200px" left="-150px"/>
        <section className="flex max-sm:flex-col max-sm:mx-0  justify-center gap-10 mx-36 mt-36">
          <div className="w-[390px] max-sm:hidden">
            <div className="w-full relative top-0">
            <img className="w-full" src={img1}/>
            <img className="w-full absolute inset-0 z-20  left-32 top-36" src={img2}/>
            </div>
          </div>
       <div className="flex flex-col flex-1 ml-32 max-sm:ml-5">
        <h2 className="text-[#cc3333]">Pourquoi Etudigique?</h2>
        <h2 className="font-bold text-4xl">Votre Partenaire pour les études en Belgique</h2>
        <p className="mt-7">Etudigique est votre allié de confiance pour la réalisation de votre projet d'étude en Belgique. Fondée en 2022 par des entrepreneurs camerounais, notre agence d'immigration étudiante est dédiée à faciliter votre parcours académique en Belgique. Nous comprenons que le processus d'immigration des étudiants peut être complexe et intimidant, mais nous sommes là pour le rendre aussi simple et sans stress que possible pour vous.</p>
        <Circle width="590px" height="590px" bgColor="#ffcc00" opacity="0.2" top="820px" right="-190px"/>
          <div className="mt-7">
            <Button  title="En savoir plus" color="white" type="secondary"/>
          </div>
        
       </div>
      
        </section>

        <section className="mt-40 mb-40 max-sm:mt-12 items-center max-sm:flex-col  flex justify-center">
        <div className="flex mx-16 max-sm:mx-5 flex-col flex-1">
        <h2 className="text-[#cc3333]">Nos Engagements</h2>
        <h2 className="font-bold text-4xl">La prise en main pour une bonne integration sociale en Belgique</h2>
        <p className="mt-7">Chez Etudigique, nous nous engageons à vous accompagner à chaque étape de votre aventure académique en Belgique. Notre équipe dévouée d’avocats et de consultants en immigration expérimentés est là pour vous guider dans toutes les phases du processus, de la demande de visa à la recherche de la formation idéale en Belgique.</p>
          <div className="mt-7">
            <Button  title="Contactez nous" color="white" type="secondary"/>
          </div>
        
       </div>
       <div className="flex-1 max-sm:hidden mr-10">
       <img className="w-full rounded-[10%]" src={img3}/>
       </div>
        </section>
        <section className=" lg:px-[100px]  lg:pb-[100px] justify-center  bg-[#c33333] p-[20px]" >
        <div className="flex max-sm:flex-col">
       
          
          <div className="flex flex-col" style={{ flex:1 }}>
          <h2 class="my-8 text-2xl max-sm:text-xl max-sm:text-center font-bold text-center  text-white md:text-4xl">
          Etudigigue vous accompagne dans toutes vos démarches d'admission
      </h2>
     
      <div class="grid grid-cols-2 max-sm:grid-cols-1 space-y-4 divide-gray-100 dark:divide-gray-800">
            <div class="mt-8 flex gap-4 md:items-center">
              <div class="w-12 h-12 flex gap-4 rounded-full bg-[#ffcc3321]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 m-auto text-[#ffcc33]">
                  <path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clip-rule="evenodd"></path>
                </svg>        
              </div>
              <div class="w-5/6">
                <h3 class="font-semibold text-lg  text-[#ffcc33]">Consultation Initiale Gratuite</h3>
                <p class="text-white">Contactez-nous pour une consultation gratuite. Nous discuterons de vos objectifs académiques et de votre projet d’études en Belgique.</p>
              </div> 
            </div> 
            <div class="pt-4 flex gap-4 md:items-center">
              <div class="w-12 h-12 flex gap-4 rounded-full bg-[#ffcc3321]">  
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 m-auto text-[#ffcc33]">
                  <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
                </svg>                                      
              </div>
              <div class="w-5/6">
                <h3 class="font-semibold text-lg text-[#ffcc33]">Sélection du Programme</h3>
                <p class="text-white">Nous vous aidons à choisir le programme d’études et l’université qui correspondent le mieux à vos intérêts et à votre parcours académique.</p>
              </div> 
            </div> 
            <div class="pt-4 flex gap-4 md:items-center">
              <div class="w-12 h-12 flex gap-4 rounded-full bg-[#ffcc3321]">  
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 m-auto text-[#ffcc33]">
                  <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
                </svg>                                      
              </div>
              <div class="w-5/6">
                <h3 class="font-semibold text-lg text-[#ffcc33]">Préparation de la Candidature</h3>
                <p class="text-white">Nous vous guidons dans la préparation de tous les documents requis, y compris les relevés de notes, les lettres de recommandation, et les lettres de motivation.</p>
              </div> 
            </div> 
            <div class="pt-4 flex gap-4 md:items-center">
              <div class="w-12 h-12 flex gap-4 rounded-full bg-[#ffcc3321]">  
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 m-auto text-[#ffcc33]">
                  <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
                </svg>                                      
              </div>
              <div class="w-5/6">
                <h3 class="font-semibold text-lg text-[#ffcc33]">Soumission de la Demande</h3>
                <p class="text-white">Nous vous assistons dans la soumission de votre candidature aux universités sélectionnées, en veillant à ce qu’elle soit complète et conforme aux exigences.</p>
              </div> 
            </div>
          </div>
          </div>
        </div>
        
       
        </section>
        </section>
        
        </>
    )
}

export default About;