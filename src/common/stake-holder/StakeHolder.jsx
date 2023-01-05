import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

//components
import Section from "../section/Section";
import InputText from "../form-elements/InputText";
import GridCustom from "../grid-custom/GridCustom";
import DatePicker from "../form-elements/DatePicker";
import SelectOption from "../form-elements/SelectOption";
import FooterSection from "../footerSection/FooterSection";
import { btnHandeler } from "../helper/Helper";
import { pageCount } from "../../reducer/Action";
import useReducerLinked from "../customComp/useReducerLinked";
import {
  sourceOfWealth,
  occupation,
  politicalExposure,
  addressType,
  taxResidency,
  countryList,
  grossAnnualIncome,
} from "./stakeHolderData";

function StakeHolder() {
  const [grossIncome, setGrossIncome] = useState(false);
  const [networth, setNetworth] = useState(false);
  const [btnFun, setBtnFun] = useState({});

  const { stepsCount, dispatch } = useReducerLinked();

  const incomeStatus = (e) => {
    let status = e.target.dataset.name;
    if (status === "GAI") {
      setGrossIncome(true);
      setNetworth(false);
    } else {
      setGrossIncome(false);
      setNetworth(true);
    }
  };

  useEffect(() => {
    setBtnFun(btnHandeler(dispatch, pageCount, stepsCount));
  }, [dispatch, stepsCount]);

  return (
    <React.Fragment>
      <Section heading="Basic Details">
        <GridCustom>
          <Row>
            <Col xs={12} md={4}>
              <InputText label="Name" mandatory={true} />
            </Col>
            <Col xs={12} md={4}>
              <DatePicker label="Date of Birth" mandatory={true} />
            </Col>
            <Col xs={12} md={4}>
              <InputText label="PAN / PEKRN" mandatory={true} />
            </Col>
            <Col xs={12} md={{ span: 4, offset: 8 }}>
              <InputText label="Re-Enter PAN / PEKRN" mandatory={true} />
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={4}>
              <Form.Group className="mb-4">
                <Form.Label>Res. (ISD-STD-Phone)</Form.Label>
                <InputGroup>
                  <Form.Control maxLength={2} placeholder="91" />
                  <Form.Control style={{ flex: "2" }} maxLength={3} />
                  <Form.Control style={{ flex: "8" }} />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col xs={12} md={4}>
              <Form.Group className="mb-4">
                <Form.Label>Mobile (ISD-Mobile)</Form.Label>
                <InputGroup>
                  <Form.Control maxLength={2} />
                  <Form.Control style={{ flex: "8" }} />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col xs={12} md={4}>
              <InputText label="Email" mandatory={true} />
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6}></Col>
          </Row>
        </GridCustom>
      </Section>

      <Section heading="Additional KYC Details">
        <GridCustom>
          <Row className="justify-content-md-center">
            <Col xs={12} md={2} className="m-4">
              <Form.Check
                type="radio"
                label="Gross Annual Income"
                name="income"
                data-name="GAI"
                onChange={incomeStatus}
                mandatory={true}
              />
            </Col>
            <Col xs={12} md={2} className="m-4">
              <Form.Check
                type="radio"
                label="Networth"
                name="income"
                data-name="NW"
                onChange={incomeStatus}
                mandatory={true}
              />
            </Col>
          </Row>
          <Row style={{ display: grossIncome ? "flex" : "none" }}>
            <Col xs={12} md={3}>
              <SelectOption
                name="grossAnnualIncome"
                label="Gross Annual Income"
                select="Select"
                options={grossAnnualIncome}
                // changeFun={formHandeler}
                mandatory={true}
              />
            </Col>
          </Row>
          <Row style={{ display: networth ? "flex" : "none" }}>
            <Col xs={12} md={3}>
              <InputText
                name="networth"
                label="Networth (in Rs.)"
                mandatory={true}
              />
            </Col>
            <Col xs={12} md={3}>
              <DatePicker label="As on date" mandatory={true} />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={3}>
              <SelectOption
                name="wealthSource"
                label="Source of Wealth"
                select="Select"
                options={sourceOfWealth}
                // changeFun={formHandeler}
                mandatory={true}
              />
            </Col>
            <Col xs={12} md={3}>
              <SelectOption
                name="Occupation"
                label="Occupation"
                select="Select"
                options={occupation}
                // changeFun={formHandeler}
                mandatory={true}
              />
            </Col>
            <Col xs={12} md={3}>
              <SelectOption
                name="politicalExposure"
                label="Political Exposure"
                select="Select"
                options={politicalExposure}
                // changeFun={formHandeler}
                mandatory={true}
              />
            </Col>
            <Col xs={12} md={3}>
              <SelectOption
                name="addressType"
                label="KRA Address Type"
                select="Select"
                options={addressType}
                // changeFun={formHandeler}
                mandatory={true}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={3}>
              <InputText
                name="other1"
                label="Other"
                disabled={true}
                mandatory={true}
              />
            </Col>
            <Col xs={12} md={3}>
              <InputText
                name="other2"
                label="Other"
                disabled={true}
                mandatory={true}
              />
            </Col>
          </Row>
        </GridCustom>
      </Section>

      <Section heading="FATCA Details">
        <GridCustom>
          <Row>
            <Col xs={12} md={4}>
              <SelectOption
                name="addressType"
                label="Tax Residency in a country other than India? "
                select="Select"
                options={taxResidency}
                // changeFun={formHandeler}
                mandatory={true}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={3}>
              <InputText name="placeOfBirth" label="Place of Birth" />
            </Col>
            <Col xs={12} md={3}>
              <SelectOption
                name="addressType"
                label="Country of Birth "
                select="Select"
                options={countryList}
                // changeFun={formHandeler}
                mandatory={true}
              />
            </Col>
            <Col xs={12} md={3}>
              <SelectOption
                name="addressType"
                label="Country of Citizenship "
                select="Select"
                options={countryList}
                // changeFun={formHandeler}
                mandatory={true}
              />
            </Col>
            <Col xs={12} md={3}>
              <SelectOption
                name="addressType"
                label="Country of Nationality"
                select="Select"
                options={countryList}
                // changeFun={formHandeler}
                mandatory={true}
              />
            </Col>
          </Row>
        </GridCustom>
      </Section>
      <FooterSection backBtn={true} nextBtn={true} btnFun={btnFun} />
    </React.Fragment>
  );
}

export default StakeHolder;
