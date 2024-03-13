import Footer from "../../../components/Footer";
import { BiX } from "react-icons/bi";
import Header from "../../../components/Header"
import {Outlet} from "react-router-dom"
import {useAnimate,motion} from "framer-motion"
import React from "react";
const RootLayout=()=>{
    const [scope,animate]=useAnimate();
    const [scope2,animate2]=useAnimate();
    const [scope3,animate3]=useAnimate();
    const [scope4,animate4]=useAnimate();
    const [scope5,animate5]=useAnimate();
    const [scope6,animate6]=useAnimate();
    const open=async()=>{
        animate2(scope2.current,{filter:"blur(12px)"},{duration:0})
        await animate(scope.current,{display:'block',x:700},{duration:0})
        await animate(scope.current,{display:'block',x:150},{duration:0})
        await animate(scope.current,{display:'block',x:140},{duration:0})
        await animate(scope.current,{display:'block',x:130},{duration:0})
        await animate(scope.current,{display:'block',x:120},{duration:0})
        await animate(scope.current,{display:'block',x:110},{duration:0})
     await animate(scope.current,{display:'block',x:100},{duration:0})
     await animate(scope.current,{display:'block',x:90},{duration:0})
     await animate(scope.current,{display:'block',x:80},{duration:0})
     await animate(scope.current,{display:'block',x:70},{duration:0})
     await animate(scope.current,{display:'block',x:60},{duration:0})
     await animate(scope.current,{display:'block',x:50},{duration:0})
     await animate(scope.current,{display:'block',x:40},{duration:0})
     await animate(scope.current,{display:'block',x:30},{duration:0})
     await animate(scope.current,{display:'block',x:20},{duration:0})
     await animate(scope.current,{display:'block',x:10},{duration:0})
    
      animate3(scope3.current,{x:-200},{duration:0})
      animate3(scope3.current,{x:20})
     animate4(scope4.current,{x:-200})
      animate4(scope4.current,{x:20})
     animate5(scope5.current,{x:-200})
      animate5(scope5.current,{x:20})
      animate6(scope6.current,{x:-200})
  animate6(scope6.current,{x:20})
    }
    const close=async()=>{
       
     await animate(scope.current,{display:'block',x:10},{duration:0})
    
     await animate(scope.current,{display:'block',x:20},{duration:0})
     await animate(scope.current,{display:'block',x:30},{duration:0})
     await animate(scope.current,{display:'block',x:40},{duration:0})
     await animate(scope.current,{display:'block',x:50},{duration:0})
     await animate(scope.current,{display:'block',x:60},{duration:0})
     await animate(scope.current,{display:'block',x:70},{duration:0})
     await animate(scope.current,{display:'block',x:80},{duration:0})
     await animate(scope.current,{display:'block',x:90},{duration:0})
     await animate(scope.current,{display:'block',x:100},{duration:0})
     await animate(scope.current,{display:'block',x:110},{duration:0})
     await animate(scope.current,{display:'block',x:120},{duration:0})
     
      
     await animate(scope.current,{display:'block',x:130},{duration:0})
     await animate(scope.current,{display:'block',x:140},{duration:0})
     await animate(scope.current,{display:'block',x:150},{duration:0})
     await animate(scope.current,{display:'block',x:160},{duration:0})
     await animate(scope.current,{display:'block',x:170},{duration:0})
     await animate(scope.current,{display:'block',x:190},{duration:0})
     await animate(scope.current,{display:'block',x:200},{duration:0})
     await animate(scope.current,{display:'block',x:260},{duration:0})
     await animate(scope.current,{display:'block',x:350},{duration:0})
     await animate(scope.current,{display:'block',x:700},{duration:0})
      animate3(scope3.current,{x:-200},{duration:0})
      animate3(scope3.current,{x:20})
     animate4(scope4.current,{x:-200})
      animate4(scope4.current,{x:20})
     animate5(scope5.current,{x:-200})
      animate5(scope5.current,{x:20})
      animate6(scope6.current,{x:-200})
  animate6(scope6.current,{x:20})
  animate2(scope2.current,{filter:"blur(0px)"},{duration:0})
    }
    return (
        <>
        
        <section  className="relative overflow-x-hidden">
        <div ref={scope} id='navbar'style={{ display:"none" }} className=" lg:hidden fixed z-[99999999] top-0 right-0 bottom-[100%]   w-[70vw] h-[100%]  bg-[#cc3333]">
        <React.Fragment >
            <div className=" text-white text-4xl">
            <BiX onClick={()=>close()}/>
            <div
              class='flex mx-5 xl:w-50 max-xl:w-[58vw] bg-gray-100 px-2 py-3 rounded outline outline-transparent focus-within:outline-[#007bff]'>
              <input type='text' placeholder='Search something...'
                class='w-full text-sm bg-transparent rounded outline-none pr-2' />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
                class="cursor-pointer fill-gray-400">
                <path
                  d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                </path>
              </svg>
            </div>
            </div>
        
            <div className="mt-[12px] ml-10 text-white font-bold text-xl flex flex-col">
            
                <div >
                    Homepage
                </div>
                <div  className="mt-5">
                  Nos Services
                </div>
                <div  ref={scope3} className=" text-sm mt-5">
                  Equivalence de diplome
                </div>
                <div  ref={scope4} className=" text-sm mt-1">
                Admission
                </div>
                <div  ref={scope5} className=" text-sm mt-1">
                 Campus Belgique
                </div>
                <div  ref={scope6} className=" text-sm mt-1">
                 Demande visa
                </div>
                <div className="mt-5">
                 A propos de nous
                </div>
                <div className="mt-5">
                Contactez nous
                </div>
            </div>
        </React.Fragment>
</div>
        <Header open={open}/>
        <section ref={scope2}>
            <Outlet />
        </section>
            
        <Footer/>

        </section>
       
        </>
        
    )
}

export default RootLayout;


