import React from 'react'
import { Form } from "react-bootstrap";

const redColor = {
  color: "red",
};

function InputText({
  label,
  placeholder,
  disabled,
  value,
  type,
  changeFunc,
  mandatory,
}) {
  return (
    <Form.Group className="mb-3">
      <Form.Label>
        {label}
        {mandatory && <span style={redColor}>*</span>}
      </Form.Label>
      <Form.Control
        placeholder={placeholder ? placeholder : ""}
        disabled={disabled ? disabled : false}
        value={value}
        type={type ? type : "text"}
        onChange={changeFunc && changeFunc}
      />
    </Form.Group>
  );
}

export default InputText