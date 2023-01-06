import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";

// component
import GridCustom from "../../common/grid-custom/GridCustom";
import Section from "../../common/section/Section";
import SelectOption from "../../common/form-elements/SelectOption";
import FooterSection from "../../common/footerSection/FooterSection";
import { btnHandeler } from "../../common/helper/Helper";
import { pageCount } from "../../reducer/Action";
import useTabReducer from "../../common/customComp/useTabReducer";

const nominee = [
  { value: "N", label: "No - I/We declare to Opt out" },
  { value: "Y", label: "Yes - I/We wish to nominate" },
];

function Nominees() {
  const [btnFun, setBtnFun] = useState({});

  const { stepsCount, tabsCreater, dispatch } = useTabReducer();

  const formSubmitHandeler = (e) => {
    e.preventDefault();
    console.log("Nominees");
    if (true) {
      dispatch(pageCount(stepsCount + 1));
    }
  };

  useEffect(() => {
    setBtnFun(btnHandeler(dispatch, pageCount, stepsCount));
  }, [dispatch, stepsCount]);

  return (
    <Form onSubmit={formSubmitHandeler}>
      <Section heading="Nominee details">
        <GridCustom>
          <Row>
            <Col xs={12}>
              <Alert variant="info">
                Pursuant to SEBI circular(s) No. SEBI/HO/IMD/-II
                DOF3/P/CIR/2022/82 dated 15-Jun-2022 on the nomination for
                mutual fund investment, it is mandatory to either register
                nominee/opt-out of nominee registration for every NEW folio
                created effective 1st October 2022.
              </Alert>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <SelectOption
                name="nomineeOption"
                label="Nomination Option"
                select={false}
                options={nominee}
                // changeFun={formHandeler}
                mandatory="*"
              />
            </Col>
          </Row>
        </GridCustom>
      </Section>
      <FooterSection backBtn={true} nextBtn={true} btnFun={btnFun} />
    </Form>
  );
}

export default Nominees;
