import {createBrowserRouter} from "react-router-dom"
import RootLayout from "../pages/layouts/Frontend/Root"
import Homepage from "../pages/Homepage"

export const routes=createBrowserRouter([
    {
        path:'/',
        element:<RootLayout/>,
        children:[
            {
                path:'',
                element:<Homepage/>
            }
        ]
    }
])