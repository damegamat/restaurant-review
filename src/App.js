import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./index.css";

import theme from "utils/theme";
import { Navigation } from "components";
import { Home, Details, Register } from "./page";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navigation items={[{ component: "Home", path: "/" }]} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
