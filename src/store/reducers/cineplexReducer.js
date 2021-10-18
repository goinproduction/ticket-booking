import {
    GET_CINEPLEX,
    GET_CINEPLEX_BY_ID,
    GET_CINEPLEX_BY_FILM_ID,
} from '../constants';
const initialState = {
    cineplexes: [],
    cineplexById: [],
    listComplexesByFilmId: [],
};

const cineplexReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CINEPLEX:
            return {
                ...state,
                cineplexes: action.payload,
            };
        case GET_CINEPLEX_BY_ID:
            return {
                ...state,
                cineplexById: action.payload,
            };
        case GET_CINEPLEX_BY_FILM_ID:
            return {
                ...state,
                listComplexesByFilmId: action.payload,
            };
        default:
            return state;
    }
};

export default cineplexReducer;
