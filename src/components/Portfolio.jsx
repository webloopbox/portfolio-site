import React from "react";
import UnderLine from "./UnderLineEffect";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

class Portfolio extends React.Component {
  render() {
    const details = [
      {
        name: "serwis komputerowy",
        src: "./assets/serwis.png",
      },
      {
        name: "CREATIX",
        src: "./assets/firma_stolarska.png",
      },
    ];

    return (
      <section id="portfolio" className="section-portfolio">
        <div>
          <h2 className="section-title">
            <Fade left delay={0}>
              PORTFOLIO
            </Fade>
            <UnderLine />
          </h2>
        </div>
        <div className="portfolio-items">
          {details.map((item, index) => (
            <Zoom delay={300 * index} key={index}>
              <div className="portfolio-item">
                <img src={item.src} alt="" />
              </div>
            </Zoom>
          ))}
        </div>
      </section>
    );
  }
}

export default Portfolio;
