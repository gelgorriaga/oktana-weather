import React, { Component } from 'react';
import Form from "./Form";
import DisplayData from "./DisplayData";

import { connect } from "react-redux";
import { addFavourite, removeFavourite } from "../actions";

export class Home extends Component{
  
 
  renderButtons(city, country, isFavourite, removeFavourite, addFavourite){
      if(city && country){
        let toBeAdded = `${city}, ${country}`;
        if(isFavourite){
          return <button onClick={() => removeFavourite(toBeAdded)}>Remove</button>;
        }else{
          return <button onClick={() => addFavourite(toBeAdded)}>Add</button>;
        }
      }
  }
  render(){
    
    const {sunrise, city, country, sunset, ok, getData, favourites, removeFavourite, addFavourite} = this.props;
    let toBeAdded = `${city}, ${country}`;
    let isFavourite = favourites.includes(toBeAdded);
   
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

          {this.renderButtons(city, country, isFavourite, removeFavourite, addFavourite)}
        </div>
      </div>
    </div>
  );
};
}

const mapStateToProps = state => {
  return { favourites: state.favourites };
};

export default connect(mapStateToProps, { addFavourite, removeFavourite })(
  Home
);
