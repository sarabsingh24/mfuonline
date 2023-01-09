import React, { useState } from "react";
import { Form } from "react-bootstrap";

//components
import StakeHolder from "../../common/stake-holder/StakeHolder";
import { pageCount } from "../../reducer/Action";
import useCommonReducer from "../../common/customComp/useCommonReducer";

function GuardianHolder() {
 const [form, setForm] = useState({});
  const { stepsCount, dispatch } = useCommonReducer();

  const formSubmitHandeler = (e) => {
    e.preventDefault();
    console.log("GuardianHolder");
    if (true) {
      dispatch(pageCount(stepsCount + 1));
    }
  };
  
  return (
    <React.Fragment>
      <Form onSubmit={formSubmitHandeler}>
        <StakeHolder form={form} setForm={setForm} />
      </Form>
    </React.Fragment>
  );
}

export default GuardianHolder;
