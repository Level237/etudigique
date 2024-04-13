import { createBrowserRouter } from "react-router-dom";


export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Suspense><Root/></Suspense>,
       
    }
])