import "./Navbar.css";
import {Link} from "react-router";

function Navbar({active}){
    return (
        <div className="navbar">
        <Link to="/" className="nav-menu" style={{ fontWeight: active === "home" ? "bold" : "normal"}}>Home</Link>{""}
        <Link to="/about" className="nav-menu" style={{ fontWeight: active === "about" ? "bold" : "normal"}}>About</Link>{""}
        <Link to="/contact" className="nav-menu" style={{ fontWeight: active === "contact" ? "bold" : "normal"}}>Contact</Link>{""}
        </div>
    );
}

export default Navbar;