import Header from "./Header";
import { Outlet } from "react-router";
function Homepage(){
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
}

export default Homepage;