import {Swiper,SwiperSlide} from "swiper/react"
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import 'swiper/css/effect-fade';
import {FreeMode,Pagination} from "swiper/modules"
import { UniversityImages } from "../../data/constants"
import {motion,AnimatePresence} from "framer-motion"
import { initialStore } from "../../store/store";
import Modal from "../ui/Modal";
const SchoolSlider=()=>{
    const openCard=initialStore((state)=>state.showUniversity)
    const showCard=initialStore((state)=>state.showCard)
    const openHover=initialStore((state)=>state.openHoverLay)
    const closeHover=initialStore((state)=>state.closeHoverLay)
    const hoverLay=initialStore((state)=>state.showOverlay)
    return (
        <>
        {showCard && <Modal/>}
        <section className="mt-10 flex flex-col md:flex-row gap-5 items-center justify-center">
            <div className="w-[100%] md:w-[80%] max-sm:w-[90%]">
                <Swiper
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

                                    className="relative overflow-hidden  bg-slate-400 rounded-xl flex justify-center items-center"
                                    >
                                    {UniversityImages.map((image)=>(
                                        
                               <SwiperSlide key={image.id} className=" mb-14 " onClick={()=>openCard(image.id)}>
                                 
                                   <motion.img
                                   key={image.id}
                                   onHoverStart={()=>openHover()}
                                   onHoverEnd={()=>closeHover()}
                                   initial={{ 
                                    filter:"blur(12px)"
                                    }}
                               whileInView={{ 
                                filter:"blur(0px)"
                                }}
                               
                                transition={{ 
                                    duration:1,
                                    ease:"circInOut"
                                 }}
                               src={image.src}
                               alt="university photos"
                               style={{ 
                               
                                }}
                               className="rounded-md object-cover"
                               />
                                 <AnimatePresence>
                                 {hoverLay && (
                                <motion.div
                                 
                                 className="cursor-pointer absolute inset-0 flex justify-center items-center"
                                 >
                                     <div className="absolute inset-0 bg-black opacity-75 z-10 ">
                                         
                                     </div>
                                     <div className="bg-white py-3 px-5 z-50 rounded-lg opacity-2">
                                          Consulter
                                         </div>
                                 </motion.div>
                               )}

                                 </AnimatePresence>
                              
                                 
                               
                             
                              
                               </SwiperSlide>
                           
                       ))}
                                    </section>
                           
                        
                            
                </Swiper>
            </div>
        </section>
        </>
    )
}

export default SchoolSlider