import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from "./components/About/index"


ReactDOM.render(
(  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/about" component={About}/>
        <Route/>
      </Switch>
    </App>
  </Router>),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
