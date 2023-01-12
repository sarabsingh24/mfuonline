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
    proofUploadObj,
  } = useSelector((state) => state.formReducer);
  const dispatch = useDispatch();
  
  return {
    tabsCreater,
    stepsCount,
    openForm,
    canCriteriaObj,
    primeHolderObj,
    secondHolderObj,
    thirdHolderObj,
    guardianHolderObj,
    proofUploadObj,
    dispatch,
  };
}

export default useCommonReducer;
