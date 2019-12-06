export const addFavourite = city =>{
    return{
        type: 'ADD_FAVOURITE',
        payload: city
    };
};

export const removeFavourite = city =>{
    return{
        type: 'REMOVE_FAVOURITE',
        payload: city
    };
};
