import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./Container/Main/index";
import About from "./Container/About/index";
import WhereToBegin from "./Container/WhereToBegin/index"
import Contact from "./Container/Contact/index"

const Routes = (props) => {
  return (
    <BrowserRouter history={props.history}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/wheretobegin" component={WhereToBegin} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
