import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

//components
import StakeHolder from "../../common/stake-holder/StakeHolder";
import { pageCount, secondHolderForm } from "../../reducer/Action";
import useCommonReducer from "../../common/customComp/useCommonReducer";
import { commonFormField } from "../../common/stake-holder/stakeHolderData";

function SecondHolder() {
const [form, setForm] = useState( commonFormField );
  const { stepsCount,secondHolderObj, dispatch } = useCommonReducer();



 useEffect(() => {
   if (Object.keys(secondHolderObj).length) {
     setForm(secondHolderObj);
   }
 }, [secondHolderObj]);

  const formSubmitHandeler = (e) => {
    e.preventDefault();
    console.log("second Holder");
    if (true) {
      dispatch(secondHolderForm({ ...secondHolderObj, ...form }));
      dispatch(pageCount(stepsCount + 1));
    }
  };
  
  return (
    <React.Fragment>
      <Form onSubmit={formSubmitHandeler}>
        <StakeHolder
          form={form}
          setForm={setForm}
          holderType={"Second Holder"}
        />
      </Form>
    </React.Fragment>
  );
}

export default SecondHolder;
