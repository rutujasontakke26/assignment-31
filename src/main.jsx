import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./home";
import About from "./about";
import Contact from "./contact";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/> 
    </Routes>
  </BrowserRouter>,
);