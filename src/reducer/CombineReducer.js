import { combineReducers } from "@reduxjs/toolkit";
import createReducer from "./Reducer";

const rootReducer = combineReducers({ createReducer });

export { rootReducer };
