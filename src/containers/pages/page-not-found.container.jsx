import React, { Component } from "react";
import { withPageWrapper } from "../../hocs";

class PageNotFoundContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <h1>Page Not Found</h1>;
  }
}

export default withPageWrapper(
  PageNotFoundContainer,
  "404 Error - Page not found"
);
