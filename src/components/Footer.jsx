import React from "react";
import UnderLine from "./UnderLineEffect";
import Fade from "react-reveal/Fade";

class Footer extends React.Component {
  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <footer id="footer">
        <Fade>
          <p>
            2020 © Wszelkie prawa zastrzeżone<span> - Paweł Marek</span>
          </p>
        </Fade>
        <UnderLine />
        <Fade>
          <button
            className="scroll-to-top"
            onClick={() => {
              this.scrollTop();
            }}
          >
            <i className="fas fa-chevron-up"></i>
          </button>
        </Fade>
      </footer>
    );
  }
}

export default Footer;
