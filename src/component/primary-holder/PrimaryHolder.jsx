import React, { useState } from "react";
import { Form } from "react-bootstrap";

//components
import StakeHolder from "../../common/stake-holder/StakeHolder";
import { pageCount } from "../../reducer/Action";
import useTabReducer from "../../common/customComp/useTabReducer";

function PrimaryHolder() {
  const [form, setForm] = useState({
    name: "",
    dateOfBirth: "",
    panPekrnNo: "",
    contactDetail: {
      residenceIsd: "",
      mobileIsdCode: "",
      primaryEmail: "",
    },
    otherDetail: {
      grossIncome: "",
      netWorth: "",
      netWorthDate: "",
      sourceOfWealth: "",
      sourceOfWealthOthers: "",
      occupation: "",
      occupationOthers: "",
      kraAddressType: "",
    },
    fatcaDetail: {
      taxResidencyFlag: "",
      birthCity: "",
      birthCountry: "",
      citizenshipCountry: "",
      nationalityCountry: "",
    },
  });
  const { stepsCount, dispatch } = useTabReducer();

  const formSubmitHandeler = (e) => {
    e.preventDefault();

    console.log("Primary Holder");
    if (true) {
      dispatch(pageCount(stepsCount + 1));
    }
  };

  return (
    <React.Fragment>
      <Form onSubmit={formSubmitHandeler}>
        <StakeHolder />
      </Form>
    </React.Fragment>
  );
}

export default PrimaryHolder;
