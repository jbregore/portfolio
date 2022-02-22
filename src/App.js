import React from "react";
import "./App.css";

import { Provider } from "react-redux";

import store from "./redux/store";

import Home from "./pages/Home";



function App() {
  

  return (
    <Provider store={store}>
      {/* <ThemeProvider theme={THEME}> */}
        <Home />
      {/* </ThemeProvider> */}
    </Provider>
  );
}

export default App;