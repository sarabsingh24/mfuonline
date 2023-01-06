import { createReducer } from "@reduxjs/toolkit";
import { CAN_CRITERIA } from "./Constant";


const initialState = {
  formBody: {},
 
};

export default createReducer(initialState, (builder) => {
  builder.addCase(CAN_CRITERIA, (state, action) => {
    state.formBody = action.payload;
  });
  
});
