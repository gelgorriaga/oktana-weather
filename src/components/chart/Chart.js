import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";
import ChartForm from "./ChartForm";

class Chart extends Component {
  state = {
    typeOfChart: "temperatureF"
  };

  getChart = e => {
    e.preventDefault();
    const typeOfChart = e.target.value;
    this.setState({ typeOfChart: typeOfChart });
  };
  render() {
    let date, hum, temp, tempCelsius, tempFahrenheit, pressure;

    const { bringData } = this.props;
    let isDataEmpty = Object.keys(bringData).length === 0;
    if (!isDataEmpty) {
      date = bringData.list.map(d => d.dt_txt);
      hum = bringData.list.map(h => h.main.humidity);
      temp = bringData.list.map(t => t.main.temp);
      tempCelsius = temp.map(t => Math.floor(t - 273.15));
      tempFahrenheit = temp.map(t => Math.floor((t - 273.15) * (9 / 5) + 32));
      pressure = bringData.list.map(t => t.main.pressure);
    }

    let displayData = () => {
      switch (this.state.typeOfChart) {
        case "temperatureF":
          return tempFahrenheit;
        case "temperatureC":
          return tempCelsius;
        case "pressure":
          return pressure;
        case "humidity":
          return hum;
        default:
          return;
      }
    };
    if (isDataEmpty) {
      return <h1>Please select a city first!</h1>;
    }
    return (
      <>
        <ChartForm getChart={this.getChart} />
        <div className="Chart">
          <Line
            data={{
              labels: date,
              datasets: [
                {
                  label: this.state.typeOfChart,
                  fill: true,
                  data: displayData(),
                  backgroundColor: "#5F6368",
                  pointBackgroundColor: "#fff",
                  pointBorderColor: "red",
                  borderColor: "rgba(0,0,0,0.3)"
                }
              ]
            }}
            options={{
              maintainAspectRatio: false,
              animation: {
                duration: 3000 // general animation time
              },
              title: {
                display: false,
                text: `${this.state.typeOfChart} Chart`,
                fontSize: 50,
                fontColor: "white"
              },
              legend: {
                display: false,
                position: "top",
                labels: {
                  fontColor: "white"
                }
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      //beginAtZero: true

                      fontColor: "white"
                    }
                  }
                ],
                xAxes: [
                  {
                    ticks: {
                      //beginAtZero: true

                      fontColor: "white",
                      fontSize: 10
                    }
                  }
                ]
              }
            }}
          />
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return { bringData: state.fetchData };
};

export default connect(mapStateToProps)(Chart);
