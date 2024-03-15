import React, { useState } from 'react'
import {motion,AnimatePresence} from "framer-motion"
import { initialStore } from "../store/store";
export default function CardImage(props) {

    const [showOverlay,setShowOverlay]=useState(false)
    const openCard=initialStore((state)=>state.showUniversity)
  return (
    <motion.div className='relative overflow-hidden h-[350px] max-sm:h-[205px] min-w-[200px] bg-slate-400 rounded-xl flex justify-center items-center'
    onHoverStart={()=>setShowOverlay(true)}
    onHoverEnd={()=>setShowOverlay(false)}
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
            opacity:0
           }}
           
        >
            <div className='absolute bg-black pointer-events-none opacity-50 h-full w-full'></div>
            <motion.h1 className='bg-[#ffcc33] font-semibold text-sm z-10 px-5 py-2 rounded-full flex items-center gap-[0.5ch] hover:opacity-75'
            initial={{ 
                y:90
             }}
             animate={{ 
                y:0
              }}

              exit={{ 
                y:20
               }}
               transition={{ 
                duration:0.3
                }}
             onClick={()=>openCard(props.id)}
            >Explorer
            </motion.h1>
           
        </motion.div>
     )}
         <div className='absolute lg:hidden inset-0 z-10 flex justify-center items-center'
        >
            <div className='absolute bg-black pointer-events-none opacity-50 h-full w-full'></div>
            <h1 className='bg-white font-semibold text-sm z-10 px-5 py-2 rounded-full flex items-center gap-[0.5ch] hover:opacity-75'
             onClick={()=>openCard(props.id)}
            >Explorer
            </h1>
           
        </div>
      
      </AnimatePresence>
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
      src={props.image} className='h-full' fill alt="" style={{ objectFit:"cover" }}/>
     
    </motion.div>
  )
}
