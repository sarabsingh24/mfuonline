export const validateForm = (form, grossIncomeRadio, networthRadio) => {
  const newErrors = {};

  if (!form.name || form.name === "") {
    newErrors.name = "Pleasse fill the  name";
  }
  if (!form.dateOfBirth || form.dateOfBirth === "") {
    newErrors.dateOfBirth = "Pleasse fill date of birth";
  }
  if (
    !form?.contactDetail?.mobileIsdCode ||
    form?.contactDetail?.mobileIsdCode === "" ||
    form?.contactDetail?.primaryMobileNo.length < 2
  ) {
    newErrors.mobileIsdCode = "Invalid mobile code";
  }
  if (
    !form?.contactDetail?.primaryMobileNo ||
    form?.contactDetail?.primaryMobileNo === "" ||
    form?.contactDetail?.primaryMobileNo.length < 10
  ) {
    newErrors.primaryMobileNo = "Invalid mobile number";
  }

  if (
    !form.contactDetail.primaryEmail ||
    form.contactDetail.primaryEmail === "" ||
    !form.contactDetail.primaryEmail.includes("@") ||
    !form.contactDetail.primaryEmail.includes(".")
  ) {
    newErrors.primaryEmail = "Invalid email id";
  }

  if (form.panPekrnNo !== form.confirmpanPekrnNo) {
    newErrors.panPekrnNo = "PAN / PEKRN does not matched";
    newErrors.confirmpanPekrnNo = "PAN / PEKRN does not matched";
  }


   if (!form.otherDetail.occupation || form.otherDetail.occupation === "") {
     newErrors.occupation = "Pleasse fill occupation";
   }

    if (!form.otherDetail.pep || form.otherDetail.pep === "") {
      newErrors.pep = "Pleasse fill Political Exposure";
    }

     if (
       !form.otherDetail.kraAddressType ||
       form.otherDetail.kraAddressType === ""
     ) {
       newErrors.kraAddressType = "Pleasse fill KRA Address Type";
     }


  if (!form.otherDetail.grossIncome || form.otherDetail.grossIncome === "") {
    if (!grossIncomeRadio) {
      newErrors.grossIncome = "Pleasse fill grossIncome";
    } else {
      delete newErrors.occupationOthers;
    }
  }
  if (!form.otherDetail.netWorth || form.otherDetail.netWorth === "") {
    if (!networthRadio) {
      newErrors.netWorth = "Pleasse fill netWorth";
    } else {
      delete newErrors.netWorth;
    }
  }
  if (!form.otherDetail.netWorthDate || form.otherDetail.netWorthDate === "") {
    if (!networthRadio) {
      newErrors.netWorthDate = "Pleasse fill networth date";
    } else {
      delete newErrors.netWorthDate;
    }
  }

  if (
    !form.otherDetail.occupationOthers ||
    form.otherDetail.occupationOthers === ""
  ) {
    if (form?.otherDetail.occupation === "99") {
      newErrors.occupationOthers = "Pleasse fill other occupation";
    } else {
      delete newErrors.occupationOthers;
    }
  }

  if (
    !form.fatcaDetail.taxResidencyFlag ||
    form.fatcaDetail.taxResidencyFlag === ""
  ) {
    newErrors.taxResidencyFlag = "Pleasse select";
  }

  if (!form.fatcaDetail.birthCity || form.fatcaDetail.birthCity === "") {
    newErrors.birthCity = "Pleasse fill the  birthCity of city";
  }

  if (!form.fatcaDetail.birthCountry || form.fatcaDetail.birthCountry === "") {
    newErrors.birthCountry = "Pleasse fill the  birth of country";
  }

  if (
    !form.fatcaDetail.citizenshipCountry ||
    form.fatcaDetail.citizenshipCountry === ""
  ) {
    newErrors.citizenshipCountry = "Pleasse fill the  citizenship of country";
  }

  if (
    !form.fatcaDetail.nationalityCountry ||
    form.fatcaDetail.nationalityCountry === ""
  ) {
    newErrors.nationalityCountry = "Pleasse fill the  nationality of country";
  }

  return newErrors;
};
