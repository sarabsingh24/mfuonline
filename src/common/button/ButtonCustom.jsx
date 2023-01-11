import React from "react";
import { BtnStyle } from "./ButtonCustom-style";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

function ButtonCustom({ text, btnFun, variant, type, bgColor }) {
  return (
    <>
      {!type  ? (
        //Back button
        <BtnStyle onClick={btnFun} back >{text}</BtnStyle>
      ) : (
        //Next button
        <BtnStyle type={type} >
          {text}
        </BtnStyle>
      )}
     
    </>
  );
}

export default ButtonCustom;

{
  /* <Stack gap={2} className="col-md-5 mx-auto">
  <Button variant={variant} onClick={btnFun}>
    {text}
  </Button>
</Stack>; */
}
