import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// component
import InputText from "../../common/form-elements/InputText";
import DatePicker from "../../common/form-elements/DatePicker";

export default function AddNominee() {
  return (
    <Row>
      <Col xs={12} md={3}>
        <InputText
          name="NameNominee"
          label="Name of Nominee"
          value={"nnn"}
          changeFun={() => {}}
          mandatory="*"
        />
      </Col>
      <Col xs={12} md={3}>
        <InputText
          name="Relationship"
          label="Relationship"
          value={"nnn"}
          changeFun={() => {}}
          mandatory="*"
        />
      </Col>
      <Col xs={12} md={3}>
        <InputText
          name="Percent(%)"
          label="Percent(%)"
          value={"nnn"}
          changeFun={() => {}}
          mandatory="*"
        />
      </Col>
      <Col xs={12} md={3}>
        <DatePicker
          name="dateOfBirth"
          label="Date of Birth"
          value={"dateOfBirth"}
          mandatory="*"
          changeFun={() => {}}
        />
      </Col>
    </Row>
  );
}
