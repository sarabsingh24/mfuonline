import React,{useState,useEffect} from "react";
import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import "../Style.css";

// component
import GridCustom from "../../common/grid-custom/GridCustom";
import Section from "../../common/section/Section";
import ButtonCustom from "../../common/button/ButtonCustom";
import FooterSection from "../../common/footerSection/FooterSection";
import { btnHandeler } from "../../common/helper/Helper";
import useReducerLinked from "../../common/customComp/useReducerLinked";
import { tabUpdate, pageCount } from "../../reducer/Action";

function ProofUpload() {
   const [btnFun, setBtnFun] = useState({});
   const { stepsCount, tabsCreater, dispatch } = useReducerLinked();

    useEffect(() => {
      setBtnFun(btnHandeler(dispatch, pageCount, stepsCount));
    }, [dispatch, stepsCount]);

  return (
    <Form>
      <Section heading="Proof Upload">
        <GridCustom>
          <Row>
            <Col xs={12}>
              <Alert variant="danger">
                Please ensure that you upload all the required document proofs
                before Submit eCAN as you will not be permitted to upload any
                document images once the CAN data is VERIFIED at MFU.
              </Alert>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={12}>
              <Button variant="success">
                <Badge
                  bg="success"
                  style={{ fontSize: "20px", padding: "2px" }}
                >
                  +
                </Badge>
                Add Files...
                <span className="visually-hidden">unread messages</span>
              </Button>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={12}>
              <div className="proof-table-header">
                <div>Image Preview</div> <div>Image Name</div>
                <div>Image Size</div> <div>Proof Type</div>
                <div> Status</div> <div>Options</div>
              </div>
            </Col>
            <Col xs={12}>
              <div className="proof-table-row">
                {[1, 2].map((i, index) => {
                  return (
                    <div key={index}>
                      <div>Image Preview</div>
                      <div>Image Name</div>
                      <div>Image Size</div>
                      <div>Proof Type</div>
                      <div>Status</div>
                      <div>
                        <Button variant="warning" size="sm">
                          Remove
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Alert variant="warning">
                <p>
                  Note: The allowed image file formats ( GIF, JPG | JPEG, PNG,
                  BMP ). Recommended file size should not be more than 500 KB.
                </p>
                <ol>
                  <li>
                    The PAN proof MUST be SELF ATTESTED by respective PAN holder
                  </li>
                  <li>
                    Bank document proof for each of the bank added :
                    <ol type="a">
                      <li>
                        Bank statement must be latest (of the last 3 months)
                        with Bank A/C type, MICR, IFSC Code & Bank Account
                        number (without masking) OR
                      </li>
                      <li>
                        Cheque image should have CAN Primary holder/MINOR name
                        printed on it along with above details OR
                      </li>
                      <li>Bank letter with all the above details</li>
                    </ol>
                  </li>
                  <li>
                    For MINORs birth certificate should have
                    <ol type="a">
                      <li>
                        MINOR Name & DOB along with Guardian Name printed on it
                        OR
                      </li>
                      <li>Court Order for Appointed Guardian</li>
                    </ol>
                  </li>
                  <li>
                    Sole-Proprietor proof should have
                    <ol type="a">
                      <li>
                        GST Certificate / Banker letter / Gumasta license where
                        Sole-Proprietor Firm Name and PAN is appearing
                      </li>
                    </ol>
                  </li>
                </ol>
              </Alert>
            </Col>
          </Row>
        </GridCustom>
      </Section>
      <FooterSection backBtn={true} nextBtn={false} btnFun={btnFun} />
    </Form>
  );
}

export default ProofUpload;
