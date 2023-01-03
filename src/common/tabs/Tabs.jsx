import React from "react";
import { StepperContainer, StepperLine, Steps } from "./CommonTab-style";
import Tab from "./Tab";
//component
import {stepsList} from '../../data/Data' 

function Tabs() {

  return (
    <StepperContainer>
      <StepperLine />
      <Steps>
        {stepsList.map((step, index) => {
          return <Tab key={step.count} step={step} count={index} />;
        })}
      </Steps>
    </StepperContainer>
  );
}

export default Tabs;
