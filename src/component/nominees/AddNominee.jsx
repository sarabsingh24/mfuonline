import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// component
import GridCustom from "../../common/grid-custom/GridCustom";
import Section from "../../common/section/Section";
import InputText from "../../common/form-elements/InputText";
import DatePicker from '../../common/form-elements/DatePicker'


export default function AddNominee({ count, form, thisAccountHandeler }) {
  let order = count === 0 ? "First" : count === 1 ? "Second" : "Third";

  
  
  return (
    <Section heading={`${order} Nominee`}>
      <GridCustom>
        <Row>
          <Col xs={12} md={3}>
            <InputText
              name="nomineeName"
              label="Name of Nominee"
              value={form?.nomineeName || ''}
              count={count}
              changeFun={thisAccountHandeler}
              mandatory="*"
              
            />
          </Col>
          <Col xs={12} md={3}>
            <InputText
              name="relation"
              label="Relationship"
              value={form?.relation || ''}
              count={count}
              changeFun={thisAccountHandeler}
              mandatory="*"
            />
          </Col>
          <Col xs={12} md={3}>
            <InputText
              name="percentage"
              label="Percent(%)"
              value={form?.percentage || ''}
              count={count}
              changeFun={thisAccountHandeler}
              mandatory="*"
            />
          </Col>
          <Col xs={12} md={3}>
            <DatePicker
              name="dateOfBirth"
              label="Date of Birth"
              value={form?.dateOfBirth || ''}
              count={count}
              changeFun={thisAccountHandeler}
              mandatory="*"
            />
          </Col>
        </Row>
      </GridCustom>
    </Section>
  );
}
