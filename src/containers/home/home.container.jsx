import React, { Component } from "react";
import { withPageWrapper } from "../../hocs";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <h1>Home</h1>;
  }
}

export default withPageWrapper(HomeContainer, "Home");
