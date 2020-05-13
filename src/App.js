import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./index.css";

import theme from "utils/theme";
import { Navigation } from "components";
import { Home } from "./page";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <Navigation />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
