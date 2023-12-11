import React from "react";
import HeroPages from "../components/HeroPages";
import Alto from "../images/models/800.webp";
import Discovery from "../images/models/discovery.jpg";
import Dzire from "../images/models/Dzire.jpg";
import Fortuner from "../images/models/fortuner.jpg";
import Innova from "../images/models/innova.jpg";
import { IconStar } from "@tabler/icons-react";
import { IconCar, IconPhone } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
export default function Models() {
  const modelsData = [
    {
      id: 1,
      name: "Alto",
      price: 37,
      model: "800",
      src: Alto,
      doors: "4 / 5",
      gas: "Petrol",
      transmition: "Manual",
    },
    {
      id: 2,
      name: "Swift",
      price: 45,
      model: "Dzire",
      src: Dzire,
      doors: "4 / 5",
      gas: "Petrol",
      transmition: "Manual",
    },
    {
      id: 3,
      name: "Toyota",
      price: 35,
      model: "Fortuner",
      src: Fortuner,
      doors: "4 / 5",
      gas: "Petrol",
      transmition: "Manual",
    },
    {
      id: 4,
      name: "Toyota",
      price: 30,
      model: "Innova Crysta",
      src: Innova,
      doors: "4 / 5",
      gas: "Petrol",
      transmition: "Manual",
    },
    {
      id: 5,
      name: "Land Rover",
      price: 50,
      model: "Discovery",
      src: Discovery,
      doors: "4 / 5",
      gas: "Petrol",
      transmition: "Manual",
    },
  ];

  return (
    <div>
      <section className="model-section">
        <HeroPages name="Models" />
        <div className="container">
          <div className="models-div">
            {modelsData.map((model) => (
              <div key={model.id} className="models-div__box">
                <div className="models-div__box__img">
                  <img src={model.src} alt="" className="car__img" />
                  <div className="models-div__box__descr">
                    <div className="models-div__box__descr__name-price">
                      <div className="models-div__box__descr__name-price__name">
                        <p>{model.name}</p>
                        <span>
                          <IconStar width={15} height={15} />
                          <IconStar width={15} height={15} />
                          <IconStar width={15} height={15} />
                          <IconStar width={15} height={15} />
                          <IconStar width={15} height={15} />
                        </span>
                      </div>
                      <div className="models-div__box__descr__name-price__price">
                        <h4>${model.price}</h4>
                        <p>per day</p>
                      </div>
                    </div>
                    <div className="models-div__box__descr__name-price__details">
                      <span>
                        <IconCar />
                        &nbsp; {model.model}
                      </span>
                      <span style={{ textAlign: "right" }}>
                        {model.doors} &nbsp; <IconCar />
                      </span>
                      <span>
                        <IconCar />
                        &nbsp; {model.transmition}
                      </span>
                      <span style={{ textAlign: "right" }}>
                        {model.gas} &nbsp; <IconCar />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__btn">
                      <Link onClick={() => window.scrollTo(0, 0)} to="/">
                        Book Ride
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <IconPhone width={40} height={40} />
                <h3>(123) 456-7869</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
}
