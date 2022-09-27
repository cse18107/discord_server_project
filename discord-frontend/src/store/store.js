import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slice/loginSlice";
import registerSlice from "./slice/registerSlice";
import alertMessageSlice from "./slice/alertMessageSlice";


const rootReducer = combineReducers({
    login: loginSlice,
    register: registerSlice,
    alert: alertMessageSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
