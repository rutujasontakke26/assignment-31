import { createRoot } from "react-dom/client";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import NotFound from "./NotFound";
import { BrowserRouter } from "react-router";

const root = createRoot(document.getElementById("root"));

const pathname = window.location.pathname;
console.log("current pathname:", pathname);

if (pathname === "/"){
  root.render(<Home/>);
}else if (pathname === "/about"){
  root.render(<About/>);
}else if (pathname === "/contact"){
  root.render(<Contact/>);
}else{
  root.render(<NotFound/>);
}
