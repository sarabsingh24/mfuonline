import React from "react";

//component

import BankAccounts from "./bank-account/BankAccounts";
import CanCriteria from "./can-criteria/CanCriteria";
import GuardianHolder from "./guardian-holder/GuardianHolder";
import Nominees from "./nominees/Nominees";
import PrimaryHolder from "./primary-holder/PrimaryHolder";
import ProofUpload from "./proof-upload/ProofUpload";
import SecondHolder from "./second-holder/SecondHolder";
import ThirdHolder from "./third-holder/ThirdHolder";

function RegistrationForm() {
  return (
    <>
      {/* <CanCriteria /> */}
      <PrimaryHolder />
      {/* <BankAccounts />

      <GuardianHolder />
      <Nominees />
    
      <ProofUpload />
      <SecondHolder />
      <ThirdHolder /> */}
    </>
  );
}

export default RegistrationForm;
