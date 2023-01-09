import React from "react";
import RegistrationForm from "./component/RegistrationForm";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

//
import Tabs from "./common/tabs/Tabs";
import useCommonReducer from "./common/customComp/useCommonReducer";

function App() {
  const { stepsCount } = useCommonReducer();

  return (
    <Container>
      <Tabs />
      <RegistrationForm count={stepsCount} />
    </Container>
  );
}

export default App;
