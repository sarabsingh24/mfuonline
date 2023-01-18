import React, { useState, useEffect } from "react";

//component
import BankAccounts from "./bank-account/BankAccounts";
import CanCriteria from "./can-criteria/CanCriteria";
import GuardianHolder from "./guardian-holder/GuardianHolder";
import Nominees from "./nominees/Nominees";
import PrimaryHolder from "./primary-holder/PrimaryHolder";
import ThirdHolder from './third-holder/ThirdHolder'
import ProofUpload from "./proof-upload/ProofUpload";
import SecondHolder from "./second-holder/SecondHolder";
import useCommonReducer from "../common/customComp/useCommonReducer";

function RegistrationForm() {
  const [str, setStr] = useState("CRI");
  const [displayedTab, setDisplayedTab] = useState([]);

  const { stepsCount, tabsCreater } = useCommonReducer();

  useEffect(() => {
    let filterTabs = tabsCreater.filter((tab) => tab.show === true);
    let currTabs = filterTabs.map((tab) => tab.short);

    setDisplayedTab(currTabs);
  }, [tabsCreater]);

  useEffect(() => {
    let displaySection = displayedTab[stepsCount];

    setStr(displaySection);
  }, [displayedTab, stepsCount, tabsCreater]);

  if (str === "CRI") {
    
 
    return <CanCriteria />;
  }
  if (str === "PRIM") {
    return <PrimaryHolder />;
  }
  if (str === "SEC") {
    return <SecondHolder />;
  }
  if (str === "THIR") {
    return <ThirdHolder />;
  }
  if (str === "GUAR") {
    return <GuardianHolder />;
  }
  if (str === "BANK") {
    return <BankAccounts />;
  }
  if (str === "NOMI") {
    return <Nominees />;
  }
  if (str === "PROO") {
    return <ProofUpload />;
  }

  return <div>Loading...</div>;
}

export default RegistrationForm;
