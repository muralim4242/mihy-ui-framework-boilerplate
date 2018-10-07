import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import themeObject from "./ui-config/themes";
import { Provider } from "react-redux";
import store from "./ui-redux/store";
import "./index.css";
import App from "./ui-views/App";
import registerServiceWorker from "./registerServiceWorker";

const theme = createMuiTheme(themeObject);

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
