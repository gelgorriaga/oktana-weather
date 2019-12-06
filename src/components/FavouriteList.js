import React, { Component } from "react";
import { connect } from "react-redux";
import {addFavourite, removeFavourite} from '../actions';

export class FavouriteList extends Component {
    renderList(){
        return this.props.favourites.map((favourite)=>{
            return(
                <div key={favourite}>
        
                    <div className="FavList">{favourite}</div>
                </div>
            );
        });
    }
  render() {
    return (
    <div>
        {this.renderList()}
    </div>
    );}
}

const mapStateToProps = state => {
  return { favourites: state.favourites };
};

export default connect(mapStateToProps, { addFavourite, removeFavourite })(FavouriteList);
