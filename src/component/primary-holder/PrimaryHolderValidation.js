export const validateForm = (form) => {
  const newErrors = {};
  if (
    !form.contactDetail.primaryEmail ||
    form.contactDetail.primaryEmail === "" ||
    !form.contactDetail.primaryEmail.includes("@") ||
    !form.contactDetail.primaryEmail.includes(".")
  )
    newErrors.primaryEmail = "invalid email id";

  return newErrors;
};
