
import React from "react";
import RegistrationForm from "./component/RegistrationForm";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap";

//
import Tabs from "./common/tabs/Tabs";

function App() {
  return (
    <Container>
      <Tabs />
      <RegistrationForm />
    </Container>
  );
}

export default App;
