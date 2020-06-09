import React from "react";
import NavItems from "./NavItems";
import Burger from "@animated-burgers/burger-squeeze";
import "@animated-burgers/burger-squeeze/dist/styles.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <nav id="navbar">
        <div id="nav-container">
          <a id="nav-logo" href="#">
            pm
          </a>
          <NavItems open={this.state.open} />
          <Burger
            isOpen={this.state.open}
            onClick={() => {
              this.setState((prevState) => ({ open: !prevState.open }));
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
