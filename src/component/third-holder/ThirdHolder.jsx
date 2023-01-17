import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

//components
import StakeHolder from "../../common/stake-holder/StakeHolder";
import { pageCount, thirdHolderForm } from "../../reducer/Action";
import useCommonReducer from "../../common/customComp/useCommonReducer";
import { commonFormField } from "../../common/stake-holder/stakeHolderData";

function ThirdHolder() {
  const [form, setForm] = useState(commonFormField);
  const { stepsCount, thirdHolderObj, dispatch } = useCommonReducer();

  useEffect(() => {
    if (Object.keys(thirdHolderObj).length) {
      setForm(thirdHolderObj);
    }
  }, [thirdHolderObj]);

  const formSubmitHandeler = (e) => {
    e.preventDefault();

    console.log("Third holder");
    if (true) {
      dispatch(thirdHolderForm({ ...thirdHolderObj,holderType: "TH", ...form }));
      dispatch(pageCount(stepsCount + 1));
    }
  };

  return (
    <React.Fragment>
      <Form onSubmit={formSubmitHandeler}>
        <StakeHolder
          form={form}
          setForm={setForm}
          holderType={"Third Holder"}
        />
      </Form>
    </React.Fragment>
  );
}

export default ThirdHolder;
