import React,{useState} from "react";
import "./Navbar.css";


const Navbar = () => {
  const [fix, setFix] = useState(false) 

  const setFixed = () => {
    if(window.scrollY >= 200){
        setFix(true)
    }else{
      setFix(false)
    }
  }
  window.addEventListener("scroll",setFixed)

  return (
    <div className="navbar">
      <section className={fix ? "navbarContainer active" : "navbarContainer"} >
        <div className="navLeft">
          <img src="/assets/globussoftlogo.png" alt="" />
        </div>
        <div className="navRight">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Products and Services</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
