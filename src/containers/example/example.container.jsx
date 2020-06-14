import React, { Component } from "react";
import { withPageWrapper } from "../../hocs";

class ExampleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <h1>Example Container</h1>;
  }
}

export default withPageWrapper(ExampleContainer, "Examples");
