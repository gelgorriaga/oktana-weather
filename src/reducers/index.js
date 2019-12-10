
import { combineReducers } from "redux";
import { FETCH_WEATHER } from "../actions";

const favoriteReducer = (favorites = [], action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [...favorites, action.payload];
    case "REMOVE_FAVORITE":
      return favorites.filter(fav => fav !== action.payload);
    default:
      return favorites;
  }
};

const fetchDataReducer = (state = {}, action) =>{
  switch (action.type){
    case FETCH_WEATHER:
      return action.payload;
      default: 
      return state;
  }
};

export default combineReducers({
  fetchData: fetchDataReducer,
  favorites: favoriteReducer
});

