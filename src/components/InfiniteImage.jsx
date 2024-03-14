import React, { useEffect, useState } from 'react'
import {motion,useMotionValue,animate} from "framer-motion"
import useMeasure from "react-use-measure"
export default function InfiniteImage(props) {

    const [duration,setDuration]=useState(20)
    let [ref,{width}]=useMeasure()
    const xTranslation=useMotionValue(0)

    useEffect(()=>{
        let controls;
        let finalPosition=-width/2 - 8;
            controls=animate(xTranslation,[0,finalPosition],{
                ease:'linear',
                duration:duration,
                repeat:Infinity,
                repeatType:"loop",
                repeatDelay:0
            })
        
    
        return controls?.stop;
    },[xTranslation,width,duration])
  return (
    <>
    <motion.div
     ref={ref} style={{ x:xTranslation }}
      className="flex lg:hidden justify-center">
       <img className="w-[150px] mr-3 rounded-s-3xl rounded-e-3xl" src={props.img1}/>
       <img className="w-[150px] mr-3 rounded-s-3xl rounded-e-3xl" src={props.img2}/>
       <img className="w-[150px] mr-3 rounded-s-3xl rounded-e-3xl" src={props.img3}/>
      <img className="w-[150px] mr-3 rounded-s-3xl rounded-e-3xl" src={props.img4}/>
      </motion.div>
    </>
  )
}
