import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
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
  NOMINEES,
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
export const nomineesForm = createAction(NOMINEES);

//Proof Update
export const proofUploadForm = createAction(PROOF_UPLOAD);

//dispatch
//delete reAccountNo from bankAccount
//http://api.armfintech.com:81/mfu/v1/cans
//http://api.finnsysonline.com:81/mfu/v1/cans

export const postData = async (data) => {
  axios.post("http://api.armfintech.com:81/mfu/v1/cans", data);

  // return async () => {
  //   await fetch("http://api.finnsysonline.com:81/mfu/v1/cans", {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   });
  // };
};
