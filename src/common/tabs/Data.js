import { FaBriefcase } from "react-icons/fa"; // CAN
import { FaUserAlt } from "react-icons/fa"; //Primary holder
import { RiBankLine } from "react-icons/ri"; //bank account
import { FaStreetView } from "react-icons/fa"; //nomaniee
import { MdPhotoLibrary } from "react-icons/md"; //proofe
import { HiUsers } from "react-icons/hi"; //second holder
import { RiParentFill } from "react-icons/ri"; //gurdian holder

export const stepsList = [
  {
    text: "CAN Criteria",
    short: "CRI",
    active: true,
    icon: <FaBriefcase />,
    show: true,
  },
  {
    text: "Sole / Primary Holder",
    short: "PRIM",
    active: false,
    icon: <FaUserAlt />,
    show: true,
  },
  {
    text: "Second Holder",
    short: "SEC",
    active: false,
    icon: <HiUsers />,
    show: false,
  },
  {
    text: "Third Holder",
    short: "THIR",
    active: false,
    icon: <HiUsers />,
    show: false,
  },
  {
    text: "Guardian Holder",
    short: "GUAR",
    active: false,
    icon: <RiParentFill />,
    show: false,
  },
  {
    text: "Bank Accounts",
    short: "BANK",
    active: false,
    icon: <RiBankLine />,
    show: true,
  },
  {
    text: "Nominees",
    short: "NOMI",
    active: false,
    icon: <FaStreetView />,
    show: true,
  },
  {
    text: "Proof Upload",
    short: "PROO",
    active: false,
    icon: <MdPhotoLibrary />,
    show: true,
  },
];
