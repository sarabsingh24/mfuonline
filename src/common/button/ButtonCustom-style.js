import styled from "styled-components";

export const BtnStyle = styled.button`
  border-radius: 80px;
  background-color: #0288d1;
  border: 1px solid #0288d1;
  padding: 9px 30px;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  line-height: 16px;
  margin: 0 4px;
  cursor: pointer;
 
  @media (max-width: 768px) {
    flex-grow: 1;
    text-align: center;
  }
`;
