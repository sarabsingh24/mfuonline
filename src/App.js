import React from "react";
import RegistrationForm from "./component/RegistrationForm";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

//
import Tabs from "./common/tabs/Tabs";

function App() {
  const { stepsCount } = useSelector((state) => state.createReducer);

  return (
    <Container>
      <Tabs />
      <RegistrationForm count={stepsCount} />
    </Container>
  );
}

export default App;
