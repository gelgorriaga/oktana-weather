import { combineReducers } from "redux";

const favouriteReducer = (favourites = [], action) => {
  switch (action.type) {
    case "ADD_FAVOURITE":
      return [...favourites, action.payload];
    case "REMOVE_FAVOURITE":
      return favourites.filter(fav => fav !== action.payload);
    default:
      return favourites;
  }
};

export default combineReducers({
  favourites: favouriteReducer
});
