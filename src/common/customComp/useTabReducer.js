import { useSelector, useDispatch } from "react-redux";

function useTabReducer() {
  const { tabsCreater, stepsCount, openForm } = useSelector(
    (state) => state.tabReducer
  );

  const dispatch = useDispatch();

  return { tabsCreater, stepsCount, openForm, dispatch };
}

export default useTabReducer;
// useReducerLinked