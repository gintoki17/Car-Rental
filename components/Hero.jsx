import { IconChevronRight, IconCircleCheck } from "@tabler/icons-react";
import React from "react";
import HeroImg from "../images/hero-bg.png";
export default function Hero() {
  return (
    <div>
      <section id="home" className="hero-section">
        <div className="container">
          <img src={HeroImg} alt="" className="bg-shape" />
          <div className="hero-content">
            <div className="hero-content__text">
              <h4>Plan your trip now</h4>
              <h1>
                Save <span>big</span> with our car rental
              </h1>
              <p>
                Rent the car of your dreams. Unbeatable Prices, unlimited miles,
                flexible pick-up options and much more
              </p>
              <div className="hero-content__text__btns">
                <a href="#" className="hero-content__text__btns__book-ride">
                  Book Ride &nbsp; <IconCircleCheck />
                </a>
                <a href="#" className="hero-content__text__btns__learn-more">
                  Learn More &nbsp; <IconChevronRight />
                </a>
              </div>
            </div>
            <img
              src="../images/land_rover_0.png"
              alt="car-img"
              className="hero-content__car-img"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
