import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

function DatePicker({ name, label, mandatory, changeFun, value ,count}) {
  const [todayDate, setTodayDate] = useState("");
  useEffect(() => {
    let date = new Date();
    if (value) {
      date = new Date(value);
    }
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) month = "0" + month.toString();
    if (day < 10) day = "0" + day.toString();

    setTodayDate(`${year}-${month}-${day}`);
  }, [value]);

  return (
    <Form.Group className="mb-3">
      <Form.Label>
        {label}
        <span className="red">{mandatory}</span>
      </Form.Label>
      <Form.Control
        type="date"
        name={name}
        count={count}
        value={todayDate}
        onChange={changeFun}
        // max={todayDate}
      />
    </Form.Group>
  );
}

export default DatePicker;
