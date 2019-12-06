import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class Chart extends Component {
  render() {
    let date, hum, temp, tempCelcius, tempFarenheit, pressure;
    if (this.props.city) {
      date = this.props.fetchedData.list.map(d => d.dt_txt);
      hum = this.props.fetchedData.list.map(h => h.main.humidity);
      temp = this.props.fetchedData.list.map(t => t.main.temp);
      //temp = temp.slice(Math.floor(temp.length/2), temp.length );
      //date = date.slice(Math.floor(date.length/2), date.length );
      tempCelcius = temp.map(t => Math.floor(t - 273.15));
      tempFarenheit = temp.map(t => Math.floor((t - 273.15) * (9 / 5) + 32));
      pressure = this.props.fetchedData.list.map(t => t.main.pressure);
    }

    let displayData = () => {
      switch (this.props.typeOfChart) {
        case "temperatureF":
          return tempFarenheit;
        case "temperatureC":
          return tempCelcius;
        case "pressure":
          return pressure;
        case "humidity":
          return hum;
        default:
          return;
      }
    };
    if(!this.props.city) return <h1>Please select a city</h1>
    return (
      <div className="Chart">
       
          <Line
            data={{
              labels: date,
              datasets: [
                {
                  label: this.props.typeOfChart,
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
                text: `${this.props.typeOfChart} Chart`,
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
    );
  }
}

export default Chart;
