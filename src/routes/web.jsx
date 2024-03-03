import {createBrowserRouter} from "react-router-dom"
import RootLayout from "../pages/layouts/Frontend/Root"
import Homepage from "../pages/Homepage"
import Equivalence from "../pages/services/Equivalence"
import Admission from "../pages/services/Admission"
import Campus from "../pages/services/Campus"

export const routes=createBrowserRouter([
    {
        path:'/',
        element:<RootLayout/>,
        children:[
            {
                path:'',
                element:<Homepage title="Etudigique"/>
            },{
                path:'equivalence-de-diplome',
                element:<Equivalence title="Equivalence de Diplome"/>
            },{
                path:'admission',
                element:<Admission title="Admission"/>
            },{
                path:'campus-belgique',
                element:<Campus title="Campus Belgique"/>
            }
        ]
    }
])