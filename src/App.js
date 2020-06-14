import React from "react";
import "./styles/App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Technologies from "./components/Technologies";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Hero />
        <AboutMe />
        <Technologies />
        <Portfolio />
      </>
    );
  }
}

export default App;
