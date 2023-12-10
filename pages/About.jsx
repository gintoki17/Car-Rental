import React from "react";
import Footer from "../components/Footer";
import Plan from "../components/Plan";
import HeroPages from "../components/HeroPages";
import { IconPhone } from "@tabler/icons-react";
export default function About() {
  return (
    <div>
      <section className="about-page">
        <HeroPages name="About" />
        <Plan />
      </section>
    </div>
  );
}
