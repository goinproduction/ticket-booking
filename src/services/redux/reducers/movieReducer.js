import * as ActionType from "./../constants/contants";

let initialState = {
  listMovie: [],
  movie: []
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_LIST_MOVIE:
      state.listMovie = action.listMovie;
      return { ...state };
    case ActionType.GET_DETAIL_MOVIE:
      state.movie = action.movie;
      return { ...state };
    default:
      return { ...state };
  }
};

export default movieReducer;
