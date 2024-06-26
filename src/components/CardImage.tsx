import  { useState } from 'react'
import {motion,AnimatePresence} from "framer-motion"

import { FaArrowAltCircleRight } from 'react-icons/fa'
import { initialStore } from '../store/store'

type CardImageType={
    image:string,
    id:number
}
export default function CardImage(props:CardImageType) {

    const [showOverlay,setShowOverlay]=useState(false)
    const [showBtn,setShowBtn]=useState(false)
    const openCard=initialStore((state)=>state.showUniversity)
  return (
    <motion.div className='relative overflow-hidden h-[350px] max-sm:h-[205px] min-w-[200px] bg-slate-400 rounded-xl flex justify-center items-center'
    onHoverStart={()=>{setShowOverlay(true);setShowBtn(true)}}
    onHoverEnd={()=>{setShowOverlay(false);setShowBtn(false)}}
    >
        <AnimatePresence>

        
     {showOverlay && (
        <motion.div className='absolute inset-0 z-10 flex justify-center items-center'
        initial={{ 
            opacity:0
         }}
         animate={{ 
            opacity:1
          }}

          exit={{ 
            opacity:1
           }}

        >
            <div className='absolute bg-black pointer-events-none opacity-50 h-full w-full'></div>
            
            {showBtn && <motion.h1 style={{ cursor:'pointer' }} className='bg-[#ffcc33] font-semibold text-sm z-10 px-5 py-2 rounded-full flex items-center gap-[0.5ch] hover:opacity-75'
            initial={{ 
                y:90
             }}
             animate={{ 
                y:0
              }}

              exit={{ 
                opacity:0,
                y:90
               }}
               transition={{ 
                duration:0.3
                }}
                onClick={()=>openCard(props.id)}
            >Explorer <FaArrowAltCircleRight/>
            </motion.h1>}
        </motion.div>
     )}</AnimatePresence>
         <div className='absolute lg:hidden inset-0 z-10 flex justify-center items-center'
        >
            <div className='absolute bg-black pointer-events-none opacity-50 h-full w-full'></div>
            <h1 className='bg-white font-semibold text-sm z-10 px-5 py-2 rounded-full flex items-center gap-[0.5ch] hover:opacity-75'
            
            >Explorer <FaArrowAltCircleRight/>
            </h1>
           
        </div>
      
      
      <motion.img
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
      src={props.image} className='h-full'  alt="" style={{ objectFit:"cover" }}/>
     
    </motion.div>
  )
}
