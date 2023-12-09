import React, { useState } from 'react';
import { carData } from './CarData';

export default function PickCar() {
  const carTypes = ["Alto-800", "Swift Dzire", "Fortuner", "Innova Crysta", "Land Rover Discovery"];
  const [active, setActive] = useState(carTypes[0]);
  const selectedCarData = carData[active];
  const handleButtonClick = (carType) => {
    setActive(carType);
  };

  return (
    <div>
      <section className='pick-section'>
        <div className="container">
          <div className="pick-container">
            <div className="pick-container__title">
              <h3>Vehicle Models</h3>
              <h2>Our rental fleet </h2>
              <p>choose from a variety of our amazing vehicles to rent for your next trip </p>
            </div>
            <div className="pick-container__car-content">
              <div className="pick-box">
                {carTypes.map((carType) => (
                  <button
                    key={carType}
                    onClick={() => handleButtonClick(carType)}
                    className={active === carType ? "active" : ""}
                  >
                    {carType}
                  </button>
                ))}
              </div>
              <div className="box-car">
              <div className="car-img">
                <img src={selectedCarData.img} alt="car-img" />
              </div>
              <div className="pick-description">
                <div className="pick-description__price">
                    <span>${selectedCarData.price}</span>/rent per day
                </div>
                <div className="pick-discription__table">
                    <div className="pick-description__table__col">
                        <span>Model</span>
                        <span>{selectedCarData.model}</span>
                    </div>
                    <div className="pick-description__table__col">
                        <span>Mark</span>
                        <span>{selectedCarData.mark}</span>
                    </div>
                    <div className="pick-description__table__col">
                        <span>Year</span>
                        <span>{selectedCarData.year}</span>
                    </div>
                    <div className="pick-description__table__col">
                        <span>Doors</span>
                        <span>{selectedCarData.doors}</span>
                    </div>
                    <div className="pick-description__table__col">
                        <span>AC</span>
                        <span>{selectedCarData.air}</span>
                    </div>
                    <div className="pick-description__table__col">
                        <span>Transmission</span>
                        <span>{selectedCarData.transmission}</span>
                    </div>
                    <div className="pick-description__table__col">
                        <span>Fuel</span>
                        <span>{selectedCarData.fuel}</span>
                    </div>
                </div>
                <a className="cta-btn" href="#booking-section">
              Reserve Now
            </a>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}
