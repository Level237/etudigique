import Footer from "../../../components/Footer";
import Header from "../../../components/Header"
import {Outlet} from "react-router-dom"
const RootLayout=()=>{

    return (
        <>
        <section className="overflow-x-hidden">
        <Header/>
            <Outlet/>
        <Footer/>
        </section>
       
        </>
        
    )
}

export default RootLayout;


