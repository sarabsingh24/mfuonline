import React, { useState } from "react";
import { Form } from "react-bootstrap";

//components
import StakeHolder from "../../common/stake-holder/StakeHolder";
import { pageCount, primeHolderForm } from "../../reducer/Action";
import useCommonReducer from "../../common/customComp/useCommonReducer";
import { commonFormField } from "../../common/stake-holder/stakeHolderData";
import { useEffect } from "react";
function PrimaryHolder() {
  const [form, setForm] = useState(commonFormField);
  const [holderType, setHolderType] = useState({});

  const { stepsCount, primeHolderObj, dispatch } = useCommonReducer();

  useEffect(() => {
    setHolderType(primeHolderObj);
  }, [primeHolderObj]);

  // const formSubmitHandeler = (e) => {
  //   e.preventDefault();

  //   console.log("Primary Holder");
  //     const formErrors = validateForm(form);
  //     if (Object.keys(formErrors).length > 0) {
  //       setErrors(formErrors);
  //     } else {
  //       dispatch(criteriaForm({ ...primeHolderObj, form }));
  //       dispatch(pageCount(stepsCount + 1));
  //     }

  // };
  const formSubmitHandeler = (e) => {
    e.preventDefault();
    console.log("Primary Holder");
    if (true) {
      dispatch(primeHolderForm({ ...primeHolderObj, ...form }));
      dispatch(pageCount(stepsCount + 1));
    }
  };

  console.log(form);

  return (
    <React.Fragment>
      <Form onSubmit={formSubmitHandeler}>
        <StakeHolder form={form} setForm={setForm} holderType={holderType} />
      </Form>
    </React.Fragment>
  );
}

export default PrimaryHolder;
