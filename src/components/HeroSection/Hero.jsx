import React from "react";
import "./Hero.css"; // Importing CSS for this component

const Hero = () => {
  return (
    <div id="hero">
      <div className="heroContainer">
        {/* Left Side of Hero Section */}
        <section className="leftHero">
          {/* Main Heading */}
          <h1>Expanding Possibilities For The Next Generation</h1>

          {/* Paragraph */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut enim
            corrupti cupiditate reprehenderit, vel nihil provident aut
            praesentium quas!
          </p>
        </section>

        {/* Right Side of Hero Section */}
        <section className="rightHero">
          {/* Image */}
          <img src="/assets/people.jpg" alt="" />
        </section>
      </div>
    </div>
  );
};

export default Hero;
