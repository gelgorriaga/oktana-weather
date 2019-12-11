import React, { Component } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../actions";

export class Home extends Component {
  renderButtons = (city, country, isFavorite, removeFavorite, addFavorite) => {
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
  };

  renderForm = (isDataEmpty, shouldShowDisplayData, bringData, isFavorite) => {
    if (isDataEmpty && shouldShowDisplayData) {
      return;
    } else if (!shouldShowDisplayData) {
      return <h1>Please try with another city</h1>;
    } else {
      return (
        <>
          <DisplayData />

          {this.renderButtons(
            bringData.city,
            bringData.country,
            isFavorite,
            this.props.removeFavorite,
            this.props.addFavorite
          )}
        </>
      );
    }
  };

  render() {
 
    const { bringData, favorites } = this.props;
    const { toBeAdded } = bringData;
    const shouldShowDisplayData = bringData !== "ERROR";
    const isDataEmpty = Object.keys(bringData).length === 0;
    let isFavorite = favorites.includes(toBeAdded);

    return (
      <div className="flexDiv">
        <div className="form-container">
          <Form />
          {this.renderForm(
            isDataEmpty,
            shouldShowDisplayData,
            bringData,
            isFavorite
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { bringData: state.fetchData, favorites: state.favorites };
};

export default connect(mapStateToProps, { addFavorite, removeFavorite })(Home);
