import React from "react";
import { Form } from "react-bootstrap";

function DatePicker({ label }) {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control type="date" />
    </Form.Group>
  );
}

export default DatePicker;
