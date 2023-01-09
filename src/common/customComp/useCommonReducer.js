import { useSelector, useDispatch } from "react-redux";

function useCommonReducer() {
  const { tabsCreater, stepsCount, openForm } = useSelector(
    (state) => state.tabReducer
  );

  const { canCriteriaObj, primeHolderObj } = useSelector(
    (state) => state.formReducer
  );
  const dispatch = useDispatch();
  
  return { tabsCreater, stepsCount, openForm, canCriteriaObj,primeHolderObj, dispatch };
}

export default useCommonReducer;
