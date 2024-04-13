import {Swiper,SwiperSlide} from "swiper/react"
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import 'swiper/css/effect-fade';
import {FreeMode,Pagination} from "swiper/modules"
import { UniversityImages } from "../data/constants"



import CardImage from "../components/CardImage";
const SchoolSlider=()=>{
   

    
    return (
        <>
       
        
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
                                    {[...UniversityImages].map((image)=>(
                                        
                               <SwiperSlide key={image.id} className=" mb-14 " >
                                 
                                   <CardImage image={image.src} id={image.id}/>
                              
                                 
                               
                             
                              
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