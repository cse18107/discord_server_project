import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slice/loginSlice";
import registerSlice from "./slice/registerSlice";


const rootReducer = combineReducers({
    login: loginSlice,
    register: registerSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
