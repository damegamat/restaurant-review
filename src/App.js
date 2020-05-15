import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GlobalStyles from "./index.css";

import theme from "utils/theme";
import { Navigation } from "components";
import { Home, Details, Register } from "./page";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navigation item={[{ component: "Home", path: "/" }]} />
        <Switch>
          <Route>
            <Home exact path="/" />
          </Route>
          <Route>
            <Details path="/details/:id" />
          </Route>
          <Route>
            <Register path="/register" />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
