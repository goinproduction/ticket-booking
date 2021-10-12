import { GET_CINEPLEX, GET_CINEPLEX_BY_ID } from '../constants';
const initialState = {
    cineplexs: [],
    cineplexById: [],
};

const cineplexReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CINEPLEX:
            return {
                ...state,
                cineplexs: action.payload,
            };
        case GET_CINEPLEX_BY_ID:
            return {
                ...state,
                cineplexById: action.payload,
            };
        default:
            return state;
    }
};

export default cineplexReducer;
