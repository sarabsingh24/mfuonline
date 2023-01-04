import { useSelector, useDispatch } from "react-redux";

function useReducerLinked() {
  const { tabsCreater, stepsCount, openForm } = useSelector(
    (state) => state.createReducer
  );

  const dispatch = useDispatch();

  return { tabsCreater, stepsCount, openForm, dispatch };
}

export default useReducerLinked;
