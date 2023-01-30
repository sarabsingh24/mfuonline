import React, { useState, useEffect } from "react";

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
import { tabUpdate, pageCount } from "../../reducer/Reducer/tab/tabSlice";
import {
  criteriaForm,
  primeHolderForm,
  secondHolderForm,
  thirdHolderForm,
  guardianHolderForm,
  nomineesForm,
} from "../../reducer/Reducer/account/accountSlice";
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

  const formHandeler = (e) => {
    let name = e.target.name;
    let val = e.target.value;

    setForm({ ...form, [name]: val });

    if (!!errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
    // if (name === "holdingNature") {
    //       setForm({...defaultValue,investorCategory: "",
    //   taxStatus: "",});
    // }
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
      setForm(canCriteriaObj);
    } else {
      setForm(defaultValue);
    }
  }, [canCriteriaObj]);

  useEffect(() => {
    tabShoHideHandeler(tabsCreater, ["NOMI"]);
  }, []);

  useEffect(() => {
    if (form.holdingNature === "SI") {
      setInvestorList(singleOptions);
      tabShoHideHandeler(tabsCreater, ["NOMI"]);
      setForm({
        ...form,
        holdingNature: form.holdingNature || "",
        investorCategory: form.investorCategory || "",
        holderCount: "1",
      });
    } else if (form.holdingNature === "JO") {
      setInvestorList(jointOptions);
      setTaxList(singleIndividualOptions);
      tabShoHideHandeler(tabsCreater, ["SEC", "NOMI"]);
      setForm({
        ...form,
        holdingNature: "JO",
        investorCategory: form.investorCategory || "",
        holderCount: form.holderCount === "1" ? "2" : form.holderCount,
      });
    } else if (form.holdingNature === "AS") {
      setForm({ ...form, holdingNature: "AS", investorCategory: "I" });
      setInvestorList(jointOptions);
    } else {
      setInvestorList([]);
    }
  }, [form?.holdingNature]);

  useEffect(() => {
    if (form.investorCategory === "I") {
      setTaxList(singleIndividualOptions);

      if (form.holdingNature === "JO") {
        if (form.holderCount === "3") {
          tabShoHideHandeler(tabsCreater, ["SEC", "THIR", "NOMI"]);
        }
        tabShoHideHandeler(tabsCreater, ["SEC", "NOMI"]);
      } else {
        tabShoHideHandeler(tabsCreater, ["NOMI"]);
      }
    } else if (form.investorCategory === "M") {
      setTaxList(singleMinorOptions);
      tabShoHideHandeler(tabsCreater, ["GUAR"]);
    } else if (form.investorCategory === "S") {
      setTaxList(singleSoleProprietorOptions);
      tabShoHideHandeler(tabsCreater, ["NOMI"]);
    } else {
      setTaxList([]);
    }
  }, [form?.investorCategory]);

  useEffect(() => {
    if (form.holderCount === "3") {
      setTaxList(singleIndividualOptions);
      if (form.holdingNature === "SI") {
        setForm({
          ...form,
          holderCount: 1,
        });
        tabShoHideHandeler(tabsCreater, ["NOMI"]);
      } else {
        tabShoHideHandeler(tabsCreater, ["SEC", "THIR", "NOMI"]);
      }
    }
    if (form.holderCount === "2") {
      setTaxList(singleIndividualOptions);

      if (form.holdingNature === "SI") {
        setForm({
          ...form,
          holderCount: 1,
        });
        tabShoHideHandeler(tabsCreater, ["NOMI"]);
      } else {
        tabShoHideHandeler(tabsCreater, ["SEC", "NOMI"]);
      }
    }
    if (form.holderCount === "1") {
      setTaxList(singleIndividualOptions);

      tabShoHideHandeler(tabsCreater, ["NOMI"]);
    }
  }, [form?.holderCount]);

  const formSubmitHandeler = (e) => {
    e.preventDefault();

    const formErrors = validateForm(form);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      tabsCreater.map((tab) => {
        if (tab.short === "PRIM" && !tab.show) {
          dispatch(primeHolderForm({}));
        } else if (tab.short === "SEC" && !tab.show) {
          dispatch(secondHolderForm({}));
        } else if (tab.short === "THIR" && !tab.show) {
          dispatch(thirdHolderForm({}));
        } else if (tab.short === "GUAR" && !tab.show) {
          dispatch(guardianHolderForm({}));
        } else if (tab.short === "NOMI" && !tab.show) {
          dispatch(nomineesForm({}));
        }
        return tab;
      });
      dispatch(criteriaForm(form));
      dispatch(pageCount(stepsCount + 1));
    }
  };

  useEffect(() => {
    setBtnFun(btnHandeler(dispatch, pageCount, stepsCount));
  }, [dispatch, stepsCount]);

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
                  value={form?.holdingNature || ""}
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
                  value={form?.investorCategory || ""}
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
                  value={form?.taxStatus || ""}
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
                  value={form?.holderCount || 1}
                  options={holderOptions}
                  changeFun={formHandeler}
                  mandatory=""
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
