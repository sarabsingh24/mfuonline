import React from 'react'
import {BtnStyle} from './ButtonCustom-style'

function ButtonCustom({ text, btnFun }) {
  return <BtnStyle onClick={btnFun}>{text}</BtnStyle>;
}

export default ButtonCustom;