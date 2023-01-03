
import { FaBriefcase } from "react-icons/fa";// CAN
import { FaUserAlt } from "react-icons/fa";//Primary holder
import { RiBankLine } from "react-icons/ri";//bank account
import { FaStreetView } from "react-icons/fa";//nomaniee
import { MdPhotoLibrary } from "react-icons/md";//proofe
import { HiUsers } from "react-icons/hi";//second holder
import { RiParentFill } from "react-icons/ri";//gurdian holder


export const stepsList = [
  {
    text: "CAN Criteria",
    status: true,
    icon: <FaBriefcase />,
  },
  {
    text: "Sole / Primary Holder",
    status: true,
    icon: <FaUserAlt />,
  },
  {
    text: "Second Holder",
    status: false,
    icon: <HiUsers />,
  },
  {
    text: "Guardian Holder",
    status: false,
    icon: <RiParentFill />,
  },
  {
    text: "Bank Accounts",
    status: false,
    icon: <RiBankLine />,
  },
  {
    text: "Nominees",
    status: false,
    icon: <FaStreetView />,
  },
  {
    text: "Proof Upload",
    status: false,
    icon: <MdPhotoLibrary />,
  },
];
