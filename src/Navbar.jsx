import "./Navbar.css";

function Navbar({active}){
    return (
        <div className="navbar">
        <a href="/" className="nav-menu" style={{ fontWeight: active === "home" ? "bold" : "normal"}}>Home</a>
        <a href="/about" className="nav-menu" style={{ fontWeight: active === "about" ? "bold" : "normal"}}>About</a>
        <a href="/contact" className="nav-menu" style={{ fontWeight: active === "contact" ? "bold" : "normal"}}>Contact</a>
        </div>
    );
}

export default Navbar;