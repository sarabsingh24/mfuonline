import styled from "styled-components";

export const StepperContainer = styled.section`
  position: relative;
  padding: 16px;
  margin: 40px 0;
`;

export const StepperLine = styled.div`
  border: 1px solid #bdbdbd;
  margin: 0 auto;
  width: 90%;
`;

export const Steps = styled.div`
  display: flex;
`;

export const StepBox = styled.div`
  margin-top: -28px;
  flex-grow: 1;
  text-align: center;
  color: rgba(0, 0, 0, 0.3);

  &.tab-active {
    color: #222222;
  }
`;

export const StepCount = styled.div`
  margin: 0 auto;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  border: 6px solid #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: #eeeeee;
  background: #bdbdbd;

  &.tab-active {
    color: #ffffff;
    background: #0288d1;
  }
`;
export const StepText = styled.div`
  text-align: center;
  font-size: 12px;

  @media (max-width: 768px) {
    display: none;
  }
`;
