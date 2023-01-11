import styled from "styled-components";

export const BtnStyle = styled.button`
  border-radius: 80px;
  background-color: ${(props) => (props.bgColor ? "#388e3c" : "#0288d1")};
  border: 1px solid ${(props) => (props.bgColor ? "#66bb6a" : "#29b6f6")};
  padding: 9px 30px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  line-height: 16px;
  margin: 0 4px;
  cursor: pointer;

  @media (max-width: 768px) {
    flex-grow: 1;
    text-align: center;
  }
`;
