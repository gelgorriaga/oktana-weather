import React, { Component } from 'react';
import Form from "./Form";
import DisplayData from "./DisplayData";

import { connect } from "react-redux";
import { addFavourite, removeFavourite } from "../actions";

export class Home extends Component{
  
 
  renderButtons(city, isFavourite, removeFavourite, addFavourite){
      if(city){
        if(isFavourite){
          return <button onClick={() => removeFavourite(city)}>Remove</button>;
        }else{
          return <button onClick={() => addFavourite(city)}>Add</button>;
        }
      }
  }
  render(){
    
    const {sunrise, city, country, sunset, ok, getData, favourites, removeFavourite, addFavourite} = this.props;
    let isFavourite = favourites.includes(city);
   
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

          {this.renderButtons(city, isFavourite, removeFavourite,addFavourite)}
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
