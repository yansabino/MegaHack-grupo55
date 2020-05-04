import React from "react";
import Routes from "./routes";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

function App() {
  return (
    <div>
      <Routes history={history} />
    </div>
  );
}

export default App;
