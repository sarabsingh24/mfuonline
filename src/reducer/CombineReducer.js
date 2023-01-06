import { combineReducers } from "@reduxjs/toolkit";
import tabReducer from "./TabReducer";
import formReducer from "./FormReducer";

const rootReducer = combineReducers({ tabReducer, formReducer });

export { rootReducer };
