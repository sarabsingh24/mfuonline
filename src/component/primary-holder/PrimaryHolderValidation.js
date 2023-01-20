export const validateForm = (form) => {
  const newErrors = {};
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

  return newErrors;
};
