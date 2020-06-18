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
          Strony przeze mnie tworzone wyróżniają się wysoką jakością i są dobrze
          zoptymalizowane pod kątem SEO.
        </p>
      </Fade>
      <Fade left delay={550}>
        <p>
          Doskonale działają na wszystkich urządzeniach, dopasowywując się do
          każdej rozdzielczości. Dbam o każdy szczegół i kończę zlecenia w
          wyznaczonym terminie. Dużą wagę przywiązuję na jakość i otymalizację
          kodu, tak aby strona wczytywała się szybko, bez spadków wydajności.
        </p>
      </Fade>
      <Fade left delay={600}>
        <p>
          Obecnie wykonuję zlecenia na landing page, strony wizytówkowe oraz
          portofolia. Do każdej strony podpinam wygodny i prosty w obsłudze
          system zarządzania treścią na stronie. Również ulepszam istniejące
          strony o nowe funkcje i możliwości.
        </p>
      </Fade>
    </div>
    <Fade right delay={500}>
      <div className="about-image">
        <svg id="avatar" fill="none" viewBox="0 0 247 260">
          <path
            fill="#F6F6F6"
            d="M6.178 107.74C-12.14 75.685 11.582 31.941 60.083 9.441 100.583-9.347 163.428 29.492 198 76c34.753 46.752 76.5 100 23 151-37.115 35.38-114.744 22.151-124.5-18-13-53.5-62.322-52.26-90.322-101.26z"
          ></path>
          <path
            fill="url(#pattern0)"
            d="M48.606 69C64 28 69 .745 128.707.745c61.837 0 92.231 25.462 110.5 86.5C253.5 135 222 180 199 195.5 169.063 215.675 98.86 269.059 41.606 175c-14-23-6.552-69.908 7-106z"
          ></path>
          <defs>
            <pattern
              id="pattern0"
              width="1"
              height="1"
              patternContentUnits="objectBoundingBox"
            >
              <use
                transform="translate(-.472) scale(.00101)"
                xlinkHref="#image0"
              ></use>
            </pattern>
            <image
              id="image0"
              width="1920"
              height="1080"
              href="./assets/avatar.jpg"
            ></image>
          </defs>
        </svg>
      </div>
    </Fade>
  </section>
);

export default AboutMe;
