import React from "react";
import "./Facts.css";
import { FactsData } from "../../FactsData";
const Facts = () => {
  return (
    <div className="facts">
      <div className="factsContainer">
        <h3>Our Facts And Figures</h3>
        <h4>Justify Why We Are The Best</h4>
        <div className="singleFactsContainer">
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
