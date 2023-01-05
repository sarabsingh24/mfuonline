import React from "react";
import { Form } from "react-bootstrap";

const redColor ={
  color:'red'
}

function DatePicker({ label, mandatory }) {
  return (
    <Form.Group className="mb-3">
      <Form.Label>
        {label}
        {mandatory && <span style={redColor}>*</span>}
      </Form.Label>
      <Form.Control type="date" />
    </Form.Group>
  );
}

export default DatePicker;
