import axios from "axios";
import { REMOVE_FAVORITE, ADD_FAVORITE, FETCH_WEATHER_ERROR, FETCH_WEATHER_SUCCESS, APP_ID } from '../constants';
import { normalizeData } from '../helperFunctions';

export const addFavorite = city => {
  return {
    type: ADD_FAVORITE,
    payload: city
  };
};

export const removeFavorite = city => {
  return {
    type: REMOVE_FAVORITE,
    payload: city
  };
};

export const fetchData = city => async dispatch => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APP_ID}`
      );
        let normalizedData = normalizeData(response.data);
          dispatch({ type: FETCH_WEATHER_SUCCESS, payload: normalizedData});

    } catch (error) {
      dispatch({ type: FETCH_WEATHER_ERROR, payload: 'ERROR' });
    }
  };
  
