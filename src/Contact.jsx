import Navbar from "./Navbar";

function Contact(){
  return (
    <div>
      <Navbar active={"contact"}/>
      <h2>Contact Us</h2>
      <p>Email: info@company.com</p>
      <p>Phone: (123) 456-7890</p>
      <a href="/">Home</a>
    </div>
  );
};

export default Contact;