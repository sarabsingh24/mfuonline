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
import { tabUpdate, pageCount } from "../../reducer/ActionNOT_In_USE";
import { validateForm } from "./BankAccountValidation";
import { bankAccountForm } from "../../reducer/Reducer/account/accountSlice";

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
  const [errors, setErrors] = useState([]);
  const { stepsCount, bankAccountsObj, dispatch } = useCommonReducer();

  const numberHandeler = (e) => {
    let val = e.target.value;
    setNumber(val);
  };

  const thisAccountHandeler = (e, num) => {
    let name = e.target.name;
    let value = e.target.value;
    let count = e.target.dataset.count;
    console.log(count);
    let newArray = form.map((obj) => {
      console.log(obj.sequenceNo, "=====", count);
      if (obj.sequenceNo === count) {
        return { ...obj, [name]: value };
      }
      return obj;
    });

    let newError = errors.map((item, index) => {
      if (index == count) {
        if (!!item[name]) {
          return { ...item, [name]: null };
        }
      }
      return item;
    });

    setErrors(newError);

    console.log(newArray);
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
    const account = (e) => {
      if (!Object.keys(e).length) {
        return true;
      }
      return false;
    };
    let isAccount = formErrors.every(account);
    if (!isAccount) {
      alert("error");
      setErrors(formErrors);
    } else {
      alert("success");
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

        {form?.map((detail, index) => {
          return (
            <BankAccountSection
              key={index}
              formObj={detail}
              setForm={setForm}
              count={index}
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
