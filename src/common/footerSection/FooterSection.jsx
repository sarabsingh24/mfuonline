import React from "react";

//component
import ButtonCustom from "../../common/button/ButtonCustom";

function FooterSection({ backBtn, nextBtn, btnFun }) {
  return (
    <div className="mb-4 btn-right-align ">
      {backBtn && <ButtonCustom text="Back" btnFun={btnFun.prevHandeler} />}
      {nextBtn && <ButtonCustom text="Next" btnFun={btnFun.nextHandeler}  />}
    </div>
  );
}

export default FooterSection;
