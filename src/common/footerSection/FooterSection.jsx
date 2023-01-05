import React from "react";

//component
import ButtonCustom from "../../common/button/ButtonCustom";

function FooterSection({ backBtn, nextBtn, btnFun }) {
  return (
    <div className="mb-4 btn-right-align ">
      {backBtn && (
        <ButtonCustom
          text="Back"
          variant="outline-primary"
           btnFun={btnFun.prevHandeler}
        />
      )}
      {nextBtn && (
        <ButtonCustom
          text="Next"
          variant="primary"
          type='submit'
        />
      )}
    </div>
  );
}

export default FooterSection;
