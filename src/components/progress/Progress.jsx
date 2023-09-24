import React, { useState, useEffect } from "react";
import "./Progress.css";
import ProgressBar from "./ProgressBar";

const Progress = () => {
  // State to keep track of the scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener when the component unmounts to prevent memory leaks
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="progress">
      <div className="progressContainer" data-aos="fade-up">
        <div className="progressHeader">
          {/*  header content */}
        </div>
        <main className="progress-main">
          {/* Progress bars with different goals */}
          <ProgressBar
            scrollPosition={scrollPosition}
            targetProgress={90}
            color="#00CED1"
            title="Strenuous Establishment"
            description="We took our first step and burnt the midnight oil to get closer to our future success."
          />
          <ProgressBar
            scrollPosition={scrollPosition}
            targetProgress={70}
            color="#fd5c63"
            title="Next-Gen Technology"
            description="We pride ourselves to be recognized as the largest IT exporter in Central India."
          />
          <ProgressBar
            scrollPosition={scrollPosition}
            targetProgress={50}
            color="#32de84"
            title="Accomplishing Small Goals"
            description="More blocks were laid to build a reliable and successful global organization."
          />
          <ProgressBar
            scrollPosition={scrollPosition}
            targetProgress={30}
            color="#DDA0DD"
            title="Producing Digital Solutions"
            description="Our aim to establish a sound presence in the IT industry continued to thrive."
          />
        </main>
      </div>
    </div>
  );
};

export default Progress;
