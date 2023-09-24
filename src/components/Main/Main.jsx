import React from "react";
import "./Main.css"; // Importing CSS for this component

const Main = () => {
  return (
    <div className="main">
      {/* Container for Main Content */}
      <section className="boxContainer" data-aos="fade-up">
        {/* Main Heading */}
        <h1>Technology You Can Trust</h1>

        {/* Subheading */}
        <h2>Providing virtual solutions to help people flourish</h2>

        {/* Main Content Box */}
        <div className="mainBox">
          {/* Paragraph 1 */}
          <p>
            Globussoft enables corporations and organizations to directly
            address the necessity of becoming fast, dependable, and innovative.
            We help you transform businesses with our extensive range of
            solutions from Web, Desktop, and Mobile Applications along with
            Digital Marketing. With a gamut of software and maintenance
            services, we aim at introducing cutting edge technology to help
            enterprises leverage their capabilities.
          </p>

          {/* Paragraph 2 */}
          <p>
            We are CMM Level 3, Nasscom Certified, ISO 9001-2015 Certified,
            Microsoft Gold Certified Software Products Company. Our humongous
            experience of over a decade and technical expertise keeps us a
            century ahead of our competitors. With about 2 Million people
            consuming our services across 50 countries, we dedicatedly deliver
            quality results that compound over time. In the era of digital
            marketing and software solutions, Globussoft has unfolded as a key
            player globally. Give your dreams a pair of wings, and get ready
            to fly with us.
          </p>
        </div>

        {/* Right-side Content Box */}
        <div className="rightMainBox">
          {/* Additional content */}
          Globussoft enables corporations and organizations to directly address
          the necessity of becoming fast, dependable, and innovative. We help
          you transform businesses with our extensive range of solutions from
          Web, Desktop, and Mobile Applications along with Digital Marketing.
          With a gamut of software and maintenance services, we aim at
          introducing cutting edge technology to help enterprises leverage their
          capabilities.
        </div>
      </section>
    </div>
  );
};

export default Main;
