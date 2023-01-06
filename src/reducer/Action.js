import { createAction } from "@reduxjs/toolkit";
import { TAB_UPDATE, PAGE_COUNT, NEXT_SEC, CAN_CRITERIA } from "./Constant";

//Tab Action
export const tabUpdate = createAction(TAB_UPDATE);
export const pageCount = createAction(PAGE_COUNT);
export const nextSection = createAction(NEXT_SEC);

//Form Action
export const criteriaForm = createAction(CAN_CRITERIA);