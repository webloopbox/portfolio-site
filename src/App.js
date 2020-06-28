import React from "react";
import "./styles/App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Hero />
        <AboutMe />
        <Technologies />
        <Portfolio />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default App;
