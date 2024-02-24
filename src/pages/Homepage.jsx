import HeroRoot from "../components/heroes/Hero-root";
import SchoolSlider from "../components/slider/SchoolSlider";
import Button from "../components/ui/button";
import campus from "../assets/img/campus.jpg"
import SlideLeftToRight from "../components/sections/SlideLeftToRight";
import { FaUserGraduate } from "react-icons/fa";
import animationDataCircle from "../../src/assets/loties/gradient"
import animationData from "../../src/assets/loties/student"
import Lottie from "lottie-web"
import boss from "../../src/assets/img/boss.jpg"
import {motion} from "framer-motion"
import {  useEffect, useRef } from "react";
import Circle from "../components/Circle";
import OwnWave from "../components/Wave";
const Homepage=()=>{
  let container = useRef(null); 
  let containerCircle=useRef(null)
   
    useEffect(()=>{
      Lottie.loadAnimation({
        animationData: animationData,
        autoplay: true,
        container: container.current,
        loop: true,
        renderer: "svg",
      })
      Lottie.loadAnimation({
        animationData: animationDataCircle,
        autoplay: true,
        container: containerCircle.current,
        loop: true,
        renderer: "svg",
      })
      containerCircle.current=null
      container.current=null;
     
    },[])
  
 
    return (
        <>
        <section className="bg-[]">
        <HeroRoot/>
        <section className="mt-20" style={{ 
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
       
         }}>

        <h1 class="max-w-3xl  text-4xl text-center font-bold  md:text-5xl xl:text-5xl text-black">Etudier dans les plus grandes écoles en Belgique</h1>
        
        </section>
        <section>
            <SchoolSlider/>
            <div className="text-center">
            <Button  title="En savoir plus" color="white" bgColor="#cc3333"/>
            </div>
        </section>
         <section className=" relative flex justify-center mb-20 bg-[#0000000a]" style={{ 
        paddingBottom:"100px",
          marginTop:"50px"
          }}>
            
         <div
         style={{ 
            marginTop:"150px",
          }}
         >
           
         <SlideLeftToRight 
          btnIcon={<FaUserGraduate />}
          btnTitle="S'inscrire maintenant"
          image={campus} title="Accompagnement personnalisé pour l'obtention  de votre visa d'études en Belgique" content={<p class="my-8 text-gray-600 ">
          Étudier en Belgique est un rêve pour de nombreux étudiants. Offrant un système éducatif de qualité des universités renommées et un cadre de vie agréable, la Belgique attire chaque année des milliers d'étudiants du monde entier.
          <br/> <br/>Chez Etudigigue, nous comprenons les défis et les complexités liés à l'obtention d'un visa d'études.  Dans cette optique, nous vous accompagnons jusqu'à son obtention.

          </p>}
          
          />
         </div>
         
         </section>
         <section style={{ 
       
        marginTop:"-80px",
        paddingBottom:"120px",
        
         }} className=" relative bg-[#0000000a]">
          <Circle width="250px" height="250px" bgColor="#ffcc00" opacity="0.2" left="-90px"/>
          <Circle width="100px" height="100px" bgColor="#ffcc00" opacity="0.1" right="180px"/>
          <div style={{ 
            position:"absolute", 
            opacity:"0.3",
            display : 'inline-block',
            height : "0",
            width : "0",
            borderRight : "10px solid transparent",
            borderBottom : "10px solid #ffcc00",
            borderLeft : "10px solid transparent",
            translate:"0deg",
            right:"120px",
            top:"120px"          }}/>
          <Circle width="70px" height="70px" bgColor="#ffcc00" opacity="0.2" top="155px" right="150px"/>
          <div ref={containerCircle} style={{ marginBottom:"120px",marginTop:"-120px" }} className=" cursor-pointer absolute inset-0  opacity-[0.2]"></div>
          <div ref={container} style={{left:"990px",top:"-430px",width:"330px" }} className=" cursor-pointer absolute inset-0  "></div>
        <div id="features" >
       
  <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
    <div className="flex items-center justify-center">
    <div class="md:w-2/3 lg:w-1/2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#cc3333" class="w-6 h-6 text-secondary">
        <path fill-rule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clip-rule="evenodd"></path>
      </svg>
      
      <h2 class="my-8 text-2xl font-bold  text-black md:text-4xl text-center">
        Pourquoi Choisir Etudigique pour vos Visas Etudiant
      </h2>
      <p class=" text-gray-600">Etudigigue, c'est bien plus qu'un simple service de visa. C'est un véritable partenaire qui vous accompagne et vous guide tout au long de votre projet d'études en Belgique.</p>
    </div>
    
    </div>
    
   
    <div class="mt-16 grid   divide-x gap-4 divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden  text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-3">
      <motion.div initial={{ 
        y:100,
        opacity:0
       }}
       whileInView={{ 
        y:0,
        opacity:1
        }}  class=" p-3 relative rounded-3xl   bg-[#cc3333] transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div class="relative space-y-8 py-12 p-8">
          <img src="https://cdn-icons-png.flaticon.com/512/4341/4341139.png" class="w-12" width="512" height="512" alt="burger illustration"/>

          <div class="space-y-5">
            <h5 class="text-xxl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
            Expertise et connaissance approfondie
            </h5>
            <p class="text-gray-600 dark:text-gray-300">
            Notre équipe est composée d'experts chevronnés qui maîtrisent parfaitement les procédures de visa et les exigences des autorités belges.
            </p>
          </div>
          
        </div>
      </motion.div>
      <motion.div
      initial={{ 
        y:200,
        opacity:0
       }}
       whileInView={{ 
        y:0,
        opacity:1
        }}
       class="group relative  rounded-3xl  bg-[#cc3333] transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div class="relative space-y-8 py-12 p-8">
          <img src="https://cdn-icons-png.flaticon.com/512/4341/4341134.png" class="w-12" width="512" height="512" alt="burger illustration"/>

          <div class="space-y-2">
            <h5 class="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
            Accompagnement personnalisé
            </h5>
            <p class="text-gray-600 dark:text-gray-300">
            Nous offrons un suivi individualisé et adapté à vos besoins spécifiques, de l'évaluation de votre profil à la finalisation de votre dossier.
            </p>
          </div>
        
        </div>
      </motion.div>
      <motion.div 
      initial={{ 
        y:-200,
        opacity:0
       }}
       whileInView={{ 
        y:0,
        opacity:1
        }}
      
      style={{ 
        
       }} class="group relative rounded-3xl  bg-[#cc3333] transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div class="relative space-y-8 py-12 p-8">
          <img src="https://cdn-icons-png.flaticon.com/512/4341/4341160.png" class="w-12" width="512" height="512" alt="burger illustration"/>

          <div class="space-y-2">
            <h5 class="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
            Conseils personnalisés
            </h5>
            <p class="text-gray-600 dark:text-gray-300">
            Nos experts vous prodiguent des conseils avisés pour maximiser vos chances de succès à chaque étape du processus.
            </p>
          </div>
         
        </div>
      </motion.div>
      
      
    </div>
   
</div>
</div>
        </section>
        <section style={{ 
          marginTop:"0px"
         }} className="bg-[#0000000a]">
          <div class="relative py-16">
  <div aria-hidden="true" class="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
    <div class="blur-[106px] h-56 bg-gradient-to-br from-primary to-[#ffcc00] from-[#000000]"></div>
    <div class="blur-[106px] h-32 bg-gradient-to-r from-cyan-40 to-sky-30 to-indigo-60"></div>
  </div>
  <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
    <div class="relative">
      <div class="flex items-center justify-center -space-x-2">
        <img loading="lazy" width="400" height="400" src={boss} alt="member photo" class="h-8 w-8 rounded-full object-cover"/>
        <img loading="lazy" width="200" height="200" src={boss} alt="member photo" class="h-12 w-12 rounded-full object-cover"/>
        <img loading="lazy" width="200" height="200" src={boss} alt="member photo" class="z-10 h-16 w-16 rounded-full object-cover"/>
        <img loading="lazy" width="200" height="200" src={boss} alt="member photo" class="relative h-12 w-12 rounded-full object-cover"/>
        <img loading="lazy" width="200" height="200" src={boss} alt="member photo" class="h-8 w-8 rounded-full object-cover"/>
      </div>
      <div class="mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12">
        <h1 class="text-center text-4xl font-bold text-gray-800  md:text-5xl">Commencez l'aventure avec Etudigique</h1>
        <p class="text-center text-xl text-gray-60">
          Plus de 10 nouveaux étudiants rejoignent Etudigique pour l'obtention de leur visa étudiant
        </p>
        <div class="flex flex-wrap justify-center gap-6">
        <Button title="Rejoignez nous" bgColor="#ffcc00"  color="black" />
        <Button title="Témoignages" bgColor="#000000"  color="black"  />
         
        </div>
      </div>
    </div>
</div>
</div>
        </section>
        </section>
       <section >
       <footer style={{ paddingTop:"-120px" }} class="p-4 bg-white sm:p-6 dark:bg-gray-800">
    <div class="mx-auto max-w-screen-xl ">
        <div class="md:flex md:justify-evenly">
            <div class="mb-6 md:mb-0">
                <a href="https://flowbite.com" class="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-8" alt="FlowBite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                    <ul class="text-gray-600 dark:text-gray-400">
                        <li class="mb-4">
                            <a href="https://flowbite.com" class="hover:underline">Flowbite</a>
                        </li>
                        <li>
                            <a href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                    <ul class="text-gray-600 dark:text-gray-400">
                        <li class="mb-4">
                            <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
                        </li>
                        <li>
                            <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                    <ul class="text-gray-600 dark:text-gray-400">
                        <li class="mb-4">
                            <a href="#" class="hover:underline">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com" class="hover:underline">Flowbite™</a>. All Rights Reserved.
            </span>
            <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                </a>
                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                </a>
                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </a>
                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                </a>
                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                </a>
            </div>
            
        </div>
    </div>
</footer>
       </section>
        </>
    )
}

export default Homepage;