import React from "react";
import { Form } from "react-bootstrap";


function InputText({
  label,
  placeholder,
  disabled,
  value,
  type,
  changeFun,
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
        name={name}
        // placeholder={placeholder ? placeholder : ""}
        disabled={disabled ? disabled : false}
        value={value}
        type={type ? type : "text"}
        onChange={changeFun}
        className={!!errors?.[name] && "redBorder"}
        isInvalid={!!errors?.name}
        style={{ color: "#666", fontWeight: "500" }}
      />
      <div className="red">{errors?.[name]}</div>
    </Form.Group>
  );
}

export default InputText;
