import React from "react";
import RegistrationForm from "./component/RegistrationForm";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

//
import Tabs from "./common/tabs/Tabs";
import useTabReducer from "./common/customComp/useTabReducer";

function App() {
  const { stepsCount } = useTabReducer();

  return (
    <Container>
      <Tabs />
      <RegistrationForm count={stepsCount} />
    </Container>
  );
}

export default App;
