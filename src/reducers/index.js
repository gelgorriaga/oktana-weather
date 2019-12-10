
import { combineReducers } from "redux";

import { ADD_FAVORITE, REMOVE_FAVORITE, FETCH_WEATHER_ERROR, FETCH_WEATHER_SUCCESS} from '../constants';

const favoriteReducer = (favorites = [], action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return [...favorites, action.payload];
    case REMOVE_FAVORITE:
      return favorites.filter(fav => fav !== action.payload);
    default:
      return favorites;
  }
};

const fetchDataReducer = (state = {}, action) =>{
  switch (action.type){
    case FETCH_WEATHER_SUCCESS:
      return action.payload;
      case FETCH_WEATHER_ERROR:
          return action.payload;
      default:
        return state;
  }
};

export default combineReducers({
  fetchData: fetchDataReducer,
  favorites: favoriteReducer,

});
