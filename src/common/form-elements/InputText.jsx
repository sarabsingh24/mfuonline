import React from 'react'
import { Form } from "react-bootstrap";

function InputText({ label, placeholder, disabled }) {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        placeholder={placeholder ? placeholder : ""}
        disabled={disabled ? disabled: false }
      />
    </Form.Group>
  );
}

export default InputText