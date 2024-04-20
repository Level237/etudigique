
import { FaUserGraduate } from "react-icons/fa";
import HeroRoot from "../components/heroes/Hero-root.js"
import Button from "../components/ui/button.js";
import SlideLeftToRight from "../sections/SlideLeftToRight.js";
import SchoolSlider from "../slider/SchoolSlider.js";
import campus from "../assets/img/campus.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import Circle from "../components/Circle";
import { motion } from 'framer-motion';
import { useEffect, useRef } from "react";
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import 'swiper/css/effect-fade';
import boss from "../../src/assets/img/boss.jpg"
import Lottie from "lottie-web"
import animationData from "../assets/loties/student.json"
import animationDataCircle from "../assets/loties/gradient.json"
import { Helmet } from 'react-helmet';
import {FreeMode,Pagination} from "swiper/modules"
import { Link } from "react-router-dom";
const Homepage=()=> {
  
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const viewRef=useRef<any>(null)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const container = useRef<any>(null); 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const containerCircle=useRef<any>(null)
    
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
    <div>
      <Helmet>
  <title>Etudigique:Réalisez votre projet d'étude en Belgique</title>
  <meta name="description" content="Étudier en Belgique est un rêve pour de nombreux étudiants. Offrant un système éducatif de qualité des universités renommées et un cadre de vie agréable, la Belgique attire chaque année des milliers d'étudiants du monde entier.
" />
<meta property="og:title" content="Etudigique:Réalisez votre projet d'étude en Belgique" />
  <meta property="og:description" content="Étudier en Belgique est un rêve pour de nombreux étudiants. Offrant un système éducatif de qualité des universités renommées et un cadre de vie agréable, la Belgique attire chaque année des milliers d'étudiants du monde entier." />
  <meta property="og:image" content="/campus.jpg" />
  <meta property="og:url" content="etudigique.com" />
  <meta property="og:type" content="website" />

</Helmet>
      <HeroRoot/>
      <section className="mt-20" style={{ 
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
       
         }}>

        <h1 className="max-w-3xl  text-4xl text-center font-bold  md:text-5xl xl:text-5xl text-black max-sm:text-3xl">Etudier dans les plus grandes écoles en Belgique</h1>
        
        </section>
        <section>
            <SchoolSlider/>
            <div className="text-center">
            <Button link="campus-belgique"  title="En savoir plus" color="white" type="secondary"/>
            </div>
        </section>
        <section className=" max-sm:mt-[120px] max-sm:pt-[50px] pb-[100px] mt-[30px] relative flex justify-center mb-20 bg-[#0000000a]" style={{ 
        paddingBottom:"100px",
         
          }}>
            
         <div
        
          className="mt-[150px] max-sm:mt-[45px]"
         >
           
         <SlideLeftToRight 
          btnIcon={<FaUserGraduate />}
          btnTitle="S'inscrire maintenant"
          image={campus} title="Accompagnement personnalisé pour l'obtention  de votre visa d'études en Belgique" content={<p className="my-8 text-gray-600 ">
          Étudier en Belgique est un rêve pour de nombreux étudiants. Offrant un système éducatif de qualité des universités renommées et un cadre de vie agréable, la Belgique attire chaque année des milliers d'étudiants du monde entier.
          <br/> <br/>Chez Etudigigue, nous comprenons les défis et les complexités liés à l'obtention d'un visa d'études.  Dans cette optique, nous vous accompagnons jusqu'à son obtention.

          </p>}
          
          />
         </div>
         
         </section>

         <section style={{ 
        paddingBottom:"120px",
        
         }} className=" mt-[-80px] max-sm:mt-[-180px] relative bg-[#0000000a]">
          <Circle width="250px" height="250px" bgColor="#ffcc00" opacity="0.2" left="-90px" right={""} top={""}/>
          <Circle width="100px" height="100px" bgColor="#ffcc00" opacity="0.1" right="180px" left={""} top={""}/>
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
          <Circle width="70px" height="70px" bgColor="#ffcc00" opacity="0.2" top="155px" right="150px" left={""}/>
          <div ref={containerCircle} style={{ marginBottom:"120px",marginTop:"-120px" }} className=" cursor-pointer absolute inset-0  opacity-[0.2]"></div>
          <div ref={container} style={{left:"990px",top:"-430px",width:"330px" }} className=" cursor-pointer absolute inset-0  "></div>
        <div id="features" >
       
  <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
    <div className="flex items-center justify-center">
    <div className="md:w-2/3 lg:w-1/2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#cc3333" className="w-6 h-6 text-secondary">
        <path fill-rule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clip-rule="evenodd"></path>
      </svg>
      
      <h2 className="my-8 text-2xl font-bold  text-black md:text-4xl text-center">
        Pourquoi Choisir Etudigique pour vos Visas Etudiant
      </h2>
      <p className=" text-gray-600">Etudigigue, c'est bien plus qu'un simple service de visa. C'est un véritable partenaire qui vous accompagne et vous guide tout au long de votre projet d'études en Belgique.</p>
    </div>
    
    </div>
    
   
    <div className="mt-16 grid max-sm:hidden   divide-x gap-4 divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden  text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-3">
      <motion.div
        ref={viewRef}  className=" p-3 relative rounded-3xl   bg-[#cc3333] transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
        
          <img src="https://cdn-icons-png.flaticon.com/512/4341/4341139.png" className="w-12" width="512" height="512" alt="burger illustration"/>

          <div className="space-y-5">
            <h5 className="text-xxl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
            Expertise et connaissance approfondie
            </h5>
            <p className="text-gray-600 dark:text-gray-300">
            Notre équipe est composée d'experts chevronnés qui maîtrisent parfaitement les procédures de visa et les exigences des autorités belges.
            </p>
          </div>
          
        </div>
      </motion.div>
      <motion.div
      
        ref={viewRef}
       className="group relative  rounded-3xl  bg-[#cc3333] transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          <img src="https://cdn-icons-png.flaticon.com/512/4341/4341134.png" className="w-12" width="512" height="512" alt="burger illustration"/>

          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
            Accompagnement personnalisé
            </h5>
            <p className="text-gray-600 dark:text-gray-300">
            Nous offrons un suivi individualisé et adapté à vos besoins spécifiques, de l'évaluation de votre profil à la finalisation de votre dossier.
            </p>
          </div>
        
        </div>
      </motion.div>
      <motion.div 
      
        ref={viewRef}
      style={{ 
        
       }} className="group relative rounded-3xl  bg-[#cc3333] transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          <img src="https://cdn-icons-png.flaticon.com/512/4341/4341160.png" className="w-12" width="512" height="512" alt="burger illustration"/>

          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
            Conseils personnalisés
            </h5>
            <p className="text-gray-600 dark:text-gray-300">
            Nos experts vous prodiguent des conseils avisés pour maximiser vos chances de succès à chaque étape du processus.
            </p>
          </div>
         
        </div>
      </motion.div>
      
      
    </div>
   <div className="mt-20 lg:hidden">
   <Swiper
   centeredSlides={true}
   loop={true}
   effect='coverflow'
   speed={1000}
  
                breakpoints={{ 
                    360:{
                        slidesPerView:1
                    },
                    900:{
                        slidesPerView:2
                    }
                 }}
               slidesPerView={2}
               watchSlidesProgress
               spaceBetween={40}
                 freeMode={true}
                 pagination={{ 
                    clickable:true
                  }}
                  
                  modules={[
                    FreeMode,
                    Pagination,
                  ]}
                  
                >
                     
                                        
                                    <section
                                    
                                    >
                                  
                                        
                               <SwiperSlide className=" relative " >
                               <div  className=" p-3 relative rounded-3xl   bg-[#cc3333] transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-5 p-5">
          <img src="https://cdn-icons-png.flaticon.com/512/4341/4341139.png" className="w-12" width="512" height="512" alt="burger illustration"/>

          <div className="space-y-5">
            <h5 className="text-xxl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
            Expertise et connaissance approfondie
            </h5>
            <p className="text-gray-600 dark:text-gray-300">
            Notre équipe est composée d'experts chevronnés qui maîtrisent parfaitement les procédures de visa et les exigences des autorités belges.
            </p>
          </div>
          
        </div>
      </div>
      
                                 
                                 
                               
                             
                              
                               </SwiperSlide>
                               <SwiperSlide className=" relative " >
                               <div
     
       className="group relative  rounded-3xl  bg-[#cc3333] transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-8 p-10">
          <img src="https://cdn-icons-png.flaticon.com/512/4341/4341134.png" className="w-12" width="512" height="512" alt="burger illustration"/>

          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
            Accompagnement personnalisé
            </h5>
            <p className="text-gray-600 dark:text-gray-300">
            Nous offrons un suivi individualisé et adapté à vos besoins spécifiques, de l'évaluation de votre profil à la finalisation de votre dossier.
            </p>
          </div>
        
        </div>
      </div>
                                 
                                 
                               
                             
                              
                               </SwiperSlide>
                               <SwiperSlide className=" relative " >
                               <div 
       className="group relative rounded-3xl  bg-[#cc3333] transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-10">
          <img src="https://cdn-icons-png.flaticon.com/512/4341/4341160.png" className="w-12" width="512" height="512" alt="burger illustration"/>

          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
            Conseils personnalisés
            </h5>
            <p className="text-gray-600 dark:text-gray-300">
            Nos experts vous prodiguent des conseils avisés pour maximiser vos chances de succès à chaque étape du processus.
            </p>
          </div>
         
        </div>
      </div>
                               </SwiperSlide>
                                    </section>
                </Swiper>
   </div>
</div>
</div>
        </section>

        <section style={{ 
          marginTop:"0px"
         }} className="bg-[#0000000a]">
          <div className="relative py-16">
  <div aria-hidden="true" className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
    <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-[#ffcc00] from-[#000000]"></div>
    <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-40 to-sky-30 to-indigo-60"></div>
  </div>
  <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
    <div className="relative">
      <div className="flex items-center justify-center -space-x-2">
        <img loading="lazy" width="400" height="400" src={boss} alt="member photo" className="h-8 w-8 rounded-full object-cover"/>
        <img loading="lazy" width="200" height="200" src={boss} alt="member photo" className="h-12 w-12 rounded-full object-cover"/>
        <img loading="lazy" width="200" height="200" src={boss} alt="member photo" className="z-10 h-16 w-16 rounded-full object-cover"/>
        <img loading="lazy" width="200" height="200" src={boss} alt="member photo" className="relative h-12 w-12 rounded-full object-cover"/>
        <img loading="lazy" width="200" height="200" src={boss} alt="member photo" className="h-8 w-8 rounded-full object-cover"/>
      </div>
      <div className="mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12">
        <h1 className="text-center text-4xl font-bold text-gray-800  md:text-5xl">Commencez l'aventure avec Etudigique</h1>
        <p className="text-center text-xl text-gray-60">
          Plus de 10 nouveaux étudiants rejoignent Etudigique pour l'obtention de leur visa étudiant
        </p>
        <div className="flex flex-wrap justify-center gap-6">
        <Button title="Rejoignez nous" type="primary" link="contactez-nous"  color="black" />
        <Link to="témoignages" className="inline-flex items-center bg-[#cc3333] text-white justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 ">Témoignages</Link>
         
        </div>
      </div>
    </div>
</div>
</div>
        </section>
    </div>
  )
}

export default Homepage;
