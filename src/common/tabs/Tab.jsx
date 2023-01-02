import React from "react";
import { StepBox, StepCount, StepText } from "./CommonTab-style";

function Tab({ step, count }) {
  const { sty, text } = step;

  return (
    <StepBox className={sty}>
      <StepCount className={sty}>{count + 1}</StepCount>
      <StepText>{text}</StepText>
    </StepBox>
  );
}

export default Tab;
