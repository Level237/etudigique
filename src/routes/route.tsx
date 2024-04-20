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
                element:<Equivalence title="Equivalence de diplome"/>
            },{
                path:'admission',
                element:<Admission title="Admission"/>
            },{
                path:'campus-belgique',
                element:<Campus title="Campus Belgique"/>
            },{
                path:"demande-visa",
                element:<Demande title="Demande de Visa"/>
            },
            {
                path:"a-propos-de-nous",
                element:<About title="A propos de Nous"/>
            }, {
                path:"contactez-nous",
                element:<Contact title="Contactez nous"/>
            }, {
                path:"témoignages",
                element:<Testimonial/>
            }
        ]
       
    }
])

export default routes;