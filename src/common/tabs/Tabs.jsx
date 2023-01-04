import React, { useState, useEffect } from "react";
import { StepperContainer, StepperLine, Steps } from "./CommonTab-style";
import Tab from "./Tab";

//component
import { stepsList } from "./Data";
import { tabUpdate } from "../../reducer/Action";
import useReducerLinked from "../../common/customComp/useReducerLinked";

function Tabs() {
  const [tabs, setTabs] = useState([]);

  const { stepsCount, tabsCreater, dispatch } = useReducerLinked();

  useEffect(() => {
    let copyTab = tabsCreater.filter((tab) => tab.show === true);
    let currentTab = copyTab.slice(0, stepsCount + 1);

    let getVal = currentTab.map((val) => val.short);
  
    let heilightedTab = tabsCreater.map((tab) => {
      if (getVal.includes(tab.short)) {
        return { ...tab, active: true };
      }
      return { ...tab, active: false };
    });

    dispatch(tabUpdate(heilightedTab));
  }, [dispatch, stepsCount]);

  useEffect(() => {
    setTabs(tabsCreater);
  }, [tabsCreater]);

  return (
    <StepperContainer>
      <StepperLine />
      <Steps>
        {tabs?.map((step, index) => {
          return <Tab key={step.short} step={step} count={index} />;
        })}
      </Steps>
    </StepperContainer>
  );
}

export default Tabs;
