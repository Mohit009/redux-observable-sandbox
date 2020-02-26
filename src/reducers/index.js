import { combineReducers } from "redux";
import makeSandwich from "./makeSanwich";
import charge from "./charge";

export default combineReducers({
  makeSandwich,
  charge
});
