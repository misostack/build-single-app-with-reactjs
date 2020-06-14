import React, { Component } from "react";
import { withPageWrapper } from "../../hocs";
import { Link, useLocation } from "react-router-dom";

const Links = () => {
  let location = useLocation();
  return (
    <Link
      to={{
        pathname: `/modal/1`,
        state: { background: location },
      }}
      title="abc"
    >
      OUTLET MODAS
    </Link>
  );
};

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <h1>Home</h1>
        <Links />
      </>
    );
  }
}

export default withPageWrapper(HomeContainer, "Home");
