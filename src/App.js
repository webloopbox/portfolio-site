import React from "react";
import "./styles/App.scss";
import Navbar from "./components/Nav/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0,
    };
    this.changeActive = this.changeActive.bind(this);
  }

  changeActive(index) {
    this.setState((prevState) => ({ activeItem: index }));
  }

  render() {
    return (
      <>
        <Navbar
          info={{
            active: this.state.activeItem,
            change: this.changeActive,
            navTab: this.state.navTab,
          }}
        />
        <Hero />
        <AboutMe />
      </>
    );
  }
}

export default App;
