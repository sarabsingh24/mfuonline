import React, { useEffect, useState } from "react";
import useCommonReducer from "../customComp/useCommonReducer";
import { useNavigate } from "react-router-dom";

function CheckNavigate() {
  const [str, setStr] = useState("CRI");
  const [displayedTab, setDisplayedTab] = useState([]);

  const navigate = useNavigate();

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

  useEffect(() => {
    if (str === "CRI") {
      navigate("/");
    }
    if (str === "PRIM") {
      navigate("primaryHolder");
    }
    if (str === "SEC") {
      navigate("secondHolder");
    }
    if (str === "THIR") {
      navigate("thirdHolder");
    }
    if (str === "GUAR") {
      navigate("guardianHolder");
    }
    if (str === "BANK") {
      navigate("bankAccounts");
    }
    if (str === "NOMI") {
      navigate("nominees");
    }
    if (str === "PROO") {
      navigate("proofUpload");
    }
  }, [str, navigate]);

  return <>{!str && <div>Loading...</div>}</>;
}

export default CheckNavigate;
