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
import { validateForm } from "./NomineeValidation";

const nominee = [
  { value: "N", label: "No - I/We declare to Opt out" },
  { value: "Y", label: "Yes - I/We wish to nominate" },
];

const nomineeCompObj = {
  sequenceNo: "0",
  nomineeName: "dsds",
  relation: "",
  percentage: "",
  dateOfBirth: "2015-04-11",
  nomineeGuardianName: "",
  nomineeGuardianRelation: "",
  nomineeGuardianDob: "",
};

function Nominees() {
  const [form, setForm] = useState([]);
  const [btnFun, setBtnFun] = useState({});
  const [number, setNumber] = useState("1");
  const [nomine, setNomine] = useState(false);
  const [isNominee, setIsNominee] = useState(false);
  const [isErorArray, setIsErorArray] = useState([]);
  const [errors, setErrors] = useState({});
  const { stepsCount, tabsCreater, nomineeObj, dispatch } = useCommonReducer();

  const numberHandeler = (e) => {
    let val = e.target.value;
    setNumber(val);
  };
  const formHandeler = () => {
    setIsNominee(!isNominee);
  };

  useEffect(() => {
    if (!isNominee) {
      setForm([]);
    } else {
      setForm([nomineeCompObj]);
    }
  }, [isNominee]);

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
    // const formErrors = validateForm(form);
    console.log(isErorArray, "=========submit");

    let checkForNull = isErorArray.every(
      (e) => e.percentage === null && e.relation === null
    );
    console.log(checkForNull);
    if (!checkForNull) {
      alert("errror");
      // setErrors(formErrors);
    } else {
      alert("success");
      // dispatch(
      //   nomineesForm({ nomineeOptedFlag: isNominee, nomineeRecords: form })
      // );
      // dispatch(pageCount(stepsCount + 1));
    }
  };

  useEffect(() => {
    setBtnFun(btnHandeler(dispatch, pageCount, stepsCount));
  }, [dispatch, stepsCount]);

  useEffect(() => {
    if (Object.keys(nomineeObj).length) {
      setIsNominee(nomineeObj.nomineeOptedFlag);
      setForm(nomineeObj.nomineeRecords);
    } else {
      setForm([nomineeCompObj]);
    }
  }, [nomineeObj]);

  useEffect(() => {
    console.log(isErorArray, "=========outside");
  }, [isErorArray]);

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
              {isNominee && (
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
                  errors={errors}
                  setErrors={setErrors}
                />
              )}
            </Col>
          </Row>
        </GridCustom>
      </Section>
      {isNominee &&
        form.map((detail, index) => {
          return (
            <AddNominee
              key={index}
              count={index}
              formObj={detail}
              form={form}
              setForm={setForm}
              isErorArray={isErorArray}
              setIsErorArray={setIsErorArray}
              setErrors={setErrors}
            />
          );
        })}

      <FooterSection backBtn={true} nextBtn={true} btnFun={btnFun} />
    </Form>
  );
}

export default Nominees;
