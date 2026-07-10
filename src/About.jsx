import Navbar from "./Navbar";

function About(){
    return (
        <div>
            <Navbar active={"about"}/>
            <h1>About Us</h1>
            <p>Welcome to our company!</p>  
        </div>
    );
}

export default About;