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

import { accountType, bankProofOptions } from "./accountData";

function BankAccountSection({ count, form, thisAccountHandeler, errors }) {
  let accountCount = count === 0 ? "Default" : count === 1 ? "Second" : "Third";

  return (
    <Section heading={`${accountCount} Bank Account details`}>
      <GridCustom>
        <Row>
          <Col xs={12} md={4}>
            <InputText
              name="accountNo"
              label="Bank A/c No"
              type="password"
              value={form?.accountNo || ""}
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
              value={form?.reAccountNo || ""}
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
              value={form?.accountType || ""}
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
              value={form?.bankId || ""}
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
              value={form?.micrCode || ""}
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
              value={form?.ifscCode || ""}
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
              value={form?.bankProof || ""}
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
