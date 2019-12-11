import React, { Component } from "react";
import { connect } from "react-redux";

export class DisplayData extends Component {
  render() {
    const { bringData } = this.props;
    const { city, country, sunrise, sunset } = bringData;
    const isDataEmpty = Object.keys(bringData).length === 0;

    if (isDataEmpty) return null;

    return (
      <div className="flexDiv">
        <div className="DisplayData__info">
          <p className="DisplayData__key">
            City: <span className="value">{city}</span>
          </p>
          <p className="DisplayData__key">
            Country: <span className="value">{country}</span>
          </p>
          <p className="DisplayData__key">
            Sunrise:{" "}
            <span className="value">{Date(sunrise)}</span>
          </p>
          <p className="DisplayData__key">
            Sunset: <span className="value">{Date(sunset)}</span>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { bringData: state.fetchData };
};

export default connect(mapStateToProps)(DisplayData);
