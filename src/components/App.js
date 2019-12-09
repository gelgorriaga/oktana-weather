import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Chart from "./chart/Chart";
import NavBar from "./NavBar";
import Home from "./Home";
import ChartForm from "./chart/ChartForm";
import FavoriteList from './FavoriteList';

class App extends Component {
  state = {
    typeOfChart: "temperatureF",
  };

  getChart = e => {
    e.preventDefault();
    const typeOfChart = e.target.value;
    this.setState({ typeOfChart: typeOfChart });
  };

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
              render={() => (
                <div>
                  <ChartForm getChart={this.getChart} />
                  <Chart

                    typeOfChart={this.state.typeOfChart}
                  />
                </div>
              )}
            />
            <Route path="/favorites" exact component={FavoriteList} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
