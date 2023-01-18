import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

//components
import StakeHolder from "../../common/stake-holder/StakeHolder";
import { pageCount, primeHolderForm } from "../../reducer/Action";
import useCommonReducer from "../../common/customComp/useCommonReducer";
import { commonFormField } from "../../common/stake-holder/stakeHolderData";

import { validateForm } from "./PrimaryHolderValidation";

function PrimaryHolder() {
  const [form, setForm] = useState(commonFormField);
  const [errors, setErrors] = useState({});

  const { stepsCount, primeHolderObj, dispatch } = useCommonReducer();

  useEffect(() => {
    if (Object.keys(primeHolderObj).length) {
      setForm(primeHolderObj);
    }
  }, [primeHolderObj]);

  const formSubmitHandeler = (e) => {
    e.preventDefault();
    console.log("Primary Holder");
    const formErrors = validateForm(form);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      if (primeHolderObj.confirmpanPekrnNo) {
        delete primeHolderObj.confirmpanPekrnNo;
      }

      dispatch(
        primeHolderForm({
          ...primeHolderObj,
          holderType: "PR",
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
          holderType={"Primary Holder"}
          errors={errors}
          setErrors={setErrors}
        />
      </Form>
    </React.Fragment>
  );
}

export default PrimaryHolder;
