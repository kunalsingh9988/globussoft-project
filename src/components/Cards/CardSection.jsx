import React from "react";
import "./CardSection.css";
import { CardData } from "../../CardData";
const CardSection = () => {
  return (
    <div className="cardSection" data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
      <div className="cardContainer">
        <div className="topCardText">
          <h2>We Care Enough To</h2>
          <h3>Deliver Our Best</h3>
          <p>
            Globussoft aims at constantly developing itself and accepting
            challenges to provide the best services that cater to the needs of
            its customers.
          </p>
        </div>
        <div className="cards">
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
