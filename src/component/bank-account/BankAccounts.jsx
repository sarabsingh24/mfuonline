import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../Style.css";

//component

import Section from "../../common/section/Section";
import GridCustom from "../../common/grid-custom/GridCustom";
import SelectOption from "../../common/form-elements/SelectOption";
import { accountCount } from "./accountData";
import BankAccountSection from "./BankAccountSection";
import FooterSection from "../../common/footerSection/FooterSection";
import { btnHandeler } from "../../common/helper/Helper";
import useTabReducer from "../../common/customComp/useTabReducer";
import { tabUpdate, pageCount } from "../../reducer/Action";

function BankAccounts() {
  const [form, setForm] = useState({
    accounts: "1",
  });
  const [btnFun, setBtnFun] = useState({});

  const [counts, setCounts] = useState([]);

  const { stepsCount, tabsCreater, dispatch } = useTabReducer();

  const formHandeler = (e) => {
    let name = e.target.name;
    let val = e.target.value;

    setForm({ ...form, [name]: val });
  };

  useEffect(() => {
    let dummyArray = Array.from({ length: form.accounts }, (_, index) => index);
    setCounts(dummyArray);
  }, [form.accounts]);

  const formSubmitHandeler = (e) => {
    e.preventDefault();
    console.log("bank account");
    if (true) {
      dispatch(pageCount(stepsCount + 1));
    }
  };

  useEffect(() => {
    setBtnFun(btnHandeler(dispatch, pageCount, stepsCount));
  }, [dispatch, stepsCount]);

  return (
    <React.Fragment>
      <Form onSubmit={formSubmitHandeler}>
        <Section heading="Number of bank account">
          <GridCustom>
            <Row>
              <Col xs={12} md={4}>
                <SelectOption
                  name="accounts"
                  label="Bank Account(s)"
                  select={false}
                  options={accountCount}
                  changeFun={formHandeler}
                  mandatory="*"
                />
              </Col>
            </Row>
          </GridCustom>
        </Section>

        {counts.map((__, index) => {
          return <BankAccountSection key={index} count={index} />;
        })}
        <FooterSection backBtn={true} nextBtn={true} btnFun={btnFun} />
      </Form>
    </React.Fragment>
  );
}

export default BankAccounts;
