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
import { pageCount, proofUploadForm, postData } from "../../reducer/Action";

function ProofUpload() {
  const [btnFun, setBtnFun] = useState({});
  const [imagesList, setImagesList] = useState([]);

  const { stepsCount, tabsCreater,proofUploadObj,combinedForm, dispatch } = useCommonReducer();



 useEffect(() => {
   if (proofUploadObj.length) {
     setImagesList(proofUploadObj);
   }

 }, [proofUploadObj]);


  const getImageHandeler = (e) => {
    e.preventDefault();

    // console.log(e.target.files[0]);
    const { name, size, type } = e.target.files[0];
    const path = URL.createObjectURL(e.target.files[0]);
    const id = +new Date();

    setImagesList([
      ...imagesList,
      { id, path, name, size, type, status: "pending..." },
    ]);

    e.target.value = "";
  };

  const removeImgHandeler = (id) => {
    let filterImage = imagesList.filter((img) => img.id !== id);
    setImagesList(filterImage);
    // dispatch(proofUploadForm([...filterImage]));
  };

  const formSubmitHandeler = async(e) => {
    e.preventDefault();
   
    console.log("Proof upload");
    if (true) {
      // alert('form successfuly submitted')
      // dispatch(pageCount(0));
      // dispatch(proofUploadForm([ ...imagesList]));
      // dispatch(postData(combinedForm));
       let result = await fetch("http://api.finnsysonline.com:81/mfu/v1/cans", {
         method: "POST",
         body: JSON.stringify(combinedForm),
         headers: {
           "content-type": "application/json",
         },
       });
    result = await result.json();
  console.log(result)
  
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
          <Row className="mb-5 mt-3" style={{ position: "relative" }}>
            <Col xs={12} md={3}>
              {/* <InputText
                type="file"
                name="addFile"
                label=""
                changeFun={getImageHandeler}
              /> */}
              <input
                type="file"
                className="upload-image-btn"
                onChange={getImageHandeler}
              />
              <Button
                variant="success"
                type="input"
                style={{ width: "auto", position: "absolute", top: "-3px"}}
              >
                <Badge
                  bg="success"
                  style={{ fontSize: "20px", padding: "2px" }}
                >
                  +
                </Badge>
                Add a File...
                <span className="visually-hidden">unread messages</span>
              </Button>
            </Col>
            <Col xs={12} md={2} style={{ paddingBottom: "14px" }}></Col>
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

          {imagesList.length ? (
            imagesList?.map((image, index) => {
              return (
                <Row key={index}>
                  <Col xs={12} className="proof-table-row">
                    <div>
                      <img
                        src={image.path}
                        alt={image.name}
                        style={{ width: "80px" }}
                      />
                    </div>

                    <div>{image.name}</div>
                    <div>{image.size}</div>
                    <div>{image.type}</div>
                    <div>{image.status}</div>
                    <div>
                      <Button
                        variant="warning"
                        size="sm"
                        onClick={() => removeImgHandeler(image.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </Col>
                </Row>
              );
            })
          ) : (
            <Row>
              <Col xs={12}>
                <div className="no-image-found"> No image added</div>
              </Col>
            </Row>
          )}

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
      <FooterSection
        backBtn={true}
        nextBtn={false}
        submitBtn={true}
        btnFun={btnFun}
      />
    </Form>
  );
}

export default ProofUpload;
