import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../Style.css";

//component
import Section from "../../common/section/Section";
import ButtonCustom from "../../common/button/ButtonCustom";
import GridCustom from "../../common/grid-custom/GridCustom";
import SelectOption from "../../common/form-elements/SelectOption";
import {  accountCount,} from "./accountData";
import BankAccountSection from './BankAccountSection'

function BankAccounts() {
  const [form, setForm] = useState({
    accounts: "1",
  });
  const [counts, setCounts] = useState([]);

  const formHandeler = (e) => {
    let name = e.target.name;
    let val = e.target.value;

    setForm({ ...form, [name]: val });
  };

  useEffect(() => {
    let dummyArray = Array.from({ length: form.accounts }, (_, index) => index);
    setCounts(dummyArray);
  }, [form.accounts]);

  return (
    <React.Fragment>
      <Section heading="Number of bank account">
        <Form>
          <GridCustom>
            <Row>
              <Col xs={12} md={4}>
                <SelectOption
                  name="accounts"
                  label="Bank Account(s)"
                  select={false}
                  options={accountCount}
                  changeFun={formHandeler}
                />
              </Col>
            </Row>
          </GridCustom>
        </Form>
      </Section>

      {counts.map(() => {
        return <BankAccountSection />;
      })}
    </React.Fragment>
  );
}

export default BankAccounts;
