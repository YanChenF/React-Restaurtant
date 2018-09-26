import * as ActionTypes from './ActionTypes';

export const addComment = (dishId, author, comment, rating) => {
    return ({
        type: ActionTypes.ADD_COMMENTS,
        payload: {
            dishId, author, comment, rating
        }
    });
}