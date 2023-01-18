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



  let arrayFilter = [
    Object.keys(primeHolderObj).length && primeHolderObj,
    Object.keys(secondHolderObj).length && secondHolderObj,
    Object.keys(thirdHolderObj).length && thirdHolderObj,
    Object.keys(guardianHolderObj).length && guardianHolderObj,
  ].filter(i => i !== 0 );


  const combinedForm = {
    ...canCriteriaObj,
    holderRecords: [...arrayFilter],
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
