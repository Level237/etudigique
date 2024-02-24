import HeroRoot from "../components/heroes/Hero-root";
import SchoolSlider from "../components/slider/SchoolSlider";
import Button from "../components/ui/button";
import campus from "../assets/img/campus.jpg"
import SlideLeftToRight from "../components/sections/SlideLeftToRight";
import { FaUserGraduate } from "react-icons/fa";
import OwnWave from "../components/Wave";
import {motion} from "framer-motion"
const Homepage=()=>{

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
        paddingBottom:"150px",
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
        paddingBottom:"70px"
         }} className="bg-[#0000000a]">
        <div id="features" >
       
  <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
    <div class="md:w-2/3 lg:w-1/2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#cc3333" class="w-6 h-6 text-secondary">
        <path fill-rule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clip-rule="evenodd"></path>
      </svg>
      
      <h2 class="my-8 text-2xl font-bold  text-black md:text-4xl">
        Pourquoi Choisir Etudigique pour vos Visas Etudiant
      </h2>
      <p class=" text-gray-600">Etudigigue, c'est bien plus qu'un simple service de visa. C'est un véritable partenaire qui vous accompagne et vous guide tout au long de votre projet d'études en Belgique.</p>
    </div><div class="mt-16 grid   divide-x gap-4 divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden  text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-3">
      <motion.div initial={{ 
        y:100,
        opacity:0
       }}
       whileInView={{ 
        y:0,
        opacity:1
        }} style={{ marginBottom:"190px" }} class=" p-3 relative rounded-3xl   bg-[#cc3333] transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
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
      style={{ marginBottom:"150px",marginTop:"90px" }} class="group relative mt-10 rounded-3xl  bg-[#cc3333] transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
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
        marginTop:"190px",
        marginBottom:"90px"
       }} class="group relative rounded-3xl mt-10 bg-[#cc3333] transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
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
    <div className="flex justify-center align-center text-center mb-5 mt-[-70px]">
      <Button title="contactez-nous" color="white"  bgColor="#000000"/>
      </div>
</div>
</div>
        </section>
        
        </section>
       
        </>
    )
}

export default Homepage;