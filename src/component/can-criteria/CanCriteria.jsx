import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../Style.css";

//component
import GridCustom from "../../common/grid-custom/GridCustom";
import Section from "../../common/section/Section";
import ButtonCustom from "../../common/button/ButtonCustom";
import SelectOption from "../../common/form-elements/SelectOption";
import {
  natureOptions,
  singleOptions,
  jointOptions,
  singleIndividualOptions,
  singleMinorOptions,
  singleSoleProprietorOptions,
  holderOptions,
} from "./canCriteriaData";



function CanCriteria() {
   const [form, setForm] = useState({
     nature: "",
     investor: "",
     textStatus: "",
     holders: "",
   });

   const [taxList, setTaxList] = useState([]);
   const [investorList, setInvestorList] = useState([]);

   const { nature, investor } = form;

   const formHandeler = (e) => {
     let name = e.target.name;
     let val = e.target.value;

     setForm({ ...form, [name]: val });
   };

   useEffect(() => {
     if (nature === "SI") {
       setInvestorList(singleOptions);
     } else if (nature === "JO") {
       setInvestorList(jointOptions);
     } else if (nature === "AS") {
       setInvestorList(jointOptions);
     } else {
       setInvestorList([]);
     }
   }, [nature]);

   useEffect(() => {
     if (investor === "I") {
       setTaxList(singleIndividualOptions);
     } else if (investor === "M") {
       setTaxList(singleMinorOptions);
     } else if (investor === "S") {
       setTaxList(singleSoleProprietorOptions);
     } else {
       setTaxList([]);
     }
   }, [investor]);
  return (
    <Section heading="Account Type">
      <Form>
        <GridCustom>
          <Row>
            <Col xs={12} md={6}>
              <SelectOption
                name="nature"
                label="Holding Nature"
                select="Select"
                options={natureOptions}
                changeFun={formHandeler}
              />
            </Col>
            <Col xs={12} md={6}>
              <SelectOption
                name="investor"
                label="Investor Category"
                select="Select"
                options={investorList}
                changeFun={formHandeler}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <SelectOption
                name="textStatus"
                label="Tax Status"
                select="Select"
                options={taxList}
                changeFun={formHandeler}
              />
            </Col>
            <Col xs={12} md={6}>
              <SelectOption
                name="holders"
                label="Holders"
                select="Select"
                options={holderOptions}
                changeFun={formHandeler}
              />
            </Col>
          </Row>
          <Row>
            <Col className="btn-right-align ">
              <ButtonCustom text="Next" />
            </Col>
          </Row>
        </GridCustom>
      </Form>
    </Section>
  );
}

export default CanCriteria;
