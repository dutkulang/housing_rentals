import { Link } from "react-router";

function Header(){
    return (
        <header>
            <Link to={"/"}>Housing & Rentals</Link>
            <nav>
                <button><Link to={"/contact"}>Contact</Link></button>
                <button><Link to={"/signup"}>Sign</Link></button>
                <button><Link to={"/login"}>Login</Link></button>
            </nav>
        </header>
    )
}

export default Header;