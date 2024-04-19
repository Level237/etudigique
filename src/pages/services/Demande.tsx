import img2 from "../../assets/img/visa/visa1.jpg"
import img3 from "../../assets/img/visa/visa2.jpg"
import img4 from "../../assets/img/visa/visa6.jpg"
import img1 from "../../assets/img/visa/visa5.jpeg"
import img5 from "../../assets/img/visa/visa4.jpg"
import img6 from "../../assets/img/visa/visa3.jpg"
import Circle from "../../components/Circle"
import Button from "../../components/ui/button"
import about from "../../assets/img/visa/visaSlide.png"
import { useEffect } from "react"
import InfiniteImage from "../../components/InfiniteImage"
import {Swiper,SwiperSlide} from "swiper/react"
import {FreeMode,Pagination} from "swiper/modules"

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import 'swiper/css/effect-fade';
const Demande=(props)=>{


    useEffect(()=>{
        document.title=props.title
      },[])
    return (
        <>
        <section className=" bg-[#0000000a]">
        <section className={`relative h-[50vh] bg-left bg-cover bg-[url('assets/img/visa/visa.jpg')] `}>
        <div className="flex items-center justify-center absolute inset-0 bg-[#ffcc00] w-100 opacity-[0.7]">
          
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-5xl max-sm:text-center max-sm:text-4xl font-bold text-white">Demande de Visa</h2>
        </div>
        </section>
       <section className="h-10 bg-[#cc3333]">

        </section>
        <section className=" relative mt-5 p-10">
          
        <div className=" flex flex-col items-center justify-center ">
        <Circle width="470px" height="470px" bgColor="#ffcc00" opacity="0.2" top="15px" left="-150px" right={""}/>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#cc3333" className="w-6 h-6 text-secondary">
        <path fill-rule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clip-rule="evenodd"></path>
      </svg>
      
      <h2 className="my-8 text-2xl font-bold flex items-center justify-center  text-black md:text-4xl text-center">
      
      Etudigigue vous simplifie les démarches!
      </h2>
      <InfiniteImage img1={img4} img2={img6} img3={img1} img4={img4}/>
      <p className="max-sm:mt-5 text-gray-600 md:w-2/3 lg:w-3/7">Obtenir un visa d'études pour la Belgique peut s'avérer un véritable parcours du combattant. Entre les documents à fournir, les formulaires à remplir et les démarches administratives, il est facile de se perdre et de se décourager.</p>
    </div>
    <div className="flex mt-4 items-center justify-center">
      <div>

      </div>
      <div className="grid grid-cols-4 gap-5">
        <div className="flex flex-col max-sm:hidden">
        <img className="w-60 rounded-s-3xl rounded-e-3xl" src={img2} alt="obtention de diplome"/>
        <img className="w-60 mt-8 rounded-s-3xl rounded-e-3xl" src={img3} alt=""/>
        </div>
      
      <img className="max-sm:hidden w-60 rounded-s-3xl rounded-e-3xl" src={img4}/>
      <img className="max-sm:hidden w-60 rounded-s-3xl rounded-e-3xl" src={img1}/>
      
      <div className="flex flex-col">
        <img className="max-sm:hidden w-60 rounded-s-3xl rounded-e-3xl" src={img5}/>
        <img className="max-sm:hidden w-60 mt-8 rounded-s-3xl rounded-e-3xl" src={img6}/>
        </div>
    </div>
    <div></div>
    </div>
    <div className='mt-5 flex items-center justify-center'>
      <Button type="secondary" title="Passez un entretien" link={""} color={""}/>
    </div>
        </section>
        <section className=" lg:px-[100px] py-[58px]  justify-center bg-[#cc3333] p-[20px]" >
        <div className="flex">
        <div style={{ width:"68vh",marginTop:"140px" }} className="max-sm:hidden mb-[-60px]">
          <img className="w-[100%] mt-8 rounded-s-3xl rounded-e-3xl" src={about} alt=""/>
          </div>
          
          <div className="flex flex-col" style={{ flex:1 }}>
          <h2 className="my-8 text-2xl max-sm:text-xl max-sm:text-center font-bold  text-white md:text-4xl">
           Démarches à suivre pour votre demande de visa
      </h2>
      <div className="grid max-sm:grid-cols-1 grid-cols-2 space-y-4 divide-gray-100 dark:divide-gray-800">
            <div className="mt-8 flex gap-4 md:items-center">
              <div className="w-12 h-12 flex gap-4 rounded-full bg-[#ffcc3321]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 m-auto text-[#ffcc33]">
                  <path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clip-rule="evenodd"></path>
                </svg>        
              </div>
              <div className="w-5/6">
                <h3 className="font-semibold text-lg  text-[#ffcc33]">Rassembler les documents nécessaires</h3>
                <p className="text-white"> Nous vous aidons à collecter tous les documents requis pour votre demande de visa, y compris votre passeport, votre lettre d’invitation, votre certificat médical, votre certificat de bonne conduite, et bien plus encore.</p>
              </div> 
            </div> 
            <div className="pt-4 flex gap-4 md:items-center">
              <div className="w-12 h-12 flex gap-4 rounded-full bg-[#ffcc3321]">  
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 m-auto text-[#ffcc33]">
                  <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
                </svg>                                      
              </div>
              <div className="w-5/6">
                <h3 className="font-semibold text-lg text-[#ffcc33]">Vérification, Conformité et Légalisation </h3>
                <p className="text-white">Nous vérifions la validité, la conformité et la légalisation de vos documents selon les normes belges.
</p>
              </div> 
            </div> 
            <div className="pt-4 flex gap-4 md:items-center">
              <div className="w-12 h-12 flex gap-4 rounded-full bg-[#ffcc3321]">  
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 m-auto text-[#ffcc33]">
                  <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
                </svg>                                      
              </div>
              <div className="w-5/6">
                <h3 className="font-semibold text-lg text-[#ffcc33]"> Formulaire de Demande de Visa en Ligne </h3>
                <p className="text-white">Nous vous aidons à remplir le formulaire de demande de visa long séjour sur Visa-On-Web, le portail officiel pour les entrées dans l’espace Schengen.

</p>
              </div> 
            </div> 
            <div className="pt-4 flex gap-4 md:items-center">
              <div className="w-12 h-12 flex gap-4 rounded-full bg-[#ffcc3321]">  
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 m-auto text-[#ffcc33]">
                  <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
                </svg>                                      
              </div>
              <div className="w-5/6">
                <h3 className="font-semibold text-lg text-[#ffcc33]">Prise de Rendez-vous et dépôt du dossier</h3>
                <p className="text-white">Constitution de votre dossier de demande de visa.
                Nous vous guidons pour prendre rendez-vous et déposer votre dossier de demande de visa auprès du centre TLS contact ou du consulat belge dans votre pays.</p>
              </div> 
            </div>
          </div>
          </div>
        </div>
          
          
        </section>
        <section className="mt-20 flex items-center justify-center">
          
          <h2 className="text-center text-xl font-bold  text-black md:text-4xl">Pourquoi choisir Etudigigue<br/> pour votre demande de visa ?</h2>
         
        </section>
        <section className="lg:hidden mb-[90px] mt-5">
        <Swiper
   centeredSlides={true}
   loop={true}
   speed={1000}
  autoplay={{ 
    delay:50,
    disableOnInteraction:false
   }}
  
               slidesPerView={1}
               
               spaceBetween={40}
                 freeMode={true}
                 pagination={{ 
                    clickable:false
                  }}
                  
                  modules={[
                    FreeMode,
                    Pagination,
                  ]}
                  
                >
                     
                                        
                                    <section
                                    
                                    >
                                  
                                        
                               <SwiperSlide className=" relative " >
                               <div   className="mx-5 relative rounded-3xl    bg-[#ffcc33] transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          

          <div className="space-y-5">
            <h5 className="text-xl text-center font-semibold text-gray-700  transition group-hover:text-secondary">
            Une équipe de professionnels qualifiées
            </h5>
            
          </div>
          
        </div>
      </div>
                              
                               </SwiperSlide>
                               <SwiperSlide className=" relative " >
                               <div   className=" mx-5 h-50 relative rounded-3xl   bg-[#ffcc33] transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          

          <div className="space-y-5">
            <h5 className="text-xl text-center font-semibold text-gray-700  transition group-hover:text-secondary">
           Accompagnement Complet
            </h5>
            
          </div>
          
        </div>
      </div>
                              
                               </SwiperSlide>
                               <SwiperSlide className=" relative " >
                               
                               <div   className="mx-3 relative rounded-3xl   bg-[#ffcc33] transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          

          <div className="space-y-5">
            <h5 className="text-xl text-center font-semibold text-gray-700  transition group-hover:text-secondary">
            Garantie de qualité et de satisfaction
            </h5>
            
          </div>
          
        </div>
      </div>
                                 
                               
                             
                              
                               </SwiperSlide>
                               <SwiperSlide className=" relative " >
                               
                               <div   className="mx-3 relative rounded-3xl   bg-[#ffcc33] transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          

          <div className="space-y-5">
            <h5 className="text-xl text-center font-semibold text-gray-700  transition group-hover:text-secondary">
            Transparence dans la procédure
            </h5>
            
          </div>
          
        </div>
      </div>
                                 
                               
                             
                              
                               </SwiperSlide>
                               
                                    </section>
                           
                        
                            
                </Swiper>
        </section>
        <section style={{ 
       
       marginLeft:"80px",
       marginRight:"80px",
       paddingBottom:"120px",
       
        }} className="max-sm:hidden">
        <div className="mt-16 grid   divide-x gap-4 div divide-gray-100   overflow-hidden  text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
      <div   className=" p-3 flex justify-center items-center relative rounded-3xl   bg-[#ffcc33] transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          

          <div className="space-y-5">
            <h5 className="text-xl text-center font-semibold text-gray-700  transition group-hover:text-secondary">
            Une équipe de professionnels qualifiés
            </h5>
            
          </div>
          
        </div>
      </div>
      <div
      
       className="group relative flex justify-center items-center  rounded-3xl  bg-[#ffcc33] transition hover:z-[1] hover:shadow-2xl">
        <div className="relative space-y-8 py-12 p-8">
          

          <div className="space-y-2">
            <h5 className="text-xl text-center font-semibold text-gray-700  transition group-hover:text-secondary">
            Accompagnement Complet 
            </h5>
            
          </div>
        
        </div>
      </div>
      <div 
      className="group relative flex justify-center items-center rounded-3xl  bg-[#ffcc33] transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          

          <div className="space-y-2">
            <h5 className="text-xl text-center font-semibold text-gray-700 transition group-hover:text-secondary">
            Garantie de Qualité et de Satisfaction
            </h5>
           
          </div>
         
        </div>
      </div>
      <div 
      className="group relative flex justify-center items-center rounded-3xl  bg-[#ffcc33] transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          

          <div className="space-y-2">
            <h5 className="text-xl text-center font-semibold text-gray-700 transition group-hover:text-secondary">
            Transparence dans la procédure
            </h5>
           
          </div>
         
        </div>
      </div>
     
      
    </div>
  
        </section>
        </section>
        
        
        </>
    )
}

export default Demande;
        
