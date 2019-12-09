import React, { Component } from "react";
import { connect } from "react-redux";
import {addFavorite, removeFavorite} from '../actions';

export class FavoriteList extends Component {
    renderList(){
        return this.props.favorites.map((favorite)=>{
            return(
                <div key={favorite}>
        
                    <div className="FavList">{favorite}<button onClick={() => this.props.removeFavorite(favorite)}>Remove</button></div>
                </div>
            );
        });
    }
  render() {
    return (
    <div>
        {
            (this.props.favorites.length === 0) 
            ? 
            <h1>There are no cities on the favorite list, please add some!</h1> 
            : 
            this.renderList()
            }
        
    </div>
    );}
}

const mapStateToProps = state => {
  return { favorites: state.favorites };
};

export default connect(mapStateToProps, { addFavorite, removeFavorite })(FavoriteList);
