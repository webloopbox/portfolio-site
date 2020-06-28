import React from "react";
import styled from "styled-components";
import Burger from "@animated-burgers/burger-squeeze";
import "@animated-burgers/burger-squeeze/dist/styles.css";
import Scrollspy from "react-scrollspy";
import debounce from "lodash.debounce";

const ScrollLinks = styled.div`
  position: fixed;
  transition: visibility 0.3s, opacity 0.3s, transform 0.3s;
  visibility: ${({ open }) => {
    return open ? "visible" : "hidden";
  }};
  opacity: ${({ open }) => {
    return open ? "1" : "0";
  }};
  transform: ${({ open }) => {
    return open ? "translateX(0)" : "translateX(100%)";
  }};
  background-color: white;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 50;

  li {
    margin: 25px 0;
  }

  @media (min-width: 1024px) {
    position: relative;
    top: auto;
    right: auto;
    transition: none;
    background-color: transparent;
    visibility: visible;
    opacity: 1;
    transform: translateX(0);
    width: auto;
    flex: 1;
    height: auto;

    li {
      margin: 0 15px;
    }

    &[data-cls~="active"]::before {
      height: 100%;
    }
  }
`;

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      navTab: false,
      isMobile: null,
    };
    this.debNavTab = debounce(this.activeNavTab, 10);
    this.debResizeListener = debounce(this.onResize, 10);
  }

  componentDidMount() {
    if (window.innerWidth < 1024) {
      this.setState({
        isMobile: true,
      });
    }

    window.addEventListener("resize", this.debResizeListener, {
      passive: true,
    });

    window.addEventListener("scroll", this.debNavTab, {
      passive: true,
    });
  }

  activeNavTab = () => {
    if (window.scrollY > 0) {
      this.setState(() => ({ navTab: true }));
    } else {
      this.setState(() => ({ navTab: false }));
    }
  };

  onResize = () => {
    const navitems = document.querySelector("#nav-container > div");

    if (window.innerWidth >= 1024) {
      navitems.style.transition = "none";
      document.body.classList.remove("disablescroll");
      this.setState({
        isMobile: false,
        open: false,
      });
    } else {
      navitems.style.transition =
        "visibility 0.3s, opacity 0.3s, transform 0.3s";
      this.setState({
        isMobile: true,
      });
    }
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.debNavTab);
    window.removeEventListener("resize", this.debResizeListener);
  }

  toggleMenu() {
    document.documentElement.classList.toggle("disablescroll");
    this.setState((prevState) => ({ open: !prevState.open }));
  }

  render() {
    const items = [
      {
        name: "Home",
        section: "#hero-container",
      },
      {
        name: "O Mnie",
        section: "#about",
      },
      {
        name: "Technologie",
        section: "#technologies",
      },
      {
        name: "Portfolio",
        section: "#portfolio",
      },
      {
        name: "Kontakt",
        section: "#contact",
      },
    ];

    return (
      <nav id="navbar" className={this.state.navTab ? "navtab" : "no"}>
        <div id="nav-container">
          <a id="nav-logo" href="#">
            PAWEŁ MAREK
          </a>

          <ScrollLinks open={this.state.open}>
            <Scrollspy
              items={[
                "hero-container",
                "about",
                "technologies",
                "portfolio",
                "contact",
              ]}
              currentClassName="current"
              className="nav-items"
            >
              {items.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      onClick={
                        this.state.isMobile
                          ? () => {
                              this.toggleMenu();
                            }
                          : null
                      }
                      data-hover={item.name}
                      href={item.section}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </Scrollspy>
          </ScrollLinks>

          <Burger
            isOpen={this.state.open}
            onClick={() => {
              this.toggleMenu();
            }}
            Component="button"
            type="button"
          />
        </div>
      </nav>
    );
  }
}

export default NavBar;
