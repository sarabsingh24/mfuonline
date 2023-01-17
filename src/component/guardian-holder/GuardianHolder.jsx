import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

//components
import StakeHolder from "../../common/stake-holder/StakeHolder";
import { pageCount, guardianHolderForm } from "../../reducer/Action";
import useCommonReducer from "../../common/customComp/useCommonReducer";
import { commonFormField } from "../../common/stake-holder/stakeHolderData";

function GuardianHolder() {
const [form, setForm] = useState(commonFormField);
  const { stepsCount,guardianHolderObj, dispatch } = useCommonReducer();


  useEffect(() => {
    if (Object.keys(guardianHolderObj).length) {
      setForm(guardianHolderObj);
    }
  }, [guardianHolderObj]);


  const formSubmitHandeler = (e) => {
    e.preventDefault();
    console.log("GuardianHolder");
    if (true) {
        dispatch(guardianHolderForm({ ...guardianHolderObj,holderType: "GR", ...form }));
      dispatch(pageCount(stepsCount + 1));
    }
  };
  
  return (
    <React.Fragment>
      <Form onSubmit={formSubmitHandeler}>
        <StakeHolder form={form} setForm={setForm} holderType={"Guardian"} />
      </Form>
    </React.Fragment>
  );
}

export default GuardianHolder;
