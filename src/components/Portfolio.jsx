import React from "react";
import UnderLine from "./UnderLineEffect";
import Fade from "react-reveal/Fade";

class Portfolio extends React.Component {
  render() {
    const details = [
      {
        name: "serwis komputerowy",
        src: "./assets/serwis.jpg",
        tech: "HTML / CSS / JS / WORDPRESS",
      },
      {
        name: "CREATIX",
        src: "./assets/firma_stolarska.jpg",
        tech: "HTML / CSS / JS / WORDPRESS",
      },
    ];

    return (
      <section id="portfolio-100w">
        <div id="portfolio" className="section-portfolio">
          <div>
            <h2 className="section-title">
              <Fade left delay={0}>
                PORTFOLIO
              </Fade>
            </h2>
            <UnderLine />
          </div>
          <div className="portfolio-items">
            {details.map((item, index) => (
              <Fade up delay={300 * index} key={index}>
                <div className="portfolio-item">
                  <a className="portfolio-item-link" href="#">
                    <img src={item.src} alt="portfolio-thumbnail" />
                    <div className="thumbnail-overlay">
                      <div className="overlay-content">
                        {item.tech}
                        <button className="check">Sprawdź</button>
                      </div>
                    </div>
                  </a>
                </div>
              </Fade>
            ))}
          </div>
        </div>
        <img id="gray-wave" src="assets/gray_wave.svg" />
      </section>
    );
  }
}

export default Portfolio;
