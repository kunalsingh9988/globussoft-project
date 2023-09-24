import React from "react";
import "./Facts.css"; // Importing CSS for this component
import { FactsData } from "../../FactsData"; // Importing FactsData 

const Facts = () => {
  return (
    <div className="facts">
      <div className="factsContainer" data-aos="fade-up">
        <h3>Our Facts And Figures</h3>
        <h4>Justify Why We Are The Best</h4>
        <div className="singleFactsContainer">
          {/* Mapping through FactsData and rendering individual facts */}
          {FactsData.map((fact) => {
            return (
              <div key={fact.id} className="fact">
                <h2>{fact.percentage}</h2>
                <p>{fact.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Facts;
