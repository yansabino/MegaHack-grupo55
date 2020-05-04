import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./Container/Main/index";
import About from "./Container/About/index";

const Routes = (props) => {
  return (
    <BrowserRouter history={props.history}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
