import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../Style.css";

//component
import GridCustom from "../../common/grid-custom/GridCustom";
import Section from "../../common/section/Section";
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

  const { nature, investor } = form;

  const formHandeler = (e) => {
    let name = e.target.name;
    let val = e.target.value;
    setForm({ ...form, [name]: val });
  };

  useEffect(() => {
    if (nature === "SI") {
      let updateArray = tabsCreater.map((tab) => {
        if (tab.short === "SEC" || tab.short === "NOMi") {
          return { ...tab, show: false };
        }
        return tab;
      });
      setInvestorList(singleOptions);

      dispatch(tabUpdate(updateArray));
    } else if (nature === "JO") {
      setInvestorList(jointOptions);
      let updateArray = tabsCreater.map((tab) => {
        if (tab.short === "SEC" || tab.short === "NOMi") {
          return { ...tab, show: true };
        }
        return tab;
      });

      dispatch(tabUpdate(updateArray));
    } else if (nature === "AS") {
      setInvestorList(jointOptions);
    } else {
      setInvestorList([]);
    }
  }, [nature]);

  useEffect(() => {
    if (investor === "I") {
      setTaxList(singleIndividualOptions);
    } else if (investor === "M") {
      setTaxList(singleMinorOptions);
    } else if (investor === "S") {
      setTaxList(singleSoleProprietorOptions);
    } else {
      setTaxList([]);
    }
  }, [investor]);

  useEffect(() => {
    setBtnFun(btnHandeler(dispatch, pageCount, stepsCount));
  }, [dispatch, stepsCount]);

  return (
    <React.Fragment>
      <Form>
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
                />
              </Col>
              <Col xs={12} md={6}>
                <SelectOption
                  name="investor"
                  label="Investor Category"
                  select="Select"
                  options={investorList}
                  changeFun={formHandeler}
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
                />
              </Col>
              <Col xs={12} md={6}>
                <SelectOption
                  name="holders"
                  label="Holders"
                  select="Select"
                  options={holderOptions}
                  changeFun={formHandeler}
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
