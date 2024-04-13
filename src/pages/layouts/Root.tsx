import Footer from "../../../components/Footer";
import { BiX } from "react-icons/bi";
import Header from "../../components/Header"
import {Link, Outlet} from "react-router-dom"
import {motion,AnimatePresence} from "framer-motion"
import React from "react";
import { initialStore } from "../../../store/store";
const RootLayout=()=>{
  const showHeader=initialStore((state)=>state.showHeader)
    const closeHeader=initialStore((state)=>state.closeShowHeader)
    

    
    const close=()=>{
       
     
      closeHeader()
  }
  
   
    
    return (
        <>
        
        <section  className="relative overflow-x-hidden">
        <AnimatePresence>
          {
           
            showHeader && (
              <motion.div 
              initial={{ 
                x:600
               }}

               animate={{ 
                x:2
                }}
                exit={{ 
                  x:600
                 }}
                 transition={{ 
                  duration:0.7
                  }}
              id='navbar' className=" lg:hidden fixed z-[99999999] top-0 right-0 bottom-[100%]   w-[70vw] h-[100%]  bg-[#cc3333]">
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
            
                <div onClick={()=>closeHeader()}>
                  <Link to=''>
                    Accueil
                    </Link>
                </div>
                <div  className="mt-5">
                  Nos Services
                </div>
                <div onClick={()=>closeHeader()} className=" text-sm mt-5">
                <Link to="equivalence-de-diplome" title="Equivalence de Diplome" class="block py-1 px-2 text-[#ffcc00]">Equivalence de diplome</Link>
                </div>
                <div onClick={()=>closeHeader()}   className="text-sm mt-1 py-1 px-2 text-[#ffcc00]">
                <Link to="admission" class="block py-1 px-2">Admission</Link>
                </div>
                <div onClick={()=>closeHeader()}  className=" text-sm mt-1 py-1 px-2 text-[#ffcc00]">
                <Link to="campus-belgique" class="block py-1 px-2">Campus belgique</Link>
                </div>
                <div onClick={()=>closeHeader()} className=" text-sm mt-1 py-1 px-2 text-[#ffcc00]">
                <Link to="demande-visa" class="block py-1 px-2">Demande de Visa</Link>
                </div>
                <div onClick={()=>closeHeader()} className="mt-5">
                <Link to='a-propos-de-nous'
                class=' text-white block'>A Propos de nous</Link>
                </div>
                <div onClick={()=>closeHeader()} className="mt-5">
                Contactez nous
                </div>
            </div>
        </React.Fragment>

        </motion.div>
            )
          }
          </AnimatePresence>
        <Header/>
        <section >
            <Outlet />
        </section>
            
        <Footer/>

        </section>
       
        </>
        
    )
}

export default RootLayout;


