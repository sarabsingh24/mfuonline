import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../Style.css";

//component
import Section from "../../common/section/Section";
import InputText from "../../common/form-elements/InputText";
import InputTextParam from "../../common/form-elements/InputTextParam";
import GridCustom from "../../common/grid-custom/GridCustom";
import SelectOption from "../../common/form-elements/SelectOption";
import { accountType, bankProofOptions } from "./accountData";

function BankAccountSection({
  count,
  form,
  thisAccountHandeler,
 
}) {
 
  let accountCount = count === 0 ? "Default" : count === 1 ? "Second" : "Third";

  return (
    <Section heading={`${accountCount} Bank Account details`}>
      <GridCustom>
        <Row>
          <Col xs={12} md={4}>
            <InputTextParam
              name="accountNo"
              label="Bank A/c No"
              type="password"
              value={form?.accountNo}
              changeFun={{ thisAccountHandeler, count }}
              mandatory="*"
            />
            {/* <InputText
              name="accountNo"
              label="Bank A/c No"
              type="password"
              value={form?.accountNo}
              changeFun={() => thisAccountHandeler(count)}
              mandatory="*"
            /> */}
          </Col>
          <Col xs={12} md={4}>
            <InputTextParam
              name="reAccountNo"
              label="Re-Enter Bank A/c No"
              value={form?.reAccountNo}
              changeFun={{ thisAccountHandeler, count }}
              mandatory="*"
            />
            {/* <InputText
              name="reAccountNo"
              label="Re-Enter Bank A/c No"
              value={form?.reAccountNo}
              changeFun={thisAccountHandeler}
              mandatory="*"
            /> */}
          </Col>
          <Col xs={12} md={4}>
            <SelectOption
              name="accountType"
              label="Account Type"
              value={form?.accountType}
              options={accountType}
              changeFun={thisAccountHandeler}
              mandatory="*"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <InputTextParam
              name="bankId"
              label="Bank"
              value={form?.bankId}
              changeFun={{ thisAccountHandeler, count }}
              mandatory="*"
            />
          </Col>
          <Col xs={12} md={4}>
            <InputTextParam
              name="micrCode"
              label="MICR"
              value={form?.micrCode}
              changeFun={{ thisAccountHandeler, count }}
              mandatory="*"
            />
            {/* <InputText
              name="micrCode"
              label="MICR"
              value={form?.micrCode}
              changeFun={thisAccountHandeler}
              mandatory="*"
            /> */}
          </Col>
          <Col xs={12} md={4}>
            <InputTextParam
              name="ifscCode"
              label="IFSC"
              value={form?.ifscCode}
              changeFun={{ thisAccountHandeler, count }}
              mandatory="*"
            />
            {/* <InputText
              name="ifscCode"
              label="IFSC"
              value={form?.ifscCode}
              changeFun={thisAccountHandeler}
              mandatory="*"
            /> */}
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <SelectOption
              name="bankProof"
              label="Bank Proof"
              value={form?.bankProof}
              options={bankProofOptions}
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
