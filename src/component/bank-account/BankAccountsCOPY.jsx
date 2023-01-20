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
import { validateForm } from "./BankAccountValidation";

const bankRecord = {
  sequenceNo: "0",
  defaultAccountFlag: true,
  accountNo: "",
  accountType: "",
  bankId: "",
  micrCode: "",
  ifscCode: "",
  bankProof: "",
  reAccountNo: "",
};

function BankAccounts() {
  const [form, setForm] = useState([]);
  const [number, setNumber] = useState("1");
  const [btnFun, setBtnFun] = useState({});
  const [errors, setErrors] = useState({});
  const { stepsCount, bankAccountsObj, dispatch } = useCommonReducer();

  const numberHandeler = (e) => {
    let val = e.target.value;
    setNumber(val);
  };

  const thisAccountHandeler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let count = e.target.dataset.count;

    let newArray = form.map((obj) => {
      if (
        name === "accountNo" ||
        name === "reAccountNo" ||
        name === "micrCode" ||
        name === "ifscCode"
      ) {
        if (obj.sequenceNo === count && !isNaN(value)) {
          return { ...obj, [name]: value };
        }

        return obj;
      } else {
        if (obj.sequenceNo === count) {
          return { ...obj, [name]: value };
        }
        return obj;
      }
    });

    setForm(newArray);
  };

  useEffect(() => {
    if (+number === 1) {
      setForm([...form.slice(0, 1)]);
    }
    if (+number === 2) {
      if (form.length > 2) {
        setForm([...form.slice(0, 2)]);
      } else {
        setForm([...form, { ...bankRecord, sequenceNo: "1" }]);
      }
    }
    if (+number === 3) {
      if (form.length === 2) {
        setForm([...form, { ...bankRecord, sequenceNo: "2" }]);
      } else {
        setForm([
          ...form,
          { ...bankRecord, sequenceNo: "1" },
          { ...bankRecord, sequenceNo: "2" },
        ]);
      }
    }
  }, [number]);

  const formSubmitHandeler = (e) => {
    e.preventDefault();
    console.log("bank account");
    const formErrors = validateForm(form);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // form.map((item) => delete item.reAccountNo);
      dispatch(bankAccountForm(form));
      dispatch(pageCount(stepsCount + 1));
    }
  };

  useEffect(() => {
    setBtnFun(btnHandeler(dispatch, pageCount, stepsCount));
  }, [dispatch, stepsCount]);

  useEffect(() => {
    if (Object.keys(bankAccountsObj).length) {
      setForm(bankAccountsObj);
    } else {
      setForm([bankRecord]);
    }
  }, [bankAccountsObj]);

  console.log(form);
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
                  value={number || ""}
                  options={accountCount}
                  changeFun={numberHandeler}
                  mandatory=""
                />
              </Col>
            </Row>
          </GridCustom>
        </Section>

        {form?.map((item, index) => {
          return (
            <BankAccountSection
              key={index}
              count={index}
              form={item}
              thisAccountHandeler={thisAccountHandeler}
              errors={errors}
            />
          );
        })}

        <FooterSection backBtn={true} nextBtn={true} btnFun={btnFun} />
      </Form>
    </React.Fragment>
  );
}

export default BankAccounts;
