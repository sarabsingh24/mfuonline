import { createReducer } from "@reduxjs/toolkit";
import {
  CAN_CRITERIA,
  PRIME_HOLDER,
  SECOND_HOLDER,
  THIRD_HOLDER,
  GUARDIAN_HOLDER,
  PROOF_UPLOAD,
} from "./Constant";

const initialState = {
  canCriteriaObj: {},
  primeHolderObj: {},
  secondHolderObj: {},
  thirdHolderObj: {},
  guardianHolderObj: {},
  proofUploadObj: [],
};

export default createReducer(initialState, (builder) => {
  builder.addCase(CAN_CRITERIA, (state, action) => {
    state.canCriteriaObj = action.payload;
  });
  builder.addCase(PRIME_HOLDER, (state, action) => {
    state.primeHolderObj = action.payload;
  });
  builder.addCase(SECOND_HOLDER, (state, action) => {
    state.secondHolderObj = action.payload;
  });
  builder.addCase(THIRD_HOLDER, (state, action) => {
    state.thirdHolderObj = action.payload;
  });
  builder.addCase(GUARDIAN_HOLDER, (state, action) => {
    state.guardianHolderObj = action.payload;
  });
  builder.addCase(PROOF_UPLOAD, (state, action) => {
    state.proofUploadObj = action.payload;
  });
});
