import { GET_CINEPLEX } from '../constants';
const initialState = {
    cineplexs: [],
};

const cineplexReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CINEPLEX:
            return {
                ...state,
                cineplexs: action.payload,
            };
        default:
            return state;
    }
};

export default cineplexReducer;
