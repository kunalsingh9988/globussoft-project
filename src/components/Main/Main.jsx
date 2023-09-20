import React from "react";
import "./Main.css";
const Main = () => {
  return (
    <div className="main">
      <div className="whiteBox"></div>
      <section className="boxContainer">
        <h1>Technology You Can Trust</h1>
        <h2>Providing virtual solutions to help people flourish</h2>
        <div className="mainBox">
          <p data-aos="fade-up-right">
            Globussoft enables corporations and organizations to directly
            address the necessity of becoming fast, dependable, and innovative.
            We help you transform businesses with our extensive range of
            solutions from Web, Desktop, and Mobile Applications along with
            Digital Marketing. With a gamut of software and maintenance
            services, we aim at introducing cutting edge technology to help
            enterprises leverage their capabilities.
          </p>
          <p data-aos="fade-up-right">
            We are CMM – Level 3, Nasscom Certified, ISO 9001-2015 Certified,
            Microsoft Gold Certified Software Products Company. Our humongous
            experience of over a decade and technical expertise keeps us a
            century ahead of our competitors. With about 2 Million people
            consuming our services across 50 countries, we dedicatedly deliver
            quality results that compound over time. In the era of digital
            marketing and software solutions, Globussoft has unfolded as a key
            player globally. Give your dreams a pair of wings, and get ready to
            fly with us.
          </p>
          <div className="rightMainBox" data-aos="fade-up-left">
            Globussoft enables corporations and organizations to directly
            address the necessity of becoming fast, dependable, and innovative.
            We help you transform businesses with our extensive range of
            solutions from Web, Desktop, and Mobile Applications along with
            Digital Marketing. With a gamut of software and maintenance
            services, we aim at introducing cutting edge technology to help
            enterprises leverage their capabilities.
          </div>
        </div>
      </section>
      <img className="wave" src="/assets/wave.png" alt="" />
    </div>
  );
};

export default Main;
