import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../Style.css";

//component
import GridCustom from "../../common/grid-custom/GridCustom";
import Section from "../../common/section/Section";
import InputText from "../../common/form-elements/InputText";
import SelectOption from "../../common/form-elements/SelectOption";
import FooterSection from "../../common/footerSection/FooterSection";
import { btnHandeler } from "../../common/helper/Helper";
import useReducerLinked from "../../common/customComp/useReducerLinked";
import { tabUpdate, pageCount } from "../../reducer/Action";
import {
  natureOptions,
  singleOptions,
  jointOptions,
  singleIndividualOptions,
  singleMinorOptions,
  singleSoleProprietorOptions,
  holderOptions,
} from "./canCriteriaData";

function CanCriteria() {
  const [form, setForm] = useState({
    nature: "",
    investor: "",
    textStatus: "",
    holders: "",
  });

  const [taxList, setTaxList] = useState([]);
  const [investorList, setInvestorList] = useState([]);
  const [btnFun, setBtnFun] = useState({});

  const { stepsCount, tabsCreater, dispatch } = useReducerLinked();

  const { nature, investor, holders } = form;

  const formHandeler = (e) => {
    let name = e.target.name;
    let val = e.target.value;
    setForm({ ...form, [name]: val });
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
    tabShoHideHandeler(tabsCreater, ["NOMI"]);
  }, []);

  useEffect(() => {
    if (nature === "SI") {
      setInvestorList(singleOptions);
      tabShoHideHandeler(tabsCreater, ["NOMI"]);
      setForm({ ...form, holders: 1 });
    } else if (nature === "JO") {
      setInvestorList(jointOptions);
      tabShoHideHandeler(tabsCreater, ["SEC", "NOMI"]);
      setForm({ ...form, holders: 2 });
    } else if (nature === "AS") {
      setInvestorList(jointOptions);
    } else {
      setInvestorList([]);
    }
  }, [nature]);

  useEffect(() => {
    if (investor === "I") {
      setTaxList(singleIndividualOptions);
      tabShoHideHandeler(tabsCreater, ["NOMI"]);
    } else if (investor === "M") {
      setTaxList(singleMinorOptions);
      tabShoHideHandeler(tabsCreater, ["GUAR"]);
    } else if (investor === "S") {
      setTaxList(singleSoleProprietorOptions);
      tabShoHideHandeler(tabsCreater, ["NOMI"]);
    } else {
      setTaxList([]);
    }
  }, [investor]);

  useEffect(() => {
    if (holders === "3") {
      setTaxList(singleIndividualOptions);
      tabShoHideHandeler(tabsCreater, ["SEC", "THIR", "NOMI"]);
    }
    if (holders === "2") {
      setTaxList(singleIndividualOptions);
      tabShoHideHandeler(tabsCreater, ["SEC", "NOMI"]);
    }
    if (holders === "1") {
      setTaxList(singleIndividualOptions);
      tabShoHideHandeler(tabsCreater, ["NOMI"]);
    }
  }, [holders]);

  const formSubmitHandeler = (e) => {
    e.preventDefault();
    console.log(e.target.dataset.value);
    console.log("can Criteria");
    if (true) {
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
                  name="nature"
                  label="Holding Nature"
                  select="Select"
                  options={natureOptions}
                  changeFun={formHandeler}
                  mandatory={true}
                />
              </Col>
              <Col xs={12} md={6}>
                <SelectOption
                  name="investor"
                  label="Investor Category"
                  select="Select"
                  options={investorList}
                  changeFun={formHandeler}
                  mandatory={true}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <SelectOption
                  name="textStatus"
                  label="Tax Status"
                  select="Select"
                  options={taxList}
                  changeFun={formHandeler}
                  mandatory={true}
                />
              </Col>
              <Col xs={12} md={6}>
                {/* <SelectOption
                  name="holders"
                  label="Holders"
                  select={form.holders}
                  options={holderOptions}
                  changeFun={formHandeler}
                /> */}
                <InputText
                  name="holders"
                  label="Holders"
                  value={form.holders}
                  disabled={true}
                />
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
