import { useSelector, useDispatch } from "react-redux";

function useCommonReducer() {
  const { tabsCreater, stepsCount, openForm } = useSelector(
    (state) => state.tabReducer
  );

  const {
    canCriteriaObj,
    primeHolderObj,
    secondHolderObj,
    thirdHolderObj,
    guardianHolderObj,
    bankAccountsObj,
    nomineeObj,
    proofUploadObj,
  } = useSelector((state) => state.formReducer);
  const dispatch = useDispatch();

  const combinedForm = {
    ...canCriteriaObj,
    holderRecords: [
      Object.keys(primeHolderObj).length ? primeHolderObj : null,
      Object.keys(secondHolderObj).length ? secondHolderObj : null,
      Object.keys(thirdHolderObj).length ? thirdHolderObj : null,
      Object.keys(guardianHolderObj).length ? guardianHolderObj : null,
    ],
    bankRecords: bankAccountsObj,
    nomineeDetails: nomineeObj,
  };

  return {
    tabsCreater,
    stepsCount,
    openForm,
    canCriteriaObj,
    primeHolderObj,
    secondHolderObj,
    thirdHolderObj,
    guardianHolderObj,
    bankAccountsObj,
    nomineeObj,
    proofUploadObj,
    combinedForm,
    dispatch,
  };
}

export default useCommonReducer;
