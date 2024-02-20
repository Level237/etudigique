import Header from "../../../components/Header"
import {Outlet} from "react-router-dom"
const RootLayout=()=>{

    return (
        <Header>
            <Outlet/>
        </Header>
    )
}

export default RootLayout;