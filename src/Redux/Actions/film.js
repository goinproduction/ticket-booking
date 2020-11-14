import { createAction } from ".";
import { filmService } from "../../Services";
import { FETCH_FILMS } from "./type";

export const fetchFilms = () => {
  return (dispatch) => {
    filmService
      .fetchFilms()
      .then((result) => {
        dispatch(createAction(FETCH_FILMS, result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
