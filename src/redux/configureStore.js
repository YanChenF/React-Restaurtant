import { createStore, combineReducers } from 'redux';
import { Leaders } from './leaders';
import { Comments } from './comments';
import { Dishes } from './dishes';
import { Promotions } from './promotions';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            leaders: Leaders,
            comments: Comments,
            dishes: Dishes,
            promotions: Promotions
        })
    );
    return store;
}

