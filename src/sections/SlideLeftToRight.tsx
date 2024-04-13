import Button from "../components/ui/button"
import {motion} from "framer-motion"

type sliderLeftToRight={
    title:string,
    content:React.ReactNode,
    btnTitle:string,
    btnIcon:React.ReactNode,
    image:string
}
const SlideLeftToRight=(props:sliderLeftToRight)=>{

    return (
        <>
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
   <div className="space-y-6 justify-between text-gray-600 md:flex flex-row-reverse md:gap-6 md:space-y-0 lg:gap-12 lg:items-center">
       
        <div className="md:7/12 lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          {props.title}
          </h2>
          {props.content}
          <div className="divide-y space-y-4 divide-gray-100 divide-gray-800">
            
            <div className="md:items-center">
              
              <Button link="contactez-nous" title={props.btnTitle} icon={props.btnIcon} type="secondary" color="white"/>
            </div> 
          </div>
        </div>
        <div className="md:5/12 lg:w-1/2 max-sm:hidden">
          <motion.img className="max-sm:hidden w-full" src={props.image} alt="image" 
          
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
            />
           
           
        </div>
      </div>

</div>
        </>
    )
}

export default SlideLeftToRight