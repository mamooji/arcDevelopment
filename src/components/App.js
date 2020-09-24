import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import Header from "./ui/Header";
import theme from "./ui/Theme";
import Footer from "./ui/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <div style={{ height: "2000px" }}>home</div>}
          />
          <Route exact path="/services" component={() => <div>services</div>} />
          <Route
            exact
            path="/software"
            component={() => <div>custom software</div>}
          />
          <Route exact path="/mobile" component={() => <div>mobileapps</div>} />
          <Route exact path="/websites" component={() => <div>websites</div>} />
          <Route
            exact
            path="/revolution"
            component={() => <div>revolution</div>}
          />
          <Route exact path="/about" component={() => <div>about</div>} />
          <Route exact path="/contact" component={() => <div>contact</div>} />
          <Route exact path="/estimate" component={() => <div>estimate</div>} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
