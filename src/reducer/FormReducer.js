import { createReducer } from "@reduxjs/toolkit";
import { CAN_CRITERIA, PRIME_HOLDER } from "./Constant";


const initialState = {
  canCriteriaObj: {},
  primeHolderObj: {},
};

export default createReducer(initialState, (builder) => {
  builder.addCase(CAN_CRITERIA, (state, action) => {
    state.canCriteriaObj = action.payload;
  });
  builder.addCase(PRIME_HOLDER, (state, action) => {
    state.primeHolderObj = action.payload;
  });
  
});
