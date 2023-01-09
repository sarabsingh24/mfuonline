import React, { useState, useEffect } from "react";
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
import InputText from "../../common/form-elements/InputText";
import FooterSection from "../../common/footerSection/FooterSection";
import { btnHandeler } from "../../common/helper/Helper";
import useCommonReducer from "../../common/customComp/useCommonReducer";
import { pageCount } from "../../reducer/Action";

function ProofUpload() {
  const [btnFun, setBtnFun] = useState({});
  const [imagesList, setImagesList] = useState([]);

  const { stepsCount, tabsCreater, dispatch } = useCommonReducer();

  const getImageHandeler = (e) => {
    e.preventDefault();
    console.log(e.target.files[0]);
    const { name, size, type } = e.target.files[0];
    const id = +new Date();
    setImagesList([
      ...imagesList,
      { id, name, size, type, status: "pending..." },
    ]);
  };

   const formSubmitHandeler = (e) => {
     e.preventDefault();
     console.log("bank account");
     if (true) {
       dispatch(pageCount(stepsCount + 1));
     }
   };

  useEffect(() => {
    setBtnFun(btnHandeler(dispatch, pageCount, stepsCount));
  }, [dispatch, stepsCount]);

  return (
    <Form onSubmit={formSubmitHandeler}>
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
            <Col xs={12} md={6}>
              <InputText
                type="file"
                name="addFile"
                label="Add Files..."
                changeFunc={getImageHandeler}
              />
            </Col>
            <Col xs={12} md={2}>
              <Button variant="success" type="input">
                <Badge
                  bg="success"
                  style={{ fontSize: "20px", padding: "2px" }}
                >
                  +
                </Badge>
                Upload File
                <span className="visually-hidden">unread messages</span>
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="proof-table-header">
                <div>Image Preview</div> <div>Image Name</div>
                <div>Image Size</div> <div>Proof Type</div>
                <div> Status</div> <div>Options</div>
              </div>
            </Col>
          </Row>

          {imagesList?.map((image, index) => {
            return (
              <Row key={index}>
                <Col xs={12} className="proof-table-row">
                  <div>Image Preview</div>
                  <div>{image.name}</div>
                  <div>{image.size}</div>
                  <div>{image.type}</div>
                  <div>{image.status}</div>
                  <div>
                    <Button variant="warning" size="sm">
                      Remove
                    </Button>
                  </div>
                </Col>
              </Row>
            );
          })}

          <Row className="mt-3">
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
