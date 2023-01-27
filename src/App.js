import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//
import Tabs from "./common/tabs/Tabs";
import BankAccounts from "./component/bank-account/BankAccounts";
import CanCriteria from "./component/can-criteria/CanCriteria";
import GuardianHolder from "./component/guardian-holder/GuardianHolder";
import Nominees from "./component/nominees/Nominees";
import PrimaryHolder from "./component/primary-holder/PrimaryHolder";
import ThirdHolder from "./component/third-holder/ThirdHolder";
import ProofUpload from "./component/proof-upload/ProofUpload";
import SecondHolder from "./component/second-holder/SecondHolder";
import CheckNavigate from "./common/check-navigate/CheckNavigate";

function App() {
  return (
    <React.Fragment>
      <Container>
        <Router>
          <Tabs />
          <CheckNavigate />
          <Routes>
            <Route path="/" element={<CanCriteria />} />
            <Route path="/primaryHolder" element={<PrimaryHolder />} />
            <Route path="/secondHolder" element={<SecondHolder />} />
            <Route path="/thirdHolder" element={<ThirdHolder />} />
            <Route path="/guardianHolder" element={<GuardianHolder />} />
            <Route path="/bankAccounts" element={<BankAccounts />} />
            <Route path="/nominees" element={<Nominees />} />
            <Route path="/proofUpload" element={<ProofUpload />} />
          </Routes>
        </Router>
      </Container>
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
