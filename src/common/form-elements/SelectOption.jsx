import React from "react";
import { Form } from "react-bootstrap";

function SelectOption({
  name,
  label,
  select,
  options,
  changeFun,
  mandatory,
  errors,
  value,
}){

// const selectedValue = options.find((i) => i.value === value);
// console.log(selectedValue);
console.log(value);

  return (
    <Form.Group className="mb-3">
      <Form.Label>
        {label}
        <span className="red">{mandatory}</span>
      </Form.Label>

      <Form.Select
        // value={"ddd"}
        onChange={changeFun}
        name={name}
        className={!!errors?.[name] && "redBorder"}
        // required
      >
        {value && <option>{value}</option>}
        {options.map((item) => {
          return (
            <option
              key={item.value}
              value={item.value ? item?.value : item}
              label={item.label}
            >
              {item.label ? item.label : item}
            </option>
          );
        })}
      </Form.Select>
      <div className="red">{errors?.[name]}</div>
    </Form.Group>
  );
}

export default SelectOption;
