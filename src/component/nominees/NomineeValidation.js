export const validateForm = (form) => {
  let newarray = [];

  for (let item = 0; item < form.length; item++) {
    let newErrors = {};
    if (!form[item].nomineeName || form[item].nomineeName === "") {
      newErrors.nomineeName = "Pleasse fill the nominee name";
    }
    if (!form[item].relation || form[item].relation === "") {
      newErrors.relation = "Pleasse fill relation";
    }
    if (!form[item].percentage || form[item].percentage === "") {
      newErrors.percentage = "Pleasse fill percentage";
    }
    // if (Object.keys(newErrors).length) {
      newarray.push(newErrors);
    // }
  }

  console.log(newarray);
  return newarray;
};
