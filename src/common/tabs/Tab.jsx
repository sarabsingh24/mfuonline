import React from "react";
import { StepBox, StepCount, StepText } from "./CommonTab-style";

function Tab({ step}) {
  const { active, text, icon, show } = step;

  return (
    <StepBox
      className={active ? "tab-active" : ""}
      style={{ display: show ? "block" : "none" }}
    >
      <StepCount className={active ? "tab-active" : ""}>{icon}</StepCount>
      <StepText>{text}</StepText>
    </StepBox>
  );
}

export default Tab;
