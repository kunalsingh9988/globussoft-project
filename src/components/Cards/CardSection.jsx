import React from "react";
import "./CardSection.css"; // Importing CSS for this component
import { CardData } from "../../CardData"; // Importing CardData 

const CardSection = () => {
  return (
    <div className="cardSection">
      <div className="cardContainer">
        <div className="topCardText" data-aos="fade-up">
          <h2>We Care Enough To</h2>
          <h3>Deliver Our Best</h3>
          <p>
            Globussoft aims at constantly developing itself and accepting
            challenges to provide the best services that cater to the needs of
            its customers.
          </p>
        </div>
        <div className="cards">
          {/* mapping through the card data  */}
          {CardData.map((card) => {
            return (
              <div className="card" key={card.id}>
                <img className="cardImg" src={card.image} alt="" />
                <img className="shortImg" src={card.subImage} alt="" />
                <div className="cardItems">
                  <p>{card.description}</p>
                  <div className="cardButton">
                    <button>Read More</button>
                    <button>Reach Us</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
