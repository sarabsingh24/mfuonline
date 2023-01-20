import React,{useEffect} from 'react'
import InputText from "../../common/form-elements/InputText";
import { validateForm } from "./BankAccountValidation";
function AccountNumber({
  name,
  label,
  type,
  value,
  count,
  changeFun,
  mandatory,
  errors,
  setErrors,
  formObj,
}) {
  const formErrors = validateForm(formObj);

  useEffect(() => {
    if (Object.keys(formErrors).length > 0) {
        console.log(formErrors);
    //   setErrors(formErrors);
    }
  }, [formObj?.accountNo, formObj?.reAccountNo]);
  return (
    <InputText
      name={name}
      label={label}
      type={type}
      value={value}
      count={count}
      changeFun={changeFun}
      mandatory={mandatory}
      errors={errors}
    />
  );
}

export default AccountNumber