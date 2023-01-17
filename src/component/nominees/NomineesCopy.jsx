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
import { pageCount, nomineesForm } from "../../reducer/Action";
import useCommonReducer from "../../common/customComp/useCommonReducer";
import AddNominee from "./AddNominee";

const nominee = [
  { value: "N", label: "No - I/We declare to Opt out" },
  { value: "Y", label: "Yes - I/We wish to nominate" },
];

const nomineeCompObj = {
  sequenceNo: 0,
  nomineeName: "dsds",
  relation: "",
  percentage: "",
  dateOfBirth: "2015-04-24",
  nomineeGuardianName: "",
  nomineeGuardianRelation: "",
  nomineeGuardianDob: "",
};

function Nominees() {
  const [form, setForm] = useState([]);
  const [btnFun, setBtnFun] = useState({});
  const [number, setNumber] = useState(1);
  const [nomine, setNomine] = useState(false);

  const { stepsCount, tabsCreater, nomineeObj, dispatch } = useCommonReducer();

  // const nomineeCountHandeler = (e) => {
  //   let count = e.target.value;
  //   let dummyArray = Array.from({ length: +count }, (_, index) => index);
  //   setNomine(count);
  //   setForm(dummyArray);
  // };

  const numberHandeler = (e) => {
    let val = e.target.value;
    setNumber(val);
  };
  const formHandeler = () => {
    setNomine(!nomine);
  };

  useEffect(() => {
    if (!nomine) setForm([nomineeCompObj]);
  }, [nomine]);

  const thisAccountHandeler = (e, num) => {
    let name = e.target.name;
    let value = e.target.value;
    // console.log(name,value)
    let newArray = form.map((obj) => {
      console.log(obj.sequenceNo, "=====", num);
      if (obj.sequenceNo === num || obj.sequenceNo === num.toString()) {
        return { ...obj, [name]: value };
      }
      return obj;
    });
    console.log(newArray);
    setForm(newArray);
  };

  useEffect(() => {
    if (+number === 1) {
      setForm([...form.slice(0, 1)]);
    }
    if (+number === 2) {
      if (form.length > 2) {
        setForm([...form.slice(0, 2)]);
      } else {
        setForm([...form, { ...nomineeCompObj, sequenceNo: "1" }]);
      }
    }
    if (+number === 3) {
      if (form.length === 2) {
        setForm([...form, { ...nomineeCompObj, sequenceNo: "2" }]);
      } else {
        setForm([
          ...form,
          { ...nomineeCompObj, sequenceNo: "1" },
          { ...nomineeCompObj, sequenceNo: "2" },
        ]);
      }
    }
  }, [number]);

  const formSubmitHandeler = (e) => {
    e.preventDefault();
    console.log("Nominees");
    if (true) {
      dispatch(nomineesForm(form));
      // dispatch(pageCount(stepsCount + 1));
    }
  };

  useEffect(() => {
    setBtnFun(btnHandeler(dispatch, pageCount, stepsCount));
  }, [dispatch, stepsCount]);

  useEffect(() => {
    if (Object.keys(nomineeObj).length) {
      setForm(nomineeObj);
    } else {
      setForm([nomineeCompObj]);
    }
  }, [nomineeObj]);

  console.log(form);

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
                name="nomineeOptedFlag"
                label="Nomination Option"
                options={nominee}
                changeFun={formHandeler}
                mandatory="*"
              />
            </Col>
            <Col xs={12} md={3}>
              {nomine && (
                <SelectOption
                  name="nomineeCount"
                  label="No. of Nominee"
                  // select={false}
                  value={number}
                  options={[
                    { value: "1", label: "1" },
                    { value: "2", label: "2" },
                    { value: "3", label: "3" },
                  ]}
                  changeFun={numberHandeler}
                  mandatory="*"
                />
              )}
            </Col>
          </Row>
        </GridCustom>
      </Section>
      {nomine &&
        form.map((detail, index) => {
          return (
            <AddNominee
              key={index}
              form={detail}
              count={index}
              thisAccountHandeler={thisAccountHandeler}
            />
          );
        })}

      <FooterSection backBtn={true} nextBtn={true} btnFun={btnFun} />
    </Form>
  );
}

export default Nominees;
