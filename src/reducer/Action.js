import { createAction } from "@reduxjs/toolkit";
import {
  TAB_UPDATE,
  PAGE_COUNT,
  NEXT_SEC,
  CAN_CRITERIA,
  PRIME_HOLDER,
  SECOND_HOLDER,
  THIRD_HOLDER,
  GUARDIAN_HOLDER,
} from "./Constant";

//Tab Action
export const tabUpdate = createAction(TAB_UPDATE);
export const pageCount = createAction(PAGE_COUNT);
export const nextSection = createAction(NEXT_SEC);

//Form Action
export const criteriaForm = createAction(CAN_CRITERIA);
export const primeHolderForm = createAction(PRIME_HOLDER);
export const secondHolderForm = createAction(SECOND_HOLDER);
export const thirdHolderForm = createAction(THIRD_HOLDER);
export const guardianHolderForm = createAction(GUARDIAN_HOLDER);