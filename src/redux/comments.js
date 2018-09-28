import * as ActionTypes from './ActionTypes';

export function Comments(state = {
    errMess: null,
    comments: []
    }, action) {
    switch(action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};
        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};
        case ActionTypes.ADD_COMMENT:
            var newComment = action.payload;
            newComment.id = state.length;
            newComment.date = new Date().toISOString();
            return state.concat(newComment);
        default: return state;
    }
}