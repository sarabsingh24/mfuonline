import React from "react";
import { Form } from "react-bootstrap";

//components
import StakeHolder from "../../common/stake-holder/StakeHolder";
import { pageCount } from "../../reducer/Action";
import useCommonReducer from "../../common/customComp/useCommonReducer";

function ThirdHolder() {
  const { stepsCount, dispatch } = useCommonReducer();

  const formSubmitHandeler = (e) => {
    e.preventDefault();

    console.log("Third holder");
    if (true) {
      dispatch(pageCount(stepsCount + 1));
    }
  };

  return (
    <React.Fragment>
      <Form onSubmit={formSubmitHandeler}>
        <StakeHolder />
      </Form>
    </React.Fragment>
  );
}

export default ThirdHolder;
