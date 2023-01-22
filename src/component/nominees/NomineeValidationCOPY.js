export const validateForm = (form) => {
  const arrayCollection = [];
  const newErrors = {};

  if (!form.nomineeName || form.nomineeName === "") {
    newErrors.nomineeName = "Pleasse fill the nominee name";
  }

  if (!form.relation || form.relation === "") {
    newErrors.relation = "Pleasse fill relation";
  }
  if (!form.percentage || form.percentage === "") {
    newErrors.percentage = "Pleasse fill percentage";
  }

  arrayCollection.push(newErrors);

  return arrayCollection;
};
