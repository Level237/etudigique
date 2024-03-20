import {createBrowserRouter} from "react-router-dom"
import RootLayout from "../pages/layouts/Frontend/Root"
import Homepage from "../pages/Homepage"
//import Equivalence from "../pages/services/Equivalence"
import Admission from "../pages/services/Admission"
import Campus from "../pages/services/Campus"
import Demande from "../pages/services/Demande"
import React,{ Suspense, lazy } from "react"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Testimonial from "../pages/Testimonials"

const EquivalencePage=lazy(()=>{
    return Promise.all([
        import('../pages/services/Equivalence'),
        new Promise(resolve=>setTimeout(resolve,3000))
    ]).then(([moduleExport])=>moduleExport)
})

const Root=lazy(()=>{
    return Promise.all([
        import('../pages/layouts/Frontend/Root'),
        new Promise(resolve=>setTimeout(resolve,3000))
    ]).then(([moduleExport])=>moduleExport)
})


export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Suspense><Root/></Suspense>,
        children:[
            {
                path:'',
                element:<Homepage title="Etudigique"/>
            },{
                path:'equivalence-de-diplome',
                //element:<React.Suspense fallback={<p>Loading...</p>}><EquivalencePage title="Equivalence de Diplome"/></React.Suspense>,
                //lazy:()=>import('../pages/services/Equivalence').then(module=>module)
                element:<EquivalencePage/>
            },{
                path:'admission',
                element:<Admission title="Admission"/>
            },{
                path:'campus-belgique',
                element:<Campus title="Campus Belgique"/>
            },{
                path:"demande-visa",
                element:<Demande title="Demande de Visa"/>
            },{
                path:"a-propos-de-nous",
                element:<About/>
            },
            {
                path:"contactez-nous",
                element:<Contact/>
            },
            {
                path:"témoignages",
                element:<Testimonial/>
            }
        ]
    }
])