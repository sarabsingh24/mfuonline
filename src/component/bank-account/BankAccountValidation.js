export const validateForm = (form) => {
  const newErrors = {};
  
   if (
     !form.accountNo ||
     form.accountNo === "" 
   ) {
     newErrors.accountNo = "Pleasse fill the account no.";
   }

    if (!form.reAccountNo || form.reAccountNo === "") {
      newErrors.reAccountNo = "Pleasse fill the  Re-account no.";
    }

    if (form.accountNo !== form.reAccountNo ) {
      newErrors.accountNo = "Bank A/c No does not match";
      newErrors.reAccountNo = "Bank A/c No does not match";
    }
    if (form.accountNo.length && form.reAccountNo.length && form.accountNo === form.reAccountNo) {
      newErrors.accountNo = null;
      newErrors.reAccountNo = null;
    }
 
  return newErrors;
};
