import React from "react";
import UnderLine from "./UnderLineEffect";
import Fade from "react-reveal/Fade";

const AboutMe = (props) => (
  <section id="about" className="section-about">
    <div className="about-content">
      <h2 className="section-title">
        <Fade left delay={0}>
          O MNIE
        </Fade>
      </h2>
      <UnderLine />
      <Fade left delay={500}>
        <p>
          Obecnie jestem studentem III roku studiów na wydziale Elektrotechniki, Automatyki i Informatyki Politechniki Świętokrzyskiej.
        </p>
      </Fade>
      <Fade left delay={550}>
        <p>
           Technologie webowe są głównym obszarem, w którym się rozwijam. Posiadam solidną wiedzę i doświadczenie w tworzeniu aplikacji webowych, wykorzystując różnorodne narzędzia i technologie. Potrafię projektować interfejsy użytkownika, implementować logikę biznesową i komunikować się z REST API. 
        </p>
      </Fade>
      <Fade left delay={600}>
        <p>
          Jestem również zaangażowany w ciągłe poszerzanie swojej wiedzy i umiejętności, aby być na bieżąco z najnowszymi trendami i narzędziami. Moje doświadczenie z TypeScript pozwala mi tworzyć bardziej bezpieczny i skalowalny kod, z silnym typowaniem i statyczną analizą.
        </p>
      </Fade>
    </div>
    <Fade right delay={500}>
      <div className="about-image">
        <svg id="avatar" viewBox="0 0 247 248" fill="none">
          <path
            d="M6.178 107.74C-12.14 75.685 11.582 31.941 60.083 9.441 100.583-9.347 163.428 29.492 198 76c34.753 46.752 76.5 100 23 151-37.115 35.38-114.744 22.151-124.5-18-13-53.5-62.322-52.26-90.322-101.26z"
            fill="#F6F6F6"
          />
          <path
            d="M48.606 69C64 28 69 .745 128.707.745c61.837 0 92.231 25.462 110.5 86.5C253.5 135 222 180 199 195.5 169.063 215.675 98.86 269.059 41.606 175c-14-23-6.552-69.908 7-106z"
            fill="url(#prefix__pattern0)"
          />
          <defs>
            <pattern
              id="prefix__pattern0"
              patternContentUnits="objectBoundingBox"
              width={1}
              height={1}
            >
              <use
                xlinkHref="#prefix__image0"
                transform="translate(0 -.313) scale(.00078)"
              />
            </pattern>
            <image
              id="prefix__image0"
              width={1280}
              height={2276}
              href="./assets/prof.jpg"
            />
          </defs>
        </svg>
      </div>
    </Fade>
  </section>
);

export default AboutMe;
