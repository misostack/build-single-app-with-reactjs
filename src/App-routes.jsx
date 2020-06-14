import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  HomeContainer,
  ExampleContainer,
  PageNotFoundContainer,
} from "./containers";
const routes = (
  <Switch>
    <Route exact path="/">
      <HomeContainer />
    </Route>

    <Route path="/examples">
      <ExampleContainer />
    </Route>

    <Route>
      <PageNotFoundContainer />
    </Route>
  </Switch>
);
export default routes;
