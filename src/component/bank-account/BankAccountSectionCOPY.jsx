import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../Style.css";

//component
import Section from "../../common/section/Section";
import InputText from "../../common/form-elements/InputText";
import GridCustom from "../../common/grid-custom/GridCustom";
import SelectOption from "../../common/form-elements/SelectOption";
import { accountType, bankProofOptions } from "./accountData";

function BankAccountSection({ count, form, account, setAccount }) {
  const [thisAccount, setThisAccount] = useState({
    ...form,
    reAccountNo: form.accountNo || "",
  });
  let accountCount = count === 0 ? "Default" : count === 1 ? "Second" : "Third";

  const thisAccountHandeler = (e, num) => {
    console.log(e.target, num);
    let name = e.target.name;
    let value = e.target.value;
    let isDefaultAccount = count === 0 ? true : false;
    let copyThisAccount = {
      ...thisAccount,
      defaultAccountFlag: isDefaultAccount,
      sequenceNo: count + 1,
    };

    setThisAccount({ ...copyThisAccount, [name]: value });
  };

  useEffect(() => {
    // delete copyThisAccount.reAccountNo;

    setAccount([thisAccount]);
  }, [thisAccount]);

  console.log(thisAccount);

  return (
    <Section heading={`${accountCount} Bank Account details`}>
      <GridCustom>
        <Row>
          <Col xs={12} md={4}>
            <InputText
              name="accountNo"
              label="Bank A/c No"
              type="password"
              value={thisAccount?.accountNo}
              changeFun={() => thisAccountHandeler(count)}
              mandatory="*"
            />
          </Col>
          <Col xs={12} md={4}>
            <InputText
              name="reAccountNo"
              label="Re-Enter Bank A/c No"
              value={thisAccount?.reAccountNo}
              changeFun={thisAccountHandeler}
              mandatory="*"
            />
          </Col>
          <Col xs={12} md={4}>
            <SelectOption
              name="accountType"
              label="Account Type"
              value={thisAccount?.accountType}
              options={accountType}
              changeFun={thisAccountHandeler}
              mandatory="*"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <InputText
              name="bankId"
              label="Bank"
              value={thisAccount?.bankId}
              changeFun={(e) => thisAccountHandeler(e, count)}
              mandatory="*"
            />
          </Col>
          <Col xs={12} md={4}>
            <InputText
              name="micrCode"
              label="MICR"
              value={thisAccount?.micrCode}
              changeFun={thisAccountHandeler}
              mandatory="*"
            />
          </Col>
          <Col xs={12} md={4}>
            <InputText
              name="ifscCode"
              label="IFSC"
              value={thisAccount?.ifscCode}
              changeFun={thisAccountHandeler}
              mandatory="*"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <SelectOption
              name="bankProof"
              label="Bank Proof"
              value={thisAccount?.bankProof}
              options={bankProofOptions}
              changeFun={thisAccountHandeler}
              mandatory="*"
            />
          </Col>
        </Row>
      </GridCustom>
      {/* <button onClick={addHandeler}>add</button> */}
    </Section>
  );
}

export default BankAccountSection;
