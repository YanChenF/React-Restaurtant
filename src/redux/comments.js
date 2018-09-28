import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export function Comments(state = COMMENTS, action) {
    switch(action.type) {
        case ActionTypes.ADD_COMMENT:
            var newComment = action.payload;
            newComment.id = state.length;
            newComment.date = new Date().toISOString();
            return state.concat(newComment);
        default: return state;
    }
}