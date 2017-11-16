import { combineReducers } from "redux";
import orderReducer from "./orders";
import authReducer from "./auth";

export default combineReducers({
  order: orderReducer,
  auth: authReducer
});