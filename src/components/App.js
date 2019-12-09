import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Chart from "./chart/Chart";
import NavBar from "./NavBar";
import Home from "./Home";
import ChartForm from "./chart/ChartForm";
import FavoriteList from './FavoriteList';
const appid = "f4a064fab6279ff8911f853cad2d6eba";

class App extends Component {
  state = {
    fetchedData: undefined,
    typeOfChart: "temperatureF",
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    ok: true,
    cod: undefined
  };

  componentDidMount() {
    if (this.state.city) {
      this.getData();
    }
  }

  getData = async e => {
    try {
      e.preventDefault();
      const city = e.target.elements.city.value;
      if (city) {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${appid}`
        );
        const fetchedData = await res.json();
        this.setState({
          fetchedData: fetchedData,
          city: fetchedData.city.name,
          country: fetchedData.city.country,
          sunrise: fetchedData.city.sunrise,
          sunset: fetchedData.city.sunset,
          ok: true,
          cod: fetchedData.cod
        });
      } else {
        this.setState({ ok: false });
      }
    } catch (e) {
      this.setState({ ok: false });
      console.log(`City not found`);
    }
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
              render={() => (
                <Home
                  city={this.state.city}
                  country={this.state.country}
                  sunrise={this.state.sunrise}
                  sunset={this.state.sunset}
                  ok={this.state.ok}
                  getData={this.getData}
                />
              )}
            />
            <Route
              path="/chart"
              exact
              render={() => (
                <div>
                  <ChartForm ChartForm getChart={this.getChart} />
                  <Chart
                    fetchedData={this.state.fetchedData}
                    typeOfChart={this.state.typeOfChart}
                    city={this.state.city}
                  />
                </div>
              )}
            />
            <Route path="/favs" exact component={FavoriteList} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
