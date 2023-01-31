import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

//components
import StakeHolder from "../../common/stake-holder/StakeHolder";
import { tabUpdate, pageCount } from "../../reducer/Reducer/tab/tabSlice";
import useCommonReducer from "../../common/customComp/useCommonReducer";
import { commonFormField } from "../../common/stake-holder/stakeHolderData";
import { validateForm } from "../../common/stake-holder/StakeHolderValidation";
import { primeHolderForm } from "../../reducer/Reducer/account/accountSlice";

function PrimaryHolder() {
  const [form, setForm] = useState();
  const [errors, setErrors] = useState({});

  const [grossIncomeRadio, setGrossIncomeRadio] = useState(false);
  const [networthRadio, setNetworthRadio] = useState(false);

  const { stepsCount, primeHolderObj, dispatch } = useCommonReducer();

  useEffect(() => {
    if (Object.keys(primeHolderObj).length) {
      setForm(primeHolderObj);
    } else {
      setForm(commonFormField);
    }
  }, [primeHolderObj]);

  const formSubmitHandeler = (e) => {
    e.preventDefault();

    const formErrors = validateForm(form, networthRadio, grossIncomeRadio);
    if (Object.keys(formErrors).length > 0) {
      // alert("error");
      setErrors(formErrors);
    } else {
      // alert("success");
      // if (primeHolderObj.confirmpanPekrnNo) {
      //   delete primeHolderObj.confirmpanPekrnNo;
      // }

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
      <Form onSubmit={formSubmitHandeler} autoComplete="off">
        <StakeHolder
          form={form}
          setForm={setForm}
          holderType={"Primary Holder"}
          errors={errors}
          setErrors={setErrors}
          networthRadio={networthRadio}
          setNetworthRadio={setNetworthRadio}
          grossIncomeRadio={grossIncomeRadio}
          setGrossIncomeRadio={setGrossIncomeRadio}
        />
      </Form>
    </React.Fragment>
  );
}

export default PrimaryHolder;
