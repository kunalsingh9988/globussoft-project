import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  // State variables to track whether the navbar should be fixed and if the sidebar should be visible.
  const [fix, setFix] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [showProductsMenu, setShowProductsMenu] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [showCareersMenu, setShowCareersMenu] = useState(false);

  // Function to determine whether the navbar should be fixed based on the scroll position.
  const setFixed = () => {
    if (window.scrollY >= 200) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  // Attach a scroll event listener to call setFixed when the user scrolls.
  useEffect(() => {
    window.addEventListener("scroll", setFixed);

    // Clean up the event listener when the component unmounts to prevent memory leaks.
    return () => {
      window.removeEventListener("scroll", setFixed);
    };
  }, []);

  return (
    <div id="navbar" >
     
      {/* Navbar container with a class that changes based on whether the navbar should be fixed */}
      <section className={fix ? "navbarContainer active" : "navbarContainer"}>
        <div className="navLeft">
          <img src="/assets/globussoftlogo.png" alt="" />
        </div>
        <div className="navRight">
          {/* Sidebar with a class that changes based on whether it should be visible */}
          <ul className={sideBar ? "sideBar active" : "sideBar"}>
            <li>Home</li>
            <li>About Us</li>
            <li onMouseOver={()=>  setShowProductsMenu(true)} >
              Products 
              {showProductsMenu && (
                <div className="submenu" >
                  {/* Add your submenu items here */}
                  <ul>
                    <li>Product 1</li>
                    <li>Product 2</li>
                    <li>Product 3</li>
                  </ul>
                </div>
              )}
            </li>
            <li onMouseEnter={() => setShowServicesMenu(true)} >
              Services 
              {showServicesMenu && (
                <div className="submenu">
                  {/* Add your submenu items here */}
                  <ul>
                    <li>Service 1</li>
                    <li>Service 2</li>
                    <li>Service 3</li>
                    <li>Service 4</li>
                    <li>Service 5</li>
                  </ul>
                </div>
              )}
            </li>
            <li onMouseEnter={() => setShowCareersMenu(true)} >
              Careers
              {showCareersMenu && (
                <div className="submenu">
                  {/* Add your submenu items here */}
                  <ul>
                    <li>Career 1</li>
                    <li>Career 2</li>
                    <li>Career 3</li>
                    <li>Career 4</li>
                  </ul>
                </div>
              )}
            </li>
            <li>Contact Us</li>
          </ul>
        </div>
         {/* Hamburger menu icon that toggles the sidebar visibility */}
      <div className="menuBar" onClick={() => setSideBar(!sideBar)}>
        {sideBar? <AiOutlineClose className="menuIcon" />:  <FiMenu className="menuIcon" /> }
        
      </div>
      </section>
      
    </div>
  );
};

export default Navbar;
