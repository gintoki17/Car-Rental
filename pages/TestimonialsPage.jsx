import React from "react";
import HeroPages from "../components/HeroPages";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import { IconPhone } from "@tabler/icons-react";
export default function TestimonialsPage() {
  return (
    <div>
      <section className="TestimonialsPage-section">
        <HeroPages name="Testimonials" />
        <Testimonial />
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
