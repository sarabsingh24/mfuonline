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
  BANK_ACCOUNTS,
  PROOF_UPLOAD,
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

//Bank Account
export const bankAccountForm = createAction(BANK_ACCOUNTS);
//Nominee

//Proof Update
export const proofUploadForm = createAction(PROOF_UPLOAD);



//dispatch
//http://api.armfintech.com:81/mfu/v1/cans
