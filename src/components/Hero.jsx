import React from "react";
import UnderLine from "./UnderLineEffect";

const Hero = () => {
  return (
    <div id="hero-container">
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
      <img className="hero-bg" src="./assets/bg1.svg" />
    </div>
  );
};

export default Hero;
