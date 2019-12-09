import fetch from 'cross-fetch';
const APP_ID = "f4a064fab6279ff8911f853cad2d6eba";

export const FETCH_WEATHER = "FETCH_WEATHER";

export const addFavorite = city =>{
    return{
        type: 'ADD_FAVORITE',
        payload: city
    };
};

export const removeFavorite = city =>{
    return{
        type: 'REMOVE_FAVORITE',
        payload: city
    };
};

export const fetchData = (city) => async (dispatch) => {
const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APP_ID}`);
const final = await response.json();

dispatch({ type:"FETCH_WEATHER", payload: final});

   }