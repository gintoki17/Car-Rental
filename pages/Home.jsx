import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Booking from "../components/Booking";
import Plan from "../components/Plan";
import PickCar from "../components/PickCar";
import Banner from "../components/Banner";
import Choose from "../components/Choose";
import Faq from "../components/Faq";
import Testimonial from "../components/Testimonial";
import Download from "../components/Download";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div className="car-rental">
      <Navbar />
      <Hero />
      <Booking />
      <Plan />
      <PickCar />
      <Banner />
      <Choose />
      <Testimonial />
      <Faq />
      <Download />
      <Footer />
    </div>
  );
}
