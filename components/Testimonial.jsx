import React from "react";
import { IconQuote } from "@tabler/icons-react";
import Img2 from "../images/pfp1.jpg";
import Img3 from "../images/pfp2.jpg";
export default function Testimonial() {
  return (
    <div>
      <section className="testimonial-section">
        <div className="container">
          <div className="testimonial-content">
            <div className="testimonial-content__title">
              <h4>Reviewed by People</h4>
              <h2>Client's Testimonial</h2>
              <p>
                Discover the positive impact we've made on the our clients by
                reading through their testimonials. Our clients have experienced
                our service and results, and they're eager to share their
                positive experiences with you.
              </p>
            </div>
            <div className="all-testimonials">
              <div className="all-testimonials__box">
                <span className="quotes-icon">
                  <IconQuote width={60} height={60} />
                </span>
                <p>
                  "We rented a car from this website and had an amazing
                  experience! The booking was easy and the rental rates were
                  very affordable. "
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img2} alt="user_img" />
                    <span>
                      <h4>Parry Hotter</h4>
                      <p>Griffindor</p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="all-testimonials__box box-2">
                <span className="quotes-icon">
                  <IconQuote width={60} height={60} />
                </span>
                <p>
                  "The car was in great condition and made our trip even better.
                  Highly recommend for this car rental website!"
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img3} alt="user_img" />
                    <span>
                      <h4>Ron Rizzly</h4>
                      <p>Hufflepuff</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
