import React from "react";
import { Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import Country from 'react-bootstrap/c'

//components
import Section from "../../common/section/Section";
import InputText from "../../common/form-elements/InputText";
import GridCustom from "../../common/grid-custom/GridCustom";
import DatePicker from "../../common/form-elements/DatePicker";
import SelectOption from "../../common/form-elements/SelectOption";
import {
  sourceOfWealth,
  occupation,
  politicalExposure,
  addressType,
  taxResidency,
  countryList,
} from "./primaryHolderData";



function PrimaryHolder() {
  return (
    <React.Fragment>
      <Section heading="Basic Details">
        <Form>
          <GridCustom>
            <Row>
              <Col xs={12} md={4}>
                <InputText label="Name" />
              </Col>
              <Col xs={12} md={4}>
                <DatePicker label="Date of Birth" />
              </Col>
              <Col xs={12} md={4}>
                <InputText label="PAN / PEKRN" />
              </Col>
              <Col xs={12} md={{ span: 4, offset: 8 }}>
                <InputText label="Re-Enter PAN / PEKRN" />
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
            </Row>
            <Row>
              <Col xs={12} md={4}>
                <InputText label="Email" />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}></Col>
            </Row>
          </GridCustom>
        </Form>
      </Section>

      <Section heading="Additional KYC Details">
        <Form>
          <GridCustom>
            <Row className="justify-content-md-center">
              <Col xs={12} md={2} className="m-4">
                <Form.Check
                  type="radio"
                  label="Gross Annual Income"
                  name="income"
                />
              </Col>
              <Col xs={12} md={2} className="m-4">
                <Form.Check type="radio" label="Networth" name="income" />
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
                />
              </Col>
              <Col xs={12} md={3}>
                <SelectOption
                  name="Occupation"
                  label="Occupation"
                  select="Select"
                  options={occupation}
                  // changeFun={formHandeler}
                />
              </Col>
              <Col xs={12} md={3}>
                <SelectOption
                  name="politicalExposure"
                  label="Political Exposure"
                  select="Select"
                  options={politicalExposure}
                  // changeFun={formHandeler}
                />
              </Col>
              <Col xs={12} md={3}>
                <SelectOption
                  name="addressType"
                  label="KRA Address Type"
                  select="Select"
                  options={addressType}
                  // changeFun={formHandeler}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={3}>
                <InputText name="other1" label="Other" disabled={true} />
              </Col>
              <Col xs={12} md={3}>
                <InputText name="other2" label="Other" disabled={true} />
              </Col>
            </Row>
          </GridCustom>
        </Form>
      </Section>

      <Section heading="FATCA Details">
        <Form>
          <GridCustom>
            <Row>
              <Col xs={12} md={4}>
                <SelectOption
                  name="addressType"
                  label="Tax Residency in a country other than India? "
                  select="Select"
                  options={taxResidency}
                  // changeFun={formHandeler}
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
                />
              </Col>
              <Col xs={12} md={3}>
                <SelectOption
                  name="addressType"
                  label="Country of Citizenship "
                  select="Select"
                  options={countryList}
                  // changeFun={formHandeler}
                />
              </Col>
              <Col xs={12} md={3}>
                <SelectOption
                  name="addressType"
                  label="Country of Nationality"
                  select="Select"
                  options={countryList}
                  // changeFun={formHandeler}
                />
              </Col>
            </Row>
          </GridCustom>
        </Form>
      </Section>
    </React.Fragment>
  );
}

export default PrimaryHolder;
