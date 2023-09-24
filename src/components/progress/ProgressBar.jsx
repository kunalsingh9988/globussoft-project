//This component is made to reduce redundancy and promoting DRY principle
import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressBar = ({ scrollPosition, targetProgress, color, title, description }) => {
  // State to manage the current progress value
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Effect to update progress when the scroll position reaches a certain point
    if (scrollPosition >= 1200 && progress < targetProgress) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress < targetProgress) {
            return prevProgress + 1;
          } else {
            clearInterval(interval); // Clear the interval when the target progress is reached
            return prevProgress;
          }
        });
      }, 300); // Interval to increment progress (adjust timing as needed)
    }
  }, [scrollPosition, progress, targetProgress]);

  return (
    <div className="circular-progress-bar">
      {/* Circular progress bar component */}
      <CircularProgressbar
        value={progress}
        text={`${progress}%`}
        className=" progressbar"
        styles={buildStyles({
          pathColor: color, // Customize progress bar color
          textColor: `#007bff`, // Customize text color
          trailColor: `#f5f5f5`, // Customize trail (background) color
        })}
      />
      {/* Title and description */}
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default ProgressBar;
