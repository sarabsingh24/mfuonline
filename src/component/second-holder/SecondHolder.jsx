import React from "react";
import { Form } from "react-bootstrap";

//components
import StakeHolder from "../../common/stake-holder/StakeHolder";
import { pageCount } from "../../reducer/Action";
import useReducerLinked from "../../common/customComp/useReducerLinked";

function SecondHolder() {

  const { stepsCount, dispatch } = useReducerLinked();

  const formSubmitHandeler = (e) => {
    e.preventDefault();
    console.log("second Holder");
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

export default SecondHolder;
