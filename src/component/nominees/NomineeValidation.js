export const validateForm = (form) => {
  const newErrors = {};

  if (!form.nomineeName || form.nomineeName === "") {
    newErrors.nomineeName = "Pleasse fill the nominee name";
  }

  if (!form.relation || form.relation === "") {
    newErrors.reAccountNo = "Pleasse fill relation";
  }
  if (!form.percentage || form.percentage === "") {
    newErrors.reAccountNo = "Pleasse fill relation";
  }

 
  return newErrors;
};
