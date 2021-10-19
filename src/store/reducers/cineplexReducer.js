import {
    GET_CINEPLEX,
    GET_CINEPLEX_BY_ID,
    GET_CINEPLEX_BY_FILM_ID,
    GET_LIST_CINEPLEX_GROUP,
} from '../constants';
const initialState = {
    cineplexes: [],
    cineplexById: [],
    listComplexesByFilmId: [],
    listShowingTime: [],
    listCineplexGroup: [],
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
            let nameCinemas = [];
            let showingTimeBuffer = [];

            action.payload.heThongRapChieu.forEach((item) => {
                item.cumRapChieu.forEach((item) => {
                    nameCinemas.push(item);
                    item.lichChieuPhim.forEach((item) => {
                        showingTimeBuffer.push(item);
                    });
                });
            });

            state.listComplexesByFilmId = nameCinemas;
            state.listShowingTime = showingTimeBuffer;

            return {
                ...state,
            };
        case GET_LIST_CINEPLEX_GROUP:
            let cineplexBuff = [];
            action.payload.forEach((item) => {
                item.lstCumRap.forEach((item) => {
                    cineplexBuff.push(item);
                });
            });
            state.listCineplexGroup = cineplexBuff;
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default cineplexReducer;
