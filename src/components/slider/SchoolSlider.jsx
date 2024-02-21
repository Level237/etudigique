import {Swiper,SwiperSlide} from "swiper/react"
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import {FreeMode,Pagination} from "swiper/modules"
import { UniversityImages } from "../../data/constants"
const SchoolSlider=()=>{

    return (
        <>
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
                    Pagination
                  ]}
                >
                    
                        <div className="grid grid-cols-2 gap-4 px-10 ">
                            {UniversityImages.map((image)=>(
                                <div className="relative group" key={image.src}>
                                    <SwiperSlide className="mb-14">
                                    <img
                                    src={image.src}
                                    alt="university photos"
                                    className="rounded-md  object-cover"
                                    />
                                    <div className="cursor-pointer absolute inset-0 bg-gradient-to-r from-purple-800 via-pink-500 to-purple-800 opacity-0 group-hover:opacity-70">
                                        <div className="absolute inset-0 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all">
                                            View University

                                        </div>
                                    </div>
                                    </SwiperSlide>
                                </div>
                            ))}
                        </div>
                    
                </Swiper>
            </div>
        </section>
        </>
    )
}

export default SchoolSlider