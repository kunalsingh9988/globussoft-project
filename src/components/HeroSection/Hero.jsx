import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="heroContainer">
        <section className="leftHero">
          <h1>Expanding Possibilities For The Next Generation</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut enim
            corrupti cupiditate reprehenderit, vel nihil provident aut
            praesentium quas!
          </p>
        </section>
        <section className="rightHero">
          <img src="/assets/people.jpg" alt="" />
        </section>
      </div>
      <svg
        id="visual"
        viewBox="0 0 900 600"
        width="800"
        height="600"
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <g transform="translate(443.8803984231206 304.6259291710469)">
          <path
            d="M144.2 -201.8C181.5 -171.4 202.5 -122 220.1 -70.8C237.8 -19.6 252 33.5 244.2 86C236.3 138.6 206.3 190.6 161.9 214.4C117.6 238.1 58.8 233.6 11 218.4C-36.7 203.2 -73.5 177.5 -118.8 154C-164.1 130.6 -218.1 109.5 -230.9 74.1C-243.8 38.6 -215.6 -11.1 -193.9 -58.5C-172.3 -105.8 -157.3 -150.8 -126.1 -183.2C-94.8 -215.5 -47.4 -235.3 3 -239.4C53.5 -243.6 107 -232.2 144.2 -201.8"
            fill="#65f6ff"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default Hero;
