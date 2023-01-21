import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../Style.css";

//component
import Section from "../../common/section/Section";
import InputText from "../../common/form-elements/InputText";

import GridCustom from "../../common/grid-custom/GridCustom";
import SelectOption from "../../common/form-elements/SelectOption";
import { validateForm } from "./BankAccountValidation";
import { accountType, bankProofOptions } from "./accountData";

function BankAccountSection({ count, form, formObj, setForm }) {
  const [errors, setErrors] = useState({});
  const [st, setST] = useState(false);
  let accountCount = count === 0 ? "Default" : count === 1 ? "Second" : "Third";
  const formErrors = validateForm(formObj);

  const thisAccountHandeler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let count = e.target.dataset.count;

    let newArray = form.map((obj) => {
      if (
        name === "accountNo" ||
        name === "reAccountNo" ||
        name === "micrCode" ||
        name === "ifscCode"
      ) {
        if (obj.sequenceNo === count && !isNaN(value)) {
          if (!!errors[name]) {
            setErrors({ ...errors, [name]: null });
          }
          setST(true);
          return { ...obj, [name]: value };
        }

        return obj;
      } else {
        if (obj.sequenceNo === count) {
          return { ...obj, [name]: value };
        }
        return obj;
      }
    });

    setForm(newArray);
  };

  useEffect(() => {
    
      if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
      }
    
  }, [formObj?.accountNo, formObj?.reAccountNo]);

  return (
    <Section heading={`${accountCount} Bank Account details`}>
      <GridCustom>
        <Row>
          <Col xs={12} md={4}>
            <InputText
              name="accountNo"
              label="Bank A/c No"
              type="password"
              value={formObj?.accountNo || ""}
              count={count}
              changeFun={thisAccountHandeler}
              mandatory="*"
              errors={errors}
            />
          </Col>
          <Col xs={12} md={4}>
            <InputText
              name="reAccountNo"
              label="Re-Enter Bank A/c No"
              type="text"
              value={formObj?.reAccountNo || ""}
              count={count}
              changeFun={thisAccountHandeler}
              mandatory="*"
              errors={errors}
            />
          </Col>
          <Col xs={12} md={4}>
            <SelectOption
              name="accountType"
              label="Account Type"
              value={formObj?.accountType || ""}
              options={accountType}
              count={count}
              changeFun={thisAccountHandeler}
              mandatory="*"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <InputText
              name="bankId"
              label="Bank"
              type="text"
              value={formObj?.bankId || ""}
              count={count}
              changeFun={thisAccountHandeler}
              mandatory="*"
            />
          </Col>
          <Col xs={12} md={4}>
            <InputText
              name="micrCode"
              label="MICR"
              type="text"
              value={formObj?.micrCode || ""}
              count={count}
              changeFun={thisAccountHandeler}
              mandatory="*"
            />
          </Col>
          <Col xs={12} md={4}>
            <InputText
              name="ifscCode"
              label="IFSC"
              type="text"
              value={formObj?.ifscCode || ""}
              count={count}
              changeFun={thisAccountHandeler}
              mandatory="*"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <SelectOption
              name="bankProof"
              label="Bank Proof"
              value={formObj?.bankProof || ""}
              options={bankProofOptions}
              count={count}
              changeFun={thisAccountHandeler}
              mandatory="*"
            />
          </Col>
        </Row>
      </GridCustom>
      {/* <button onClick={addHandeler}>add</button> */}
    </Section>
  );
}

export default BankAccountSection;
