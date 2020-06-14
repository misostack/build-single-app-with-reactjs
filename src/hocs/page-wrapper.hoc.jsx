import React, { Component } from "react";

const withPageWrapper = (WrappedComponent, title) => {
  return class extends Component {
    constructor(props) {
      super(props);
    }

    componentDidMount = () => {
      document.title = process.env.REACT_APP_WEBSITE_NAME + " - " + title;
    };
    render = () => {
      return <WrappedComponent />;
    };
  };
};

export default withPageWrapper;
