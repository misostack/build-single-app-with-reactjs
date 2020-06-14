import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import {
  HomeContainer,
  ExampleContainer,
  PageNotFoundContainer,
  ModalBaseContainer,
} from "./containers";

const BoxExample = () => {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img
              src="https://bulma.io/images/placeholders/128x128.png"
              alt="Image"
            />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>John Smith</strong> <small>@johnsmith</small>{" "}
              <small>31m</small>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              efficitur sit amet massa fringilla egestas. Nullam condimentum
              luctus turpis.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

const AppRoutes = () => {
  const location = useLocation();
  console.log("LOCATION", location);
  let background = location.state && location.state.background;

  return (
    <>
      <Switch location={background || location}>
        <Route exact path="/">
          <HomeContainer />
        </Route>

        <Route path="/examples">
          <ExampleContainer />
        </Route>

        <Route path="/examples">
          <ExampleContainer />
        </Route>

        <Route>
          <PageNotFoundContainer />
        </Route>
      </Switch>
      {background && (
        <Route
          path="/modal/:name"
          children={
            <ModalBaseContainer>
              <BoxExample></BoxExample>
            </ModalBaseContainer>
          }
        />
      )}
    </>
  );
};
export default AppRoutes;
