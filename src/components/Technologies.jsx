import React from "react";
import UnderLine from "./UnderLineEffect";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

class Technologies extends React.Component {
  render() {
    const tech = [
      {
        name: "HTML5",
        src: "./assets/html.svg",
      },
      {
        name: "CSS3",
        src: "./assets/css3.svg",
      },
      {
        name: "JAVASCRIPT",
        src: "./assets/js.svg",
      },
      {
        name: "RWD",
        src: "./assets/rwd.svg",
      },
      {
        name: "GIT",
        src: "./assets/git.svg",
      },
      {
        name: "NPM",
        src: "./assets/npm.svg",
      },
      {
        name: "WORDPRESS",
        src: "./assets/wp.svg",
      },
      {
        name: "SASS",
        src: "./assets/sass.svg",
      },
    ];
    const tools = [
      {
        name: "ADOBE PHOTOSHOP",
        src: "./assets/ps.svg",
      },
      {
        name: "FIGMA",
        src: "./assets/figma.svg",
      },
    ];

    return (
      <section id="technologies" className="section-technologies">
        <div>
          <h2 className="section-title">
            <Fade left delay={0}>
              TECHNOLOGIE
            </Fade>
          </h2>
          <UnderLine />
        </div>
        <div id="tech-list">
          {tech.map((item, index) => (
            <Fade right key={index} delay={80 * index}>
              <div className="tech-item">
                <div className="tech-item-icon">
                  <img src={item.src} alt="" />
                </div>
                <div className="tech-item-name">{item.name}</div>
              </div>
            </Fade>
          ))}
        </div>
        <hr />
        <Zoom>
          <h4 className="more-tools-title">Dodatkowe narzędzia</h4>
        </Zoom>
        <div className="more-tools">
          {tools.map((item, index) => (
            <Fade key={index} delay={100 * index}>
              <div className="tool-item">
                <div className="tech-item-icon">
                  <img src={item.src} alt="" />
                </div>
                <div className="tech-item-name">{item.name}</div>
              </div>
            </Fade>
          ))}
        </div>
      </section>
    );
  }
}

export default Technologies;
