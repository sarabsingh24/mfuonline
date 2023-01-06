import React from "react";
import { Form } from "react-bootstrap";


function InputText({
  label,
  placeholder,
  disabled,
  value,
  type,
  changeFunc,
  mandatory,
  errors,
  name,
}) {
  return (
    <Form.Group className="mb-3">
      <Form.Label>
        {label}
        <span className="red">{mandatory}</span>
      </Form.Label>
      <Form.Control
        placeholder={placeholder ? placeholder : ""}
        disabled={disabled ? disabled : false}
        value={value && value}
        type={type ? type : "text"}
        onChange={changeFunc && changeFunc}
        className={!!errors?.[name] && "redBorder"}
        isInvalid={!!errors?.name}
      />
      <div className="red">{errors?.[name]}</div>
    </Form.Group>
  );
}

export default InputText;
