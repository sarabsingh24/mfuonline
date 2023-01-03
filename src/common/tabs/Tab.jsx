import React from "react";
import { StepBox, StepCount, StepText } from "./CommonTab-style";



function Tab({ step, count }) {
  const { status, text,icon } = step;

  return (
    <StepBox className={status ? "tab-active" : ""}>
      <StepCount className={status ? "tab-active" : ""}>{icon}</StepCount>
      <StepText>{text}</StepText>
    </StepBox>
  );
}

export default Tab;
