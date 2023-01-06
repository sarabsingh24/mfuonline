import { createReducer } from "@reduxjs/toolkit";
import { TAB_UPDATE, PAGE_COUNT, NEXT_SEC } from "./Constant";
import { stepsList } from "../common/tabs/Data";

const initialState = {
  tabsCreater: stepsList,
  stepsCount: 0,
  openForm: "CRI",
};

export default createReducer(initialState, (builder) => {
  builder.addCase(TAB_UPDATE, (state, action) => {
    state.tabsCreater = action.payload;
  });
  builder.addCase(PAGE_COUNT, (state, action) => {
    state.stepsCount = action.payload;
  });
  builder.addCase(NEXT_SEC, (state, action) => {
    state.openForm = action.payload;
  });
});
