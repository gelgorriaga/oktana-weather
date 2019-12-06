import React, { Component } from "react";
import { connect } from "react-redux";
import {addFavourite, removeFavourite} from '../actions';

export class FavouriteList extends Component {
    renderList(){
        return this.props.favourites.map((favourite)=>{
            return(
                <div key={favourite}>
        
                    <div className="FavList">{favourite}<button onClick={() => this.props.removeFavourite(favourite)}>Remove</button></div>
                </div>
            );
        });
    }
  render() {
    return (
    <div>
        {
            (this.props.favourites.length === 0) 
            ? 
            <h1>There are no cities on the favourite list, please add some!</h1> 
            : 
            this.renderList()
            }
        
    </div>
    );}
}

const mapStateToProps = state => {
  return { favourites: state.favourites };
};

export default connect(mapStateToProps, { addFavourite, removeFavourite })(FavouriteList);
