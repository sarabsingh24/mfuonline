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
import useCommonReducer from "../customComp/useCommonReducer";
import {
  sourceOfWealthOptions,
  occupationOptions,
  politicalExposureOptions,
  addressTypeOptions,
  taxResidencyOptions,
  countryListOptions,
  grossAnnualIncomeOptions,
} from "./stakeHolderData";

function StakeHolder({ form, setForm, holderType }) {
  const [grossIncomeRadio, setGrossIncomeRadio] = useState(false);
  const [networthRadio, setNetworthRadio] = useState(false);
  const [btnFun, setBtnFun] = useState({});
  const [isOtherSourceOfWealth, setIsOtherSourceOfWealth] = useState(true);
  const [isOtherOccupation, setIsOtherOccupation] = useState(true);

  const { stepsCount, dispatch } = useCommonReducer();

  const { name, dateOfBirth, panPekrnNo, confirmpanPekrnNo } = form;

  const {
    residenceIsd,
    residenceStd,
    residencePhoneNo,
    mobileIsdCode,
    primaryMobileNo,
    primaryEmail,
  } = form.contactDetail;
  const {
    grossIncome,
    netWorth,
    netWorthDate,
    sourceOfWealth,
    sourceOfWealthOthers,
    occupation,
    occupationOthers,
    kraAddressType,
    pep,
  } = form.otherDetail;

  const {
    taxResidencyFlag,
    birthCity,
    birthCountry,
    citizenshipCountry,
    nationalityCountry,
  } = form.fatcaDetail;

  // on change handeler
  const formHandeler = (e) => {
    let name = e.target.name;
    let val = e.target.value;

    console.log(name, val);

    if (
      name === "residenceIsd" ||
      name === "residenceStd" ||
      name === "residencePhoneNo" ||
      name === "mobileIsdCode" ||
      name === "primaryMobileNo" ||
      name === "primaryEmail"
    ) {
      setForm({
        ...form,
        contactDetail: { ...form.contactDetail, [name]: val },
      });
    } else if (
      name === "grossIncome" ||
      name === "netWorth" ||
      name === "netWorthDate" ||
      name === "sourceOfWealth" ||
      name === "sourceOfWealthOthers" ||
      name === "occupation" ||
      name === "occupationOthers" ||
      name === "kraAddressType" ||
      name === "pep"
    ) {
      console.log(name, val, "=========================");
      setForm({
        ...form,
        otherDetail: { ...form.otherDetail, [name]: val },
      });
    } else if (
      name === "taxResidencyFlag" ||
      name === "birthCity" ||
      name === "birthCountry" ||
      name === "citizenshipCountry" ||
      name === "nationalityCountry"
    ) {
      setForm({
        ...form,
        fatcaDetail: { ...form.fatcaDetail, [name]: val },
      });
    } else {
      setForm({ ...form, [name]: val });
    }

    // if (!!errors[name]) {
    //   setErrors({ ...errors, [name]: null });
    // }

    if (name === "sourceOfWealth" && val === "08") {
      setIsOtherSourceOfWealth(false);
    } else if(name === "sourceOfWealth" && val !== "08") {
      setIsOtherSourceOfWealth(true);
      setForm({ ...form, otherDetail:{...form.otherDetail,[name]: val, sourceOfWealthOthers: "" }});
    }

    if (name === "occupation" && val === "99") {
      setIsOtherOccupation(false);
    } else if (name === "occupation" && val !== "99") {
      setIsOtherOccupation(true);
       setForm({ ...form, otherDetail:{...form.otherDetail,[name]: val, occupationOthers: "" }});
    }
  };

  // radio btn show hide
  const incomeStatus = (e) => {
    let status = e.target.dataset.name;
    if (status === "GAI") {
      setGrossIncomeRadio(true);
      setNetworthRadio(false);
    } else {
      setGrossIncomeRadio(false);
      setNetworthRadio(true);
    }
  };

  useEffect(() => {
    setBtnFun(btnHandeler(dispatch, pageCount, stepsCount));
  }, [dispatch, stepsCount]);

  // console.log(form);

  return (
    <React.Fragment>
      <Section heading={`${holderType} Basic Details`}>
        <GridCustom>
          <Row>
            <Col xs={12} md={4}>
              <InputText
                name="name"
                label="Name"
                mandatory="*"
                value={form.name || name}
                changeFun={formHandeler}
              />
            </Col>
            <Col xs={12} md={4}>
              <DatePicker
                name="dateOfBirth"
                label="Date of Birth"
                value={dateOfBirth}
                mandatory="*"
                changeFun={formHandeler}
              />
            </Col>
            <Col xs={12} md={4}>
              <InputText
                name="panPekrnNo"
                label="PAN / PEKRN"
                value={form.panPekrnNo || panPekrnNo}
                mandatory=""
                changeFun={formHandeler}
              />
            </Col>
            <Col xs={12} md={{ span: 4, offset: 8 }}>
              <InputText
                name="confirmpanPekrnNo"
                label="Re-Enter PAN / PEKRN"
                value={form.confirmpanPekrnNo || confirmpanPekrnNo}
                mandatory=""
                changeFun={formHandeler}
              />
            </Col>
          </Row>

          <Row>
            {/* <Col xs={12} md={4}>
              <Form.Group className="mb-4">
                <Form.Label>Res. (ISD-STD-Phone)</Form.Label>
                <InputGroup>
                  <Form.Control
                    name="residenceIsd"
                    maxLength={2}
                    value={
                      form.contactDetail?.residenceIsd || residenceIsd
                    }
                    onChange={formHandeler}
                  />
                  <Form.Control
                    name="residenceStd"
                    style={{ flex: "2" }}
                    maxLength={3}
                    value={
                      form.contactDetail?.residenceStd || residenceStd
                    }
                    onChange={formHandeler}
                  />
                  <Form.Control
                    name="residencePhoneNo"
                    style={{ flex: "8" }}
                    value={
                      form.contactDetail?.residencePhoneNo ||
                      residencePhoneNo
                    }
                    onChange={formHandeler}
                  />
                </InputGroup>
              </Form.Group>
            </Col> */}
            <Col xs={12} md={4}>
              <Form.Group className="mb-4">
                <Form.Label>
                  Mobile (ISD-Mobile)<span className="red">*</span>
                </Form.Label>
                <InputGroup>
                  <Form.Control
                    name="mobileIsdCode"
                    maxLength={2}
                    value={form.contactDetail?.mobileIsdCode || mobileIsdCode}
                    onChange={formHandeler}
                  />
                  <Form.Control
                    name="primaryMobileNo"
                    style={{ flex: "8" }}
                    value={
                      form.contactDetail?.primaryMobileNo || primaryMobileNo
                    }
                    onChange={formHandeler}
                  />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col xs={12} md={4}>
              <InputText
                name="primaryEmail"
                label="Email"
                value={form.contactDetail?.primaryEmail || primaryEmail}
                mandatory="*"
                changeFun={formHandeler}
              />
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6}></Col>
          </Row>
        </GridCustom>
      </Section>

      <Section heading={`${holderType} Additional KYC Details`}>
        <GridCustom>
          <Row className="justify-content-md-center">
            <Col xs={12} md={2} className="m-4">
              <Form.Check
                type="radio"
                label="Gross Annual Income"
                name="income"
                data-name="GAI"
                onChange={incomeStatus}
                mandatory="*"
              />
            </Col>
            <Col xs={12} md={2} className="m-4">
              <Form.Check
                type="radio"
                label="Networth"
                name="income"
                data-name="NW"
                onChange={incomeStatus}
                mandatory="*"
              />
            </Col>
          </Row>
          <Row style={{ display: grossIncomeRadio ? "flex" : "none" }}>
            <Col xs={12} md={3}>
              <SelectOption
                name="grossIncome"
                label="Gross Annual Income"
                value={form.otherDetail?.grossIncome || grossIncome}
                options={grossAnnualIncomeOptions}
                changeFun={formHandeler}
                mandatory="*"
              />
            </Col>
          </Row>
          <Row style={{ display: networthRadio ? "flex" : "none" }}>
            <Col xs={12} md={3}>
              <InputText
                name="netWorth"
                label="Networth (in Rs.)"
                value={form.otherDetail?.netWorth || netWorth}
                mandatory="*"
                changeFun={formHandeler}
              />
            </Col>
            <Col xs={12} md={3}>
              <DatePicker
                name="netWorthDate"
                label="As on date"
                value={netWorthDate}
                mandatory="*"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={3}>
              <SelectOption
                name="sourceOfWealth"
                label="Source of Wealth"
                value={form.otherDetail?.sourceOfWealth || sourceOfWealth}
                options={sourceOfWealthOptions}
                changeFun={formHandeler}
                mandatory="*"
              />
            </Col>
            <Col xs={12} md={3}>
              <SelectOption
                name="occupation"
                label="Occupation"
                value={form.otherDetail?.occupation || occupation}
                options={occupationOptions}
                changeFun={formHandeler}
                mandatory="*"
              />
            </Col>
            <Col xs={12} md={3}>
              <SelectOption
                name="pep"
                label="Political Exposure"
                value={form.otherDetail?.pep || pep}
                options={politicalExposureOptions}
                changeFun={formHandeler}
                mandatory="*"
              />
            </Col>
            <Col xs={12} md={3}>
              <SelectOption
                name="kraAddressType"
                label="KRA Address Type"
                value={form.otherDetail?.kraAddressType || kraAddressType}
                options={addressTypeOptions}
                changeFun={formHandeler}
                mandatory="*"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={3}>
              <InputText
                name="sourceOfWealthOthers"
                label="Other"
                value={
                  form.otherDetail?.sourceOfWealthOthers || sourceOfWealthOthers
                }
                disabled={isOtherSourceOfWealth}
                mandatory="*"
                changeFun={formHandeler}
              />
            </Col>
            <Col xs={12} md={3}>
              <InputText
                name="occupationOthers"
                label="Other"
                value={form.otherDetail?.occupationOthers || occupationOthers}
                disabled={isOtherOccupation}
                mandatory="*"
                changeFun={formHandeler}
              />
            </Col>
          </Row>
        </GridCustom>
      </Section>

      <Section heading={`${holderType} FATCA Details`}>
        <GridCustom>
          <Row>
            <Col xs={12} md={4}>
              <SelectOption
                name="taxResidencyFlag"
                label="Tax Residency in a country other than India? "
                value={form.fatcaDetail?.taxResidencyFlag || taxResidencyFlag}
                options={taxResidencyOptions}
                changeFun={formHandeler}
                mandatory="*"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={3}>
              <InputText
                name="birthCity"
                label="Place of Birth"
                value={form.fatcaDetail?.birthCity || birthCity}
                changeFun={formHandeler}
                mandatory="*"
              />
            </Col>
            <Col xs={12} md={3}>
              <SelectOption
                name="birthCountry"
                label="Country of Birth "
                value={form.fatcaDetail?.birthCountry || birthCountry}
                options={countryListOptions}
                changeFun={formHandeler}
                mandatory="*"
              />
            </Col>
            <Col xs={12} md={3}>
              <SelectOption
                name="citizenshipCountry"
                label="Country of Citizenship "
                value={
                  form.fatcaDetail?.citizenshipCountry || citizenshipCountry
                }
                options={countryListOptions}
                changeFun={formHandeler}
                mandatory="*"
              />
            </Col>
            <Col xs={12} md={3}>
              <SelectOption
                name="nationalityCountry"
                label="Country of Nationality"
                value={
                  form.fatcaDetail?.nationalityCountry || nationalityCountry
                }
                options={countryListOptions}
                changeFun={formHandeler}
                mandatory="*"
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
