import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

//components
import StakeHolder from "../../common/stake-holder/StakeHolder";
import { pageCount, secondHolderForm } from "../../reducer/Action";
import useCommonReducer from "../../common/customComp/useCommonReducer";
import { commonFormField } from "../../common/stake-holder/stakeHolderData";
import { validateForm } from "../primary-holder/PrimaryHolderValidation";

function SecondHolder() {
const [form, setForm] = useState( commonFormField );
 const [errors, setErrors] = useState({});
 
  const { stepsCount,secondHolderObj, dispatch } = useCommonReducer();



 useEffect(() => {
   if (Object.keys(secondHolderObj).length) {
     setForm(secondHolderObj);
   }
 }, [secondHolderObj]);

  const formSubmitHandeler = (e) => {
    e.preventDefault();
    console.log("second Holder");
    const formErrors = validateForm(form);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    }else {

       if (secondHolderObj.confirmpanPekrnNo) {
         delete secondHolderObj.confirmpanPekrnNo;
       }
      dispatch(
        secondHolderForm({
          ...secondHolderObj,
          holderType: "SC",
          
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
          holderType={"Second Holder"}
          errors={errors}
          setErrors={setErrors}
        />
      </Form>
    </React.Fragment>
  );
}

export default SecondHolder;
