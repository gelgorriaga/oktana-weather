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
    let displayData = () => {
      switch (this.state.typeOfChart) {
        case "temperatureF":
          return tempFahrenheit;
        case "temperatureC":
          return tempCelsius;
        case "pressure":
          return pressure;
        case "humidity":
          return humidity;
        default:
          return;
      }
    };

    const { bringData } = this.props;
    const { date, humidity, tempCelsius, tempFahrenheit, pressure } = bringData;
    let requestError = this.props.bringData === "ERROR";
    let isDataEmpty = Object.keys(bringData).length === 0;

    const data = {
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
    };

    const options = {
      maintainAspectRatio: false,
      animation: {
        duration: 3000
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
              fontColor: "white"
            }
          }
        ],
        xAxes: [
          {
            ticks: {
              fontColor: "white",
              fontSize: 10
            }
          }
        ]
      }
    };

    if (isDataEmpty || requestError) {
      return <h1>Please select a city first!</h1>;
    }
    return (
      <>
        <ChartForm getChart={this.getChart} />
        <div className="Chart">
          <Line data={data} options={options} />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return { bringData: state.fetchData };
};

export default connect(mapStateToProps)(Chart);
