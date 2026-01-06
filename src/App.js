import React from "react";
import "./App.css";

import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Navigation } from "./components/Navigation";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { CustomCursor } from "./components/CustomCursor";
import Contact from "./components/Contact";

import AdvancedSkills from "./components/AdvancedSkills";
import { Projects } from "./components/Projects";
import Achievements from "./components/Achievements";
import { ParallaxSection } from "./components/ParallaxSection";

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <Navigation />
      <main className="pt-5">
        {/* Hero Section with parallax */}
        <ParallaxSection offset={40}>
          <Hero />
        </ParallaxSection>

        {/* About Section with parallax */}
        <ParallaxSection offset={30}>
          <About />
        </ParallaxSection>

        <AdvancedSkills />
        <Experience />

        {/* Achievements optional parallax */}
        <ParallaxSection offset={20}>
          <Achievements />
        </ParallaxSection>

        {/* Projects optional: wrap the entire section */}
        <ParallaxSection offset={20}>
          <Projects />
        </ParallaxSection>

        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;
