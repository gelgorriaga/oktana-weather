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
