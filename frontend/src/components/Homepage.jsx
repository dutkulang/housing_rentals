import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
function Homepage(){
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Homepage;