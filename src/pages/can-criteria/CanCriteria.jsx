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



function CanCriteria() {
  return (
    <Section heading="Account Type">
      <Form>
        <GridCustom>
          <Row>
            <Col xs={12} md={6}>
              ggg
            </Col>
            <Col xs={12} md={6}>
              gghg
            </Col>
          </Row>

          <Row>
            <Col className="btn-right-align ">
              <ButtonCustom text="Back" />
              <ButtonCustom text="Next" />
            </Col>
          </Row>
        </GridCustom>
      </Form>
    </Section>
  );
}

export default CanCriteria;
