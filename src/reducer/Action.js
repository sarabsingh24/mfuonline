import { createAction } from "@reduxjs/toolkit";
import { TAB_UPDATE, PAGE_COUNT, NEXT_SEC } from "./Constant";

export const tabUpdate = createAction(TAB_UPDATE);
export const pageCount = createAction(PAGE_COUNT);
export const nextSection = createAction(NEXT_SEC);
