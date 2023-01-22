import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// component
import GridCustom from "../../common/grid-custom/GridCustom";
import Section from "../../common/section/Section";
import InputText from "../../common/form-elements/InputText";
import DatePicker from "../../common/form-elements/DatePicker";
import { validateForm } from "./NomineeValidation";
import { useEffect } from "react";

export default function AddNominee({
  count,
  form,
  formObj,
  setForm,
  setErrors,
  errors,
  isErorArray,
  setIsErorArray,
}) {
  let order = count === 0 ? "First" : count === 1 ? "Second" : "Third";
  const formErrors = validateForm(formObj);

  const thisAccountHandeler = (e, num) => {
    let name = e.target.name;
    let value = e.target.value;
    let count = e.target.dataset.count;
    console.log(count);
    let newArray = form.map((obj) => {
      console.log(obj.sequenceNo, "=====", count);
      if (obj.sequenceNo === count) {
        return { ...obj, [name]: value };
      }
      return obj;
    });
    console.log("formErrors====", formErrors);
    if (!!isErorArray) {
      let newObj = isErorArray.map((item, index) => {
        // let valueInput = item[name] === "" ? item[name] : null; ;

        if (index === +count)
          return { ...item, [name]: value === "" ? formErrors[0][name] : null };
        return item;
      });

      setIsErorArray(newObj);
    }
    setForm(newArray);
  };

  useEffect(() => {
    if (formErrors.length > 0) {
      console.log("isErorArray===", isErorArray);
      console.log("formErrors====", formErrors);
      setIsErorArray([...isErorArray, { ...formErrors[0] }]);
    }
  }, []);

  return (
    <Section heading={`${order} Nominee`}>
      <GridCustom>
        <Row>
          <Col xs={12} md={3}>
            <InputText
              name="nomineeName"
              label="Name of Nominee"
              value={formObj?.nomineeName || ""}
              count={count}
              changeFun={thisAccountHandeler}
              mandatory="*"
              errors={isErorArray[count]}
            />
          </Col>
          <Col xs={12} md={3}>
            <InputText
              name="relation"
              label="Relationship"
              value={formObj?.relation || ""}
              count={count}
              changeFun={thisAccountHandeler}
              mandatory="*"
              errors={isErorArray[count]}
            />
          </Col>
          <Col xs={12} md={3}>
            <InputText
              name="percentage"
              label="Percent(%)"
              value={formObj?.percentage || ""}
              count={count}
              changeFun={thisAccountHandeler}
              mandatory="*"
              errors={isErorArray[count]}
            />
          </Col>
          <Col xs={12} md={3}>
            <DatePicker
              name="dateOfBirth"
              label="Date of Birth"
              value={formObj?.dateOfBirth || ""}
              count={count}
              changeFun={thisAccountHandeler}
              mandatory="*"
            />
          </Col>
        </Row>
      </GridCustom>
    </Section>
  );
}
