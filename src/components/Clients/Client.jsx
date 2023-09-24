import { useState } from "react";
import "./Client.css"; // Importing CSS for this component
import { ClientData } from "../../ClientData"; // Importing ClientData  
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Client = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // State to keep track of the current slide index

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ClientData.length);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? ClientData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id="client">
      <h1 data-aos="fade-up">Meet Our Clients</h1>

      <div className="carousel-container" data-aos="fade-up">
        <div className="carouselClient">
          {/* Button to navigate to the previous slide */}
          <button onClick={prevSlide} className="arrow-button prev">
            <AiOutlineArrowLeft />
          </button>
          <div className="carousel">
            {/* mapping through client data  */}
            {ClientData.map((client, index) => (
              <div
                key={client.id}
                className={`slide ${index === currentIndex ? "active" : ""}`}
              >
                <img
                  className="clientImg"
                  src={client.image}
                  alt={client.title}
                />
                <h2>"{client.title}"</h2>
                <p>{client.description}</p>
                <h3>"{client.name}"</h3>
              </div>
            ))}
          </div>
          {/* Button to navigate to the next slide */}
          <button onClick={nextSlide} className="arrow-button next">
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Client;
