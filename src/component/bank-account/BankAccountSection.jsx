
import React from "react";
import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../Style.css";

//component
import Section from "../../common/section/Section";
import InputText from "../../common/form-elements/InputText";
import GridCustom from "../../common/grid-custom/GridCustom";
import SelectOption from "../../common/form-elements/SelectOption";
import { accountType, bankProof } from "./accountData";
function BankAccountSection({ count }) {
  let accountCount = count === 0 ? "Default" : count === 1? 'Second' : 'Third' ;
  return (
    <Section heading={`${accountCount} Bank Account details`}>
      <GridCustom>
        <Row>
          <Col xs={12} md={4}>
            <InputText name="bankAccount" label="Bank A/c No" />
          </Col>
          <Col xs={12} md={4}>
            <InputText name="reBankAccount" label="Re-Enter Bank A/c No" />
          </Col>
          <Col xs={12} md={4}>
            <SelectOption
              name="accountType"
              label="Account Type"
              select="Select"
              options={accountType}
              // changeFun={formHandeler}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <InputText name="bank" label="Bank" />
          </Col>
          <Col xs={12} md={4}>
            <InputText name="micr" label="MICR" />
          </Col>
          <Col xs={12} md={4}>
            <InputText name="ifce" label="IFSC" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <SelectOption
              name="accountType"
              label="Account Type"
              select="Select"
              options={bankProof}
              // changeFun={formHandeler}
            />
          </Col>
        </Row>
      </GridCustom>
    </Section>
  );
}

export default BankAccountSection