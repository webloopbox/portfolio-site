import React from "react";
import UnderLine from "./UnderLineEffect";
import Reveal from "react-reveal/Reveal";

const Hero = (props) => (
  <section id="hero-container">
    <div className="hero-content">
      <h1>
        FRONT-END
        <br /> DEVELOPER
      </h1>
      <h4>
        <span>Tworzę nowoczesne strony internetowe</span>
        <UnderLine />
      </h4>
      <a href="#">Podejmij współpracę</a>
      <div id="hero-bubbles">
        <div className="bubble bl_1"></div>
        <div className="bubble bl_2"></div>
        <div className="bubble bl_3"></div>
        <div className="bubble bl_4"></div>
        <div className="bubble bl_5"></div>
        <div className="bubble bl_6"></div>
      </div>
    </div>
    <Reveal effect="fadeLeft">
      <img className="hero-bg" src="./assets/bg1.svg" />
    </Reveal>
  </section>
);

export default Hero;
