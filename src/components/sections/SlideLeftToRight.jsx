import Button from "../ui/button"
import {motion} from "framer-motion"
const SlideLeftToRight=(props)=>{

    return (
        <>
        <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
   <div class="space-y-6 justify-between text-gray-600 md:flex flex-row-reverse md:gap-6 md:space-y-0 lg:gap-12 lg:items-center">
       
        <div class="md:7/12 lg:w-1/2">
          <h2 class="text-3xl font-bold text-gray-900 md:text-4xl">
          {props.title}
          </h2>
          {props.content}
          <div class="divide-y space-y-4 divide-gray-100 divide-gray-800">
            
            <div class="md:items-center">
              
              <Button title={props.btnTitle} icon={props.btnIcon} type="secondary" color="white"/>
            </div> 
          </div>
        </div>
        <div class="md:5/12 lg:w-1/2 max-sm:hidden">
          <motion.img className="max-sm:hidden" src={props.image} alt="image" 
          
          style={{ 
            objectFit:"cover"
           }} loading="lazy" width=""
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
           height="" class="w-full"/>
           
           
        </div>
      </div>

</div>
        </>
    )
}

export default SlideLeftToRight