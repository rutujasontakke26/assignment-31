import { Home as HomeIcon } from "lucide-react";
import Navbar from "./Navbar";


function Home() {
  return (
    <div className="home">
      <Navbar active={"home"}/>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main content of the home page.</p>
    </div>
  );
}

export default Home;