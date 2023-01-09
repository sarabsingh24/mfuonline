import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../Style.css";
import InputGroup from "react-bootstrap/InputGroup";

//component
import GridCustom from "../../common/grid-custom/GridCustom";
import Section from "../../common/section/Section";
import InputText from "../../common/form-elements/InputText";
import SelectOption from "../../common/form-elements/SelectOption";
import FooterSection from "../../common/footerSection/FooterSection";
import { btnHandeler } from "../../common/helper/Helper";
import useCommonReducer from "../../common/customComp/useCommonReducer";
import { tabUpdate, pageCount, criteriaForm } from "../../reducer/Action";
import { validateForm } from "./CanCriteriaValidation";
import {
  natureOptions,
  investorOptions,
  singleOptions,
  jointOptions,
  singleIndividualOptions,
  singleMinorOptions,
  singleSoleProprietorOptions,
  holderOptions,
} from "./canCriteriaData";

const defaultValue = {
  holdingNature: "",
  investorCategory: "",
  taxStatus: "",
  holderCount: "",
};

function CanCriteria() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const [taxList, setTaxList] = useState([]);
  const [investorList, setInvestorList] = useState([]);
  const [btnFun, setBtnFun] = useState({});

  const { stepsCount, tabsCreater, canCriteriaObj, dispatch } =
    useCommonReducer();

  const { holdingNature, investorCategory, taxStatus, holderCount } = form;

  const formHandeler = (e) => {
    let name = e.target.name;
    let val = e.target.value;

    setForm({ ...form, [name]: val });

    if (!!errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
    if (name === 'holdingNature') {
  //     setForm({...defaultValue,investorCategory: "",
  // taxStatus: "",});
    }
  };

  const tabShoHideHandeler = (tabList, listName) => {
    let tabArray = ["CRI", "PRIM", "BANK", ...listName, "PROO"];

    let updateArray = tabList.map((tab) => {
      if (tabArray.includes(tab.short)) {
        return { ...tab, show: true };
      }
      return { ...tab, show: false };
    });

    dispatch(tabUpdate(updateArray));
  };

  useEffect(() => {
    if (Object.keys(canCriteriaObj).length > 0) {
      setForm(canCriteriaObj.form);
    } else {
      setForm(defaultValue);
    }
  }, [canCriteriaObj]);

  useEffect(() => {
    tabShoHideHandeler(tabsCreater, ["NOMI"]);
  }, []);

  useEffect(() => {
    if (holdingNature === "SI") {

      
      setForm({
        ...form,
        holdingNature: "SI",
        investorCategory: canCriteriaObj?.form?.investorCategory || "",
        // investorCategory: canCriteriaObj?.form?.investorCategory || "",
      });
      setInvestorList(singleOptions);
      tabShoHideHandeler(tabsCreater, ["NOMI"]);
    } else if (holdingNature === "JO") {
      setForm({ ...form, holdingNature: "JO", investorCategory: "I" });
      setInvestorList(jointOptions);

      setTaxList(singleIndividualOptions);
      tabShoHideHandeler(tabsCreater, ["SEC", "NOMI"]);
    } else if (holdingNature === "AS") {
      setForm({ ...form, holdingNature: "AS", investorCategory: "I" });
      setInvestorList(jointOptions);
    } else {
      setInvestorList([]);
    }
  }, [holdingNature]);

  useEffect(() => {
    if (investorCategory === "I") {
      setTaxList(singleIndividualOptions);
      tabShoHideHandeler(tabsCreater, ["NOMI"]);
    } else if (investorCategory === "M") {
      setTaxList(singleMinorOptions);
      tabShoHideHandeler(tabsCreater, ["GUAR"]);
    } else if (investorCategory === "S") {
      setTaxList(singleSoleProprietorOptions);
      tabShoHideHandeler(tabsCreater, ["NOMI"]);
    } else {
      setTaxList([]);
    }
  }, [investorCategory]);

  // useEffect(() => {
  //   if (holderCount === "3") {
  //     setTaxList(singleIndividualOptions);
  //     tabShoHideHandeler(tabsCreater, ["SEC", "THIR", "NOMI"]);
  //   }
  //   if (holderCount === "2") {
  //     setTaxList(singleIndividualOptions);
  //     tabShoHideHandeler(tabsCreater, ["SEC", "NOMI"]);
  //   }
  //   if (holderCount === "1") {
  //     setTaxList(singleIndividualOptions);
  //     tabShoHideHandeler(tabsCreater, ["NOMI"]);
  //   }
  // }, [holderCount]);

  const formSubmitHandeler = (e) => {
    e.preventDefault();

    const formErrors = validateForm(form);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      dispatch(criteriaForm({ ...canCriteriaObj, form }));
      dispatch(pageCount(stepsCount + 1));
    }
  };

  useEffect(() => {
  
    setBtnFun(btnHandeler(dispatch, pageCount, stepsCount));
  }, [dispatch, stepsCount]);

  // console.log(form);
  // console.log({ ...canCriteriaObj });
  return (
    <React.Fragment>
      <Form onSubmit={formSubmitHandeler}>
        <Section heading="Account Type">
          <GridCustom>
            <Row>
              <Col xs={12} md={6}>
                <SelectOption
                  name="holdingNature"
                  label="Holding Nature"
                  value={holdingNature}
                  options={natureOptions}
                  changeFun={formHandeler}
                  mandatory="*"
                  errors={errors}
                />
              </Col>
              <Col xs={12} md={6}>
                <SelectOption
                  name="investorCategory"
                  label="Investor Category"
                  value={investorCategory || "Select"}
                  options={investorList.length ? investorList : investorOptions}
                  changeFun={formHandeler}
                  mandatory="*"
                  errors={errors}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <SelectOption
                  name="taxStatus"
                  label="Tax Status"
                  value={taxStatus || "Select"}
                  options={taxList.length ? taxList : singleIndividualOptions}
                  changeFun={formHandeler}
                  mandatory="*"
                  errors={errors}
                />
              </Col>
              <Col xs={12} md={6}>
                <SelectOption
                  name="holderCount"
                  label="Holders"
                  value={holderCount || ""}
                  options={holderOptions}
                  changeFun={formHandeler}
                  mandatory="*"
                  errors={errors}
                />
                {/* <InputText
                  name="holderCount"
                  label="Holders"
                  value={holderCount || ""}
                  changeFun={formHandeler}
                  disabled={false}
                  mandatory="*"
                  errors={errors}
                /> */}
              </Col>
            </Row>
          </GridCustom>
        </Section>

        <FooterSection backBtn={false} nextBtn={true} btnFun={btnFun} />
      </Form>
    </React.Fragment>
  );
}

export default CanCriteria;
