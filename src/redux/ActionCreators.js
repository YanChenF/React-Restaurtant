import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addComment = (dishId, author, comment, rating) => {
    return ({
        type: ActionTypes.ADD_COMMENT,
        payload: {
            dishId, author, comment, rating
        }
    });
}

export const fetchDishes = () => (dispatch => {
    dispatch(dishesLoading(true));

    fetch(baseUrl + 'dishees')
    .then(response => {
        if(response.ok) return response;
        var error = new Error('Error: ' + response.status + response.statusText);
        error.response = response;
        throw error;
    }, error => {
        var errMess = new Error(error.message);
        throw errMess;
    })
    .then(response => response.json())
    .then(data => dispatch(addDishes(data)))
    .catch(error => dispatch(dishesFailed(error.message)));
});

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errMess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errMess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});
