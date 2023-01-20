import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

//components
import StakeHolder from "../../common/stake-holder/StakeHolder";
import { pageCount, guardianHolderForm } from "../../reducer/Action";
import useCommonReducer from "../../common/customComp/useCommonReducer";
import { commonFormField } from "../../common/stake-holder/stakeHolderData";
import { validateForm } from "../primary-holder/PrimaryHolderValidation";

function GuardianHolder() {
const [form, setForm] = useState(commonFormField);
 const [errors, setErrors] = useState({});
  const { stepsCount,guardianHolderObj, dispatch } = useCommonReducer();


  useEffect(() => {
    if (Object.keys(guardianHolderObj).length) {
      setForm(guardianHolderObj);
    }
  }, [guardianHolderObj]);


  const formSubmitHandeler = (e) => {
    e.preventDefault();
    console.log("GuardianHolder");
     const formErrors = validateForm(form);
     if (Object.keys(formErrors).length > 0) {
       setErrors(formErrors);
     } else {
      //  if (guardianHolderObj.confirmpanPekrnNo) {
      //    delete guardianHolderObj.confirmpanPekrnNo;
      //  }
       dispatch(
         guardianHolderForm({
           ...guardianHolderObj,
           holderType: "GU",
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
          holderType={"Guardian"}
          errors={errors}
          setErrors={setErrors}
        />
      </Form>
    </React.Fragment>
  );
}

export default GuardianHolder;
