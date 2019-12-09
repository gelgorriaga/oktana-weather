import { combineReducers } from "redux";

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

export default combineReducers({
  favorites: favoriteReducer
});
