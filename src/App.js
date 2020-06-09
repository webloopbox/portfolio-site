import React from "react";
import "./styles/App.scss";
import Navbar from "./components/Nav/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Hero />
        <AboutMe />
      </>
    );
  }
}

export default App;
