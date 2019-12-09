import React, { Component } from 'react';
import Form from "./Form";
import DisplayData from "./DisplayData";

import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../actions";

export class Home extends Component{
  
 
  renderButtons(city, country, isFavorite, removeFavorite, addFavorite){
      if(city && country){
        let toBeAdded = `${city}, ${country}`;
        if(isFavorite){
          return <button onClick={() => removeFavorite(toBeAdded)}>Remove</button>;
        }else{
          return <button onClick={() => addFavorite(toBeAdded)}>Add</button>;
        }
      }
  }
  render(){
    
    const {sunrise, city, country, sunset, ok, getData, favorites, removeFavorite, addFavorite} = this.props;
    let toBeAdded = `${city}, ${country}`;
    let isFavorite = favorites.includes(toBeAdded);
   
  return (
    <div>
      <div className="flexDiv">
        <div className="form-container">
          <Form getData={getData} />
          <DisplayData
            sunrise={sunrise}
            city={city}
            country={country}
            sunset={sunset}
            ok={ok}
          />

          {this.renderButtons(city, country, isFavorite, removeFavorite, addFavorite)}
        </div>
      </div>
    </div>
  );
};
}

const mapStateToProps = state => {
  return { favorites: state.favorites };
};

export default connect(mapStateToProps, { addFavorite, removeFavorite })(
  Home
);
