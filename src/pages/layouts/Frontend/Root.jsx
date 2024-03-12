import Footer from "../../../components/Footer";
import Header from "../../../components/Header"
import {Outlet} from "react-router-dom"
import {useAnimate} from "framer-motion"
import React from "react";
const RootLayout=()=>{
    const [scope,animate]=useAnimate();
    const [scope2,animate2]=useAnimate();
    const open=()=>{
        animate2(scope2.current,{filter:"blur(12px)"},{duration:0})
          animate(scope.current,{display:'block',x:0})
     animate(scope.current,{display:'block',x:2})
     
    }
    return (
        <>
        
        <section  className="relative overflow-x-hidden">
        <div ref={scope} id='navbar' className="translate-x-[700px] lg:hidden static z-[99999999] top-0 right-0 bottom-[100%]   w-[70vw] h-[100%]  bg-[#ffcc33]">
        <React.Fragment >
            <div className="mt-20">
                Homepage
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


