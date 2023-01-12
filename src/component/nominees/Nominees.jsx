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
import useCommonReducer from "../../common/customComp/useCommonReducer";
import AddNominee from "./AddNominee";

const nominee = [
  { value: "N", label: "No - I/We declare to Opt out" },
  { value: "Y", label: "Yes - I/We wish to nominate" },
];

function Nominees() {
  const [btnFun, setBtnFun] = useState({});
  const [nomine, setNomine] = useState();
  const [nomineesArray, setNomineesArray] = useState([]);
  const { stepsCount, tabsCreater, dispatch } = useCommonReducer();

  const nomineeCountHandeler = (e) => {
    let count = e.target.value;
    let dummyArray = Array.from({ length: +count }, (_, index) => index);
    setNomine(count);
    setNomineesArray(dummyArray);
  };

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

  console.log(nomine);

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
                // select={false}
                options={nominee}
                // changeFun={formHandeler}
                mandatory="*"
              />
            </Col>
            <Col xs={12} md={3}>
              <SelectOption
                name="nomineeCount"
                label="No. of Nominee"
                // select={false}
                value={nomine}
                options={[
                  
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
                ]}
                changeFun={nomineeCountHandeler}
                mandatory="*"
              />
            </Col>
          </Row>
        </GridCustom>
      </Section>
      {nomineesArray.map((n, i) => {
        let order = i === 0 ? "First" : i === 1 ? "Second" : "Third";
        return (
          <Section key={order} heading={`${order} Nominee`}>
            <GridCustom>
              <AddNominee />
            </GridCustom>
          </Section>
        );
      })}

      <FooterSection backBtn={true} nextBtn={true} btnFun={btnFun} />
    </Form>
  );
}

export default Nominees;
