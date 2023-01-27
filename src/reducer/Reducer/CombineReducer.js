import { combineReducers } from "@reduxjs/toolkit";
import tabReducer from "./TabReducer";
// import formReducer from "./FormReducer";
import PostReducer from './account/accountSlice'

const rootReducer = combineReducers({ tabReducer, PostReducer });

export { rootReducer };
