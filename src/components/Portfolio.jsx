import React from "react";
import UnderLine from "./UnderLineEffect";
import Fade from "react-reveal/Fade";

class Portfolio extends React.Component {
  componentDidMount() {
    const portfolio_items = document.getElementsByClassName("portfolio-item");

    if (portfolio_items.length % 2 == 1) {
      portfolio_items[portfolio_items.length - 1].style.margin =
        "50px auto 0 auto";
    }
  }

  render() {
    const details = [
      {
        name: "Landing Page",
        src: "./assets/portfolio-website1-thumbnail.jpg",
        tech: "HTML / CSS / JS / WORDPRESS (Custom theme)",
        link: "https://strona1.pawelmarek.com",
      },
      {
        name: "Landing Page",
        src: "./assets/portfolio-website2-thumbnail.jpg",
        tech: "HTML / CSS / JS / WORDPRESS (Custom theme)",
        link: "https://strona2.pawelmarek.com",
      },
      {
        name: "Weather App",
        src: "./assets/weather-app-thumbnail.png",
        tech: "REACT.JS",
        link: "https://weather.pawelmarek.com",
      },
      {
        name: "Netflix Clone",
        src: "./assets/netflix-clone-thumbnail.png",
        tech: "REACT.JS",
        link: "https://github.com/webloopbox/netflix-clone",
      },
      {
        name: "Route Mapping App",
        src: "./assets/maps-app-thumbnail.png",
        tech: "REACT.JS",
        link: "https://magnificent-trifle-4db8fa.netlify.app",
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
                        {item.name}
                        <br />
                        {item.tech}
                        <button className="check">Sprawdź</button>
                      </div>
                    </div>
                  </a>
                </div>
              </Fade>
            ))}
            <Fade up delay={300 * details.length}>
              <a
                target="_blank"
                href="https://github.com/webloopbox/WeatherApp"
                className="portfolio-item portfolio-item-last"
              >
                Check for more on my github
              </a>
            </Fade>
          </div>
        </div>
        <img id="gray-wave" src="assets/gray_wave.svg" />
      </section>
    );
  }
}

export default Portfolio;
