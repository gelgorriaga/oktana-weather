import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Chart from "./chart/Chart";
import NavBar from "./NavBar";
import Home from "./Home";
import FavoriteList from './FavoriteList';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route
              path="/"
              exact
              component={ Home }
            />
            <Route
              path="/chart"
              exact
              component={ Chart }
            />
            <Route path="/favorites" exact component={FavoriteList} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
