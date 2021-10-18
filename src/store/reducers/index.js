import { combineReducers } from 'redux';
import filmReducer from './filmReducer';
import cineplexReducer from './cineplexReducer';

const rootReducer = combineReducers({
    film: filmReducer,
    cineplex: cineplexReducer,
});

export default rootReducer;
