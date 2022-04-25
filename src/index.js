import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Sort from "./Sort";

const App = () => {
  return (
    <Router>
      <div>
        <Link to="/sort">Sort</Link>
        <Switch>
          <Route path="/sort">
            <Sort />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

render(<App />, document.getElementById("app"));
