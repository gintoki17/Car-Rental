import React from "react";
import "../dist/css/styles.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Home from "../pages/Home";
import TestimonialsPage from "../pages/TestimonialsPage";
import Models from "../pages/Models";
import Team from "../pages/Team";
import Contact from "../pages/Contact";
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="models" element={<Models />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}
