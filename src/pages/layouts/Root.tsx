import Footer from "../../components/Footer";

import Header from "../../components/Header"
import {Outlet} from "react-router-dom"
import React from "react";

const RootLayout=()=>{

    return (
        <>
        
        <section  className="relative overflow-x-hidden overflow-y-hidden">
        
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


