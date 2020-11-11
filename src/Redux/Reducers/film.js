import { FETCH_FILMS } from "../Actions/type";
let initialState = {
  films: [],
};

const FilmReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILMS: {
      state.films = action.payload;
      return { ...state };
    }
    default: {
      return state;
    }
  }
};

export default FilmReducer;
