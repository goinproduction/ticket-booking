import { combineReducers } from "redux";
import FilmReducer from "./film";

const rootReducer = combineReducers({
  film: FilmReducer,
});
export default rootReducer;
