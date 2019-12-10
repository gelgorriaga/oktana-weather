import React, { Component } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../actions";

export class Home extends Component {
  renderButtons(city, country, isFavorite, removeFavorite, addFavorite) {
    if (city && country) {
      let toBeAdded = `${city}, ${country}`;
      if (isFavorite) {
        return (
          <button onClick={() => removeFavorite(toBeAdded)}>Remove</button>
        );
      } else {
        return <button onClick={() => addFavorite(toBeAdded)}>Add</button>;
      }
    }
  }
  render() {
    const { bringData, favorites, removeFavorite, addFavorite } = this.props;
    const isDataEmpty = Object.keys(bringData).length === 0;
    let cityName, countryName;

    const shouldShowDisplayData = bringData !== "ERROR";

    if (isDataEmpty && shouldShowDisplayData) {
      return (
        <div className="flexDiv">
          <div className="form-container">
            <Form />
          </div>
        </div>
      );
    } else if (bringData === "ERROR") {
      return (
        <div className="flexDiv">
          <div className="form-container">
            <Form />
            <h1>Please try with another city</h1>
          </div>
        </div>
      );
    }

    cityName = bringData.city.name;
    countryName = bringData.city.country;

    let toBeAdded = `${cityName}, ${countryName}`;
    let isFavorite = favorites.includes(toBeAdded);
    return (
      <div>
        <div className="flexDiv">
          <div className="form-container">
            <Form />

            {shouldShowDisplayData && (
              <>
                <DisplayData />

                {this.renderButtons(
                  bringData.city.name,
                  bringData.city.country,
                  isFavorite,
                  removeFavorite,
                  addFavorite
                )}
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { bringData: state.fetchData, favorites: state.favorites };
};

export default connect(mapStateToProps, { addFavorite, removeFavorite })(Home);
