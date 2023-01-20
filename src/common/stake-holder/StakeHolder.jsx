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

function StakeHolder({ form, setForm, holderType, errors, setErrors }) {
  const [grossIncomeRadio, setGrossIncomeRadio] = useState(false);
  const [networthRadio, setNetworthRadio] = useState(false);
  const [btnFun, setBtnFun] = useState({});
  const [isOtherSourceOfWealth, setIsOtherSourceOfWealth] = useState(true);
  const [isOtherOccupation, setIsOtherOccupation] = useState(true);
  const { stepsCount, dispatch } = useCommonReducer();

  // on change handeler
  const formHandeler = (e) => {
    let name = e.target.name;
    let val = e.target.value;

    if (name === "panPekrnNo" || name === "confirmpanPekrnNo") {
      let valueCase = val.toUpperCase()
      setForm({
        ...form,
        [name]: valueCase,
       
      });
    } else if (
      // name === "residenceIsd" ||
      // name === "residenceStd" ||
      // name === "residencePhoneNo" ||
      name === "primaryEmail"
    ) {
      setForm({
        ...form,
        contactDetail: {
          ...form.contactDetail,
          [name]: val,
        },
      });

      if (!!errors[name]) {
        setErrors({ ...errors, [name]: null });
      }
    } else if (name === "mobileIsdCode") {
      if (!isNaN(val)) {
        setForm({
          ...form,
          contactDetail: {
            ...form.contactDetail,
            mobileIsdCode: val,
          },
        });
      }
    } else if (name === "primaryMobileNo") {
      if (!isNaN(val)) {
        setForm({
          ...form,
          contactDetail: {
            ...form.contactDetail,
            primaryMobileNo: val,
          },
        });
      }
    } else if (name === "grossIncome") {
      setForm({
        ...form,
        otherDetail: {
          ...form.otherDetail,
          otherInfo: "string",
          [name]: val,
          netWorth: "",
          netWorthDate: "",
        },
      });
    } else if (name === "netWorth" || name === "netWorthDate") {
      setForm({
        ...form,
        otherDetail: {
          ...form.otherDetail,
          otherInfo: "string",
          [name]: val,
          grossIncome: "",
        },
      });
    } else if (
      name === "sourceOfWealth" ||
      name === "sourceOfWealthOthers" ||
      name === "occupation" ||
      name === "occupationOthers" ||
      name === "kraAddressType" ||
      name === "pep"
    ) {
      setForm({
        ...form,
        otherDetail: {
          ...form.otherDetail,
          otherInfo: "string",
          [name]: val,
        },
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
        fatcaDetail: {
          ...form.fatcaDetail,
          [name]: val,
        },
      });
    } else {
      setForm({ ...form, [name]: val });
    }

    if (name === "sourceOfWealth" && val === "08") {
      setIsOtherSourceOfWealth(false);
    } else if (name === "sourceOfWealth" && val !== "08") {
      setIsOtherSourceOfWealth(true);
      setForm({
        ...form,
        otherDetail: {
          ...form.otherDetail,
          [name]: val,
        },
      });
    }

    if (name === "occupation" && val === "99") {
      setIsOtherOccupation(false);
    } else if (name === "occupation" && val !== "99") {
      setIsOtherOccupation(true);
      setForm({
        ...form,
        otherDetail: { ...form.otherDetail, [name]: val, occupationOthers: "" },
      });
    }
  };

  // radio btn show hide
  const incomeStatus = (e) => {
    let status = e.target.dataset.name;
    if (status === "GAI") {
      setForm({
        ...form,
        otherDetail: {
          ...form.otherDetail,
          otherInfo: "string",
          netWorth: "",
          netWorthDate: "",
        },
      });
      setGrossIncomeRadio(true);
      setNetworthRadio(false);
    } else {
      setForm({
        ...form,
        otherDetail: {
          ...form.otherDetail,
          otherInfo: "string",
          grossIncome: "",
        },
      });
      setGrossIncomeRadio(false);
      setNetworthRadio(true);
    }
  };

  useEffect(() => {
    setBtnFun(btnHandeler(dispatch, pageCount, stepsCount));
  }, [dispatch, stepsCount]);

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
                value={form?.name || ""}
                changeFun={formHandeler}
              />
            </Col>
            <Col xs={12} md={4}>
              <DatePicker
                name="dateOfBirth"
                label="Date of Birth"
                value={form?.dateOfBirth}
                mandatory="*"
                changeFun={formHandeler}
              />
            </Col>
            <Col xs={12} md={4}>
              <InputText
                name="panPekrnNo"
                label="PAN / PEKRN"
                type="password"
                value={form?.panPekrnNo.toUpperCase() || ""}
                mandatory=""
                changeFun={formHandeler}
                errors={errors}
              />
            </Col>
            <Col xs={12} md={{ span: 4, offset: 8 }}>
              <InputText
                name="confirmpanPekrnNo"
                label="Re-Enter PAN / PEKRN"
                value={form?.confirmpanPekrnNo.toUpperCase() || ""}
                mandatory=""
                changeFun={formHandeler}
                errors={errors}
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
                    value={form?.contactDetail?.mobileIsdCode || ""}
                    onChange={formHandeler}
                  />
                  <Form.Control
                    name="primaryMobileNo"
                    maxLength={10}
                    style={{ flex: "8" }}
                    value={form?.contactDetail?.primaryMobileNo || ""}
                    onChange={formHandeler}
                  />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col xs={12} md={4}>
              <InputText
                name="primaryEmail"
                label="Email"
                value={form?.contactDetail?.primaryEmail || ""}
                mandatory="*"
                changeFun={formHandeler}
                errors={errors}
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
                checked={
                  (form?.otherDetail?.grossIncome || grossIncomeRadio) &&
                  "checked"
                }
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
                checked={
                  (form?.otherDetail?.netWorth || networthRadio) && "checked"
                }
              />
            </Col>
          </Row>
          <Row
            style={{
              display:
                form?.otherDetail?.grossIncome || grossIncomeRadio
                  ? "flex"
                  : "none",
            }}
          >
            <Col xs={12} md={3}>
              <SelectOption
                name="grossIncome"
                label="Gross Annual Income"
                value={form?.otherDetail?.grossIncome || ""}
                options={grossAnnualIncomeOptions}
                changeFun={formHandeler}
                mandatory="*"
              />
            </Col>
          </Row>
          <Row
            style={{
              display:
                form?.otherDetail?.netWorth || networthRadio ? "flex" : "none",
            }}
          >
            <Col xs={12} md={3}>
              <InputText
                name="netWorth"
                label="Networth (in Rs.)"
                value={form?.otherDetail?.netWorth || ""}
                mandatory="*"
                changeFun={formHandeler}
              />
            </Col>
            <Col xs={12} md={3}>
              <DatePicker
                name="netWorthDate"
                label="As on date"
                value={form?.otherDetail?.netWorthDate || ""}
                changeFun={formHandeler}
                mandatory="*"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={3}>
              <SelectOption
                name="sourceOfWealth"
                label="Source of Wealth"
                value={form?.otherDetail?.sourceOfWealth || ""}
                options={sourceOfWealthOptions}
                changeFun={formHandeler}
                mandatory="*"
              />
            </Col>
            <Col xs={12} md={3}>
              <SelectOption
                name="occupation"
                label="Occupation"
                value={form?.otherDetail?.occupation || ""}
                options={occupationOptions}
                changeFun={formHandeler}
                mandatory="*"
              />
            </Col>
            <Col xs={12} md={3}>
              <SelectOption
                name="pep"
                label="Political Exposure"
                value={form?.otherDetail?.pep || ""}
                options={politicalExposureOptions}
                changeFun={formHandeler}
                mandatory="*"
              />
            </Col>
            <Col xs={12} md={3}>
              <SelectOption
                name="kraAddressType"
                label="KRA Address Type"
                value={form?.otherDetail?.kraAddressType || ""}
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
                value={form?.otherDetail?.sourceOfWealthOthers || ""}
                disabled={isOtherSourceOfWealth}
                mandatory="*"
                changeFun={formHandeler}
              />
            </Col>
            <Col xs={12} md={3}>
              <InputText
                name="occupationOthers"
                label="Other"
                value={form?.otherDetail?.occupationOthers || ""}
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
                value={form?.fatcaDetail?.taxResidencyFlag || ""}
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
                value={form?.fatcaDetail?.birthCity || ""}
                changeFun={formHandeler}
                mandatory="*"
              />
            </Col>
            <Col xs={12} md={3}>
              <SelectOption
                name="birthCountry"
                label="Country of Birth "
                value={form?.fatcaDetail?.birthCountry || ""}
                options={countryListOptions}
                changeFun={formHandeler}
                mandatory="*"
              />
            </Col>
            <Col xs={12} md={3}>
              <SelectOption
                name="citizenshipCountry"
                label="Country of Citizenship "
                value={form?.fatcaDetail?.citizenshipCountry || ""}
                options={countryListOptions}
                changeFun={formHandeler}
                mandatory="*"
              />
            </Col>
            <Col xs={12} md={3}>
              <SelectOption
                name="nationalityCountry"
                label="Country of Nationality"
                value={form?.fatcaDetail?.nationalityCountry || ""}
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
