import Footer from "../../../components/Footer";
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
    const open=()=>{
        animate2(scope2.current,{filter:"blur(12px)"},{duration:0})
          animate(scope.current,{display:'block',x:0})
     animate(scope.current,{display:'block',x:2})
     animate3(scope3.current,{x:-200})
     animate3(scope3.current,{x:20})
     animate4(scope4.current,{x:-200})
     animate4(scope4.current,{x:20})
     animate5(scope5.current,{x:-200})
     animate5(scope5.current,{x:20})
     animate6(scope6.current,{x:-200})
     animate6(scope6.current,{x:20})
    }
    return (
        <>
        
        <section  className="relative overflow-x-hidden">
        <div ref={scope} id='navbar' className="translate-x-[700px] lg:hidden fixed z-[99999999] top-0 right-0 bottom-[100%]   w-[70vw] h-[100%]  bg-[#cc3333]">
        <React.Fragment >
            <div className="mt-20 ml-10 text-white font-bold text-xl flex flex-col">
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


