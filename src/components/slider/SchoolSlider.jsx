import {Swiper,SwiperSlide} from "swiper/react"
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import 'swiper/css/effect-fade';
import {FreeMode,Pagination} from "swiper/modules"
import { UniversityImages } from "../../data/constants"
import {motion} from "framer-motion"
import { initialStore } from "../../store/store";
import Modal from "../ui/Modal";
const SchoolSlider=()=>{
    const openCard=initialStore((state)=>state.showUniversity)
    const showCard=initialStore((state)=>state.showCard)

    return (
        <>
        {showCard && <Modal/>}
        <section className="mt-10 flex flex-col md:flex-row gap-5 items-center justify-center">
            <div className="w-[100%] md:w-[80%]">
                <Swiper
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
                                    {UniversityImages.map((image)=>(
                                        
                               <SwiperSlide className=" relative mb-14 " onClick={()=>openCard(image.id)}>
                                 
                                   <motion.img
                                   initial={{ 
                                    filter:"blur(12px)"
                                    }}
                               whileInView={{ 
                                filter:"blur(0px)"
                                }}
                                whileHover={{ 
                                    rotate:"12deg"
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
                                 
                               
                              <motion.div
                            
                                   className="cursor-pointer absolute inset-0 bg-gradient-to-r from-[#cc3333] via-[#ffcc00] to-[#cc3333] opacity-0 hover:opacity-70"
                                   >
                                       <div className="absolute inset-0 flex items-center justify-center cursor-pointer opacity-0 hover:opacity-100 transition-all">
                                           View university
                                       </div>
                                   </motion.div>
                              
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