import React from "react";
import { Form } from "react-bootstrap";
const redColor = {
  color: "red",
};
function SelectOption({ name, label, select, options, changeFun, mandatory }) {
  return (
    <Form.Group className="mb-3">
      <Form.Label>
        {label}
        {mandatory && <span style={redColor}>*</span>}
      </Form.Label>
      <Form.Select onChange={changeFun} name={name}>
        {select && <option>{select}</option>}
        {options.map((item) => {
          return (
            <option key={item.value} value={item.value ? item?.value : item}>
              {item.label ? item.label : item}
            </option>
          );
        })}
      </Form.Select>
    </Form.Group>
  );
}

export default SelectOption;
