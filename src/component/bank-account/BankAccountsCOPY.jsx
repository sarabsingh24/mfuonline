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
import useCommonReducer from "../../common/customComp/useCommonReducer";
import { tabUpdate, pageCount, bankAccountForm } from "../../reducer/Action";

const bankRecord = {
  sequenceNo: "",
  defaultAccountFlag: true,
  accountNo: "",
  accountType: "",
  bankId: "",
  micrCode: "",
  ifscCode: "",
  bankProof: "",
};

function BankAccounts() {
  const [form, setForm] = useState([]);
  const [number, setNumber] = useState(1);
  const [btnFun, setBtnFun] = useState({});
  const [counts, setCounts] = useState([]);
  const [account, setAccount] = useState([]);
  const dummyArray = [bankRecord, bankRecord, bankRecord];
  const { stepsCount, tabsCreater, bankAccountsObj, dispatch } =
    useCommonReducer();

  useEffect(() => {
    if (bankAccountsObj.length) {
      setForm(bankAccountsObj);
    } else {
      setForm([]);
    }
  }, [bankAccountsObj]);

  const numberHandeler = (e) => {
    let val = e.target.value;
    setNumber(val);
  };

  // const thisAccountHandeler = (e, num) => {
  //   console.log(e.target, num);
  //   let name = e.target.name;
  //   let value = e.target.value;

  //   // setForm([...form,]);
  //   // setThisAccount({ ...thisAccount, [name]: value });
  // };

  useEffect(() => {
    let dummyArray = Array.from({ length: number }, (_, index) => index);
    setCounts(dummyArray);
  }, [number]);

  const formSubmitHandeler = (e) => {
    e.preventDefault();
    console.log("bank account");
    if (true) {
      // dispatch(bankAccountForm(  account ));
      // dispatch(pageCount(stepsCount + 1));
    }
  };

  useEffect(() => {
    setBtnFun(btnHandeler(dispatch, pageCount, stepsCount));
  }, [dispatch, stepsCount]);

  console.log(account);

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
                  value={number}
                  options={accountCount}
                  changeFun={numberHandeler}
                  mandatory=""
                />
              </Col>
            </Row>
          </GridCustom>
        </Section>

        {counts.map((_, index) => {
          return (
            <BankAccountSection
              key={index}
              count={index}
              form={form[index] || bankRecord}
              account={account}
              setAccount={setAccount}
            />
          );
        })}
        <FooterSection backBtn={true} nextBtn={true} btnFun={btnFun} />
      </Form>
    </React.Fragment>
  );
}

export default BankAccounts;
