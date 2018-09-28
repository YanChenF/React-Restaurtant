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

// fetch dishes data
export const fetchDishes = () => (dispatch => {
    dispatch(dishesLoading(true));

    fetch(baseUrl + 'dishes')
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


//fectch comments data
export const fetchComments = () => (dispatch => {
    fetch(baseUrl + 'comments')
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
    .then(data => dispatch(addComments(data)))
    .catch(error => dispatch(commentsFailed(error.message)));
});

export const commentsFailed = (errMess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

// fetch promotions data

export const fetchPromos = () => (dispatch => {
    dispatch(promosLoading(true));

    fetch(baseUrl + 'promotions')
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
    .then(data => dispatch(addPromos(data)))
    .catch(error => dispatch(promosFailed(error.message)));
});

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errMess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errMess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

//fetch leaders data

export const fetchLeaders = () => (dispatch => {
    dispatch(leadersLoading(true));

    fetch(baseUrl + 'leaders')
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
    .then(data => dispatch(addLeaders(data)))
    .catch(error => dispatch(leadersFailed(error.message)));
});

export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
});

export const leadersFailed = (errMess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errMess
});

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});