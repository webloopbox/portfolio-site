import React from "react";
import UnderLine from "./UnderLineEffect";
import Fade from "react-reveal/Fade";

class Portfolio extends React.Component {

  componentDidMount() {
    const portfolio_items = document.getElementsByClassName("portfolio-item");

    if(portfolio_items.length % 2 == 1) {
      portfolio_items[portfolio_items.length-1].style.margin = "50px auto 0 auto"
    }

  }

  render() {
    const details = [
      {
        name: "serwis komputerowy",
        src: "./assets/strona1.jpg",
        tech: "HTML / CSS / JS / WORDPRESS",
        link: "https://strona1.pawelmarek.com",
      },
      {
        name: "CREATIX",
        src: "./assets/strona2.jpg",
        tech: "HTML / CSS / JS / WORDPRESS",
        link: "https://strona2.pawelmarek.com",
      },
      {
        name: "CREATIX",
        src: "./assets/weatherapp.jpg",
        tech: "REACT.JS",
        link: "https://weather.pawelmarek.com",
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
                  <a
                    className="portfolio-item-link"
                    href={item.link}
                    target="_blank"
                  >
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
