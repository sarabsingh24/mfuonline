import React from "react";
import { Form } from "react-bootstrap";

function SelectOption({ name, label, select, options, changeFun }) {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Select onChange={changeFun} name={name}>
        {select && <option>{select}</option>}
        {options.map((item) => {
          return (
            <option value={item.value ? item?.value : item}>
              {item.label ? item.label : item}
            </option>
          );
        })}
      </Form.Select>
    </Form.Group>
  );
}

export default SelectOption;
