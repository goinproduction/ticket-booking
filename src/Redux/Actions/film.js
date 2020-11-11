import { createAction } from ".";
import { filmService } from "../../Services";
import { FETCH_FILMS } from "./type";

export const fetchFilms = () => {
  return (dispath) => {
    filmService
      .fetchFilms()
      .then((result) => {
        dispath(createAction(FETCH_FILMS, result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
