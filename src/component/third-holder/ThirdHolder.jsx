import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

//components
import StakeHolder from "../../common/stake-holder/StakeHolder";
import { pageCount, thirdHolderForm } from "../../reducer/Action";
import useCommonReducer from "../../common/customComp/useCommonReducer";
import { commonFormField } from "../../common/stake-holder/stakeHolderData";
import { validateForm } from "../primary-holder/PrimaryHolderValidation";


function ThirdHolder() {
  const [form, setForm] = useState(commonFormField);
  const [errors, setErrors] = useState({});
  const { stepsCount, thirdHolderObj, dispatch } = useCommonReducer();

  useEffect(() => {
    if (Object.keys(thirdHolderObj).length) {
      setForm(thirdHolderObj);
    }
  }, [thirdHolderObj]);

  const formSubmitHandeler = (e) => {
    e.preventDefault();

    console.log("Third holder");
    const formErrors = validateForm(form);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      if (thirdHolderObj.confirmpanPekrnNo) {
        delete thirdHolderObj.confirmpanPekrnNo;
      }
      dispatch(
        thirdHolderForm({
          ...thirdHolderObj,
          holderType: "TH",
          panExemptFlag: "string",
          relationship: "01",
          relationshipProof: "01",
          ...form,
        })
      );
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
          errors={errors}
          setErrors={setErrors}
        />
      </Form>
    </React.Fragment>
  );
}

export default ThirdHolder;
