import React from "react";

const ChartForm = props => (
  <div className="ChartForm">
    <form onChange={props.getChart}>

      <select name="chartType">
        <option value="temperatureF">Temperature (F)</option>
        <option value="temperatureC">Temperature (C)</option>
        <option value="humidity">Humidity</option>
        <option value="pressure">Pressure</option>
      </select>
     
    </form>
  </div>
);

export default ChartForm;