import { createBrowserRouter } from "react-router-dom";
import RootLayout from '../pages/layouts/Root';
import Homepage from '../pages/Homepage';
import Equivalence from "../pages/services/Equivalence";
import Admission from "../pages/services/Admission";
import Campus from "../pages/services/Campus";
import Demande from "../pages/services/Demande";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Testimonial from "../pages/Testimonials";


export const routes=createBrowserRouter([
    {
        path:'/',
        element:<RootLayout/>,
        children:[
            {
                path:'',
                element:<Homepage/>
            },{
                path:'equivalence-de-diplome',
                element:<Equivalence/>
            },{
                path:'admission',
                element:<Admission/>
            },{
                path:'campus-belgique',
                element:<Campus/>
            },{
                path:"demande-visa",
                element:<Demande/>
            },
            {
                path:"a-propos-de-nous",
                element:<About/>
            }, {
                path:"contactez-nous",
                element:<Contact/>
            }, {
                path:"témoignages",
                element:<Testimonial/>
            }
        ]
       
    }
])

export default routes;