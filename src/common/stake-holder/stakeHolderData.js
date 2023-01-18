export const commonFormField = {
  name: "",
  dateOfBirth: "",
  panPekrnNo: "",
  confirmpanPekrnNo: "",
  contactDetail: {
    mobileIsdCode: "",
    primaryMobileNo: "",
    primaryEmail: "",
    residenceIsd: "00",
    residenceStd: "00",
    residencePhoneNo: "string",
    primaryMobileBelongsTo: "A",
    alternateMobileNo: "string",
    officeIsd: "string",
    officeStd: "string",
    officePhoneNo: "string",
    primaryEmailBelongsTo: "A",
    alternateEmail: "string",
  },
  otherDetail: {
    grossIncome: "",
    netWorth: "",
    netWorthDate: "",
    sourceOfWealth: "",
    sourceOfWealthOthers: "",
    occupation: "",
    occupationOthers: "",
    kraAddressType: "",
    pep: "",
  },
  fatcaDetail: {
    taxResidencyFlag: "",
    birthCity: "",
    birthCountry: "",
    citizenshipCountry: "",
    nationalityCountry: "",
    birthCountryOthers: "string",
    citizenshipCountryOthers: "string",
    nationalityCountryOthers: "string",
    taxRecords: [
      {
        sequenceNo: 0,
        taxCountry: "string",
        taxCountryOthers: "string",
        taxReferenceNo: "string",
        identityType: "string",
        identityTypeOthers: "string",
      },
    ],
  },
};

export const sourceOfWealthOptions = [
  {
    value: "01",
    label: "Salary",
  },
  {
    value: "02",
    label: "Bussiness Income",
  },
  {
    value: "03",
    label: "Gift",
  },
  {
    value: "04",
    label: "Ancestral Property",
  },
  {
    value: "05",
    label: "Rental Income",
  },
  {
    value: "06",
    label: "Prize Money",
  },
  {
    value: "07",
    label: "Royalty",
  },
  {
    value: "08",
    label: "Others",
  },
];

export const occupationOptions = [
  { value: "01", label: "Private Sector Service" },
  { value: "02", label: "Public Sector" },
  { value: "03", label: "Business" },
  { value: "04", label: "Professional" },
  { value: "05", label: "Agriculturist" },
  { value: "06", label: "Retired" },
  { value: "07", label: "Housewife" },
  { value: "08", label: "Student" },
  { value: "09", label: "Forex Dealer" },
  { value: "10", label: "Government Service" },
  { value: "99", label: "Others" },
];

export const politicalExposureOptions = [
  { value: "NA", label: "Not Applicable" },
  { value: "PEP", label: "Politically Exposed Person" },
  { value: "RPEP", label: "Related to Politically Exposed Person" },
];

export const addressTypeOptions = [
  { value: "1", label: "Residential or Business" },
  { value: "2", label: "Residential" },
  { value: "3", label: "Business" },
  { value: "4", label: "Registered Office" },
];

export const taxResidencyOptions = [
  {
    value: "N",
    label: "No - Not a Tax Resident in a Country other than India",
  },
  { value: "Y", label: "Yes - Tax Resident in a Country other than India" },
];

export const grossAnnualIncomeOptions = [
  { value: "01", label: "BELOW 1 LAC" },
  { value: "02", label: "1-5 LAC" },
  { value: "03", label: "5-10 LAC" },
  { value: "04", label: "10-25 LAC" },
  { value: "05", label: "25LAC-1CR" },
  { value: "06", label: "Greater than 1 CR" },
];

export const countryListOptions = [
  { value: "0", label: "Select Country" },
  { value: "001", label: "Afghanistan" },
  { value: "002", label: "Aland Islands" },
  { value: "003", label: "Albania" },
  { value: "004", label: "Algeria" },
  { value: "005", label: "American Samoa" },
  { value: "006", label: "Andorra" },
  { value: "007", label: "Angola" },
  { value: "008", label: "Anguilla" },
  { value: "009", label: "Antarctica" },
  { value: "010", label: "Antigua And Barbuda" },
  { value: "011", label: "Argentina" },
  { value: "012", label: "Armenia" },
  { value: "013", label: "Aruba" },
  { value: "014", label: "Australia" },
  { value: "015", label: "Austria" },
  { value: "016", label: "Azerbaijan" },
  { value: "017", label: "Bahamas" },
  { value: "018", label: "Bahrain" },
  { value: "019", label: "Bangladesh" },
  { value: "020", label: "Barbados" },
  { value: "021", label: "Belarus" },
  { value: "022", label: "Belgium" },
  { value: "023", label: "Belize" },
  { value: "024", label: "Benin" },
  { value: "025", label: "Bermuda" },
  { value: "026", label: "Bhutan" },
  { value: "027", label: "Bolivia" },
  { value: "028", label: "Bosnia And Herzegovi" },
  { value: "029", label: "Botswana" },
  { value: "030", label: "Bouvet Island" },
  { value: "031", label: "Brazil" },
  { value: "032", label: "British Indian Ocean" },
  { value: "033", label: "Brunei Darussalam" },
  { value: "034", label: "Bulgaria" },
  { value: "035", label: "Burkina Faso" },
  { value: "036", label: "Burundi" },
  { value: "037", label: "Cambodia" },
  { value: "038", label: "Cameroon" },
  { value: "039", label: "Canada" },
  { value: "040", label: "Cape Verde" },
  { value: "041", label: "Cayman Islands" },
  { value: "042", label: "Central African Repu" },
  { value: "043", label: "Chad" },
  { value: "044", label: "Chile" },
  { value: "045", label: "China" },
  { value: "046", label: "Christmas Island" },
  { value: "047", label: "Cocos (Keeling) Isla" },
  { value: "048", label: "Colombia" },
  { value: "049", label: "Comoros" },
  { value: "050", label: "Congo" },
  { value: "051", label: "Congo, The Democrati" },
  { value: "052", label: "Cook Islands" },
  { value: "053", label: "Costa Rica" },
  { value: "054", label: "Cote D Ivoire" },
  { value: "055", label: "Croatia" },
  { value: "056", label: "Cuba" },
  { value: "057", label: "Cyprus" },
  { value: "058", label: "Czech Republic" },
  { value: "059", label: "Denmark" },
  { value: "060", label: "Djibouti" },
  { value: "061", label: "Dominica" },
  { value: "062", label: "Dominican Republic" },
  { value: "063", label: "Ecuador" },
  { value: "064", label: "Egypt" },
  { value: "065", label: "El Salvador" },
  { value: "066", label: "Equatorial Guinea" },
  { value: "067", label: "Eritrea" },
  { value: "068", label: "Estonia" },
  { value: "069", label: "Ethiopia" },
  { value: "070", label: "Falkland Islands (Ma" },
  { value: "071", label: "Faroe Islands" },
  { value: "072", label: "Fiji" },
  { value: "073", label: "Finland" },
  { value: "074", label: "France" },
  { value: "075", label: "French Guiana" },
  { value: "076", label: "French Polynesia" },
  { value: "077", label: "French Southern Terr" },
  { value: "078", label: "Gabon" },
  { value: "079", label: "Gambia" },
  { value: "080", label: "Georgia" },
  { value: "081", label: "Germany" },
  { value: "082", label: "Ghana" },
  { value: "083", label: "Gibraltar" },
  { value: "084", label: "Greece" },
  { value: "085", label: "Greenland" },
  { value: "086", label: "Grenada" },
  { value: "087", label: "Guadeloupe" },
  { value: "088", label: "Guam" },
  { value: "089", label: "Guatemala" },
  { value: "090", label: "Guernsey" },
  { value: "091", label: "Guinea" },
  { value: "092", label: "Guinea-Bissau" },
  { value: "093", label: "Guyana" },
  { value: "094", label: "Haiti" },
  { value: "095", label: "Heard Island And Mcd" },
  { value: "096", label: "Holy See (Vatican Ci" },
  { value: "097", label: "Honduras" },
  { value: "098", label: "Hong Kong" },
  { value: "099", label: "Hungary" },
  { value: "100", label: "Iceland" },
  { value: "101", label: "India" },
  { value: "102", label: "Indonesia" },
  { value: "103", label: "Iran Islamic Republi" },
  { value: "104", label: "Iraq" },
  { value: "105", label: "Ireland" },
  { value: "106", label: "Isle Of Man" },
  { value: "107", label: "Israel" },
  { value: "108", label: "Italy" },
  { value: "109", label: "Jamaica" },
  { value: "110", label: "Japan" },
  { value: "111", label: "Jersey" },
  { value: "112", label: "Jordan" },
  { value: "113", label: "Kazakhstan" },
  { value: "114", label: "Kenya" },
  { value: "115", label: "Kiribati" },
  { value: "116", label: "Korea Democratic Peo" },
  { value: "117", label: "Korea Republic Of" },
  { value: "118", label: "Kuwait" },
  { value: "119", label: "Kyrgyzstan" },
  { value: "120", label: "Lao Peoples Democrat" },
  { value: "121", label: "Latvia" },
  { value: "122", label: "Lebanon" },
  { value: "123", label: "Lesotho" },
  { value: "124", label: "Liberia" },
  { value: "125", label: "Libyan Arab Jamahiri" },
  { value: "126", label: "Liechtenstein" },
  { value: "127", label: "Lithuania" },
  { value: "128", label: "Luxembourg" },
  { value: "129", label: "Macao" },
  { value: "130", label: "Macedonia The Former" },
  { value: "131", label: "Madagascar" },
  { value: "132", label: "Malawi" },
  { value: "133", label: "Malaysia" },
  { value: "134", label: "Maldives" },
  { value: "135", label: "Mali" },
  { value: "136", label: "Malta" },
  { value: "137", label: "Marshall Islands" },
  { value: "138", label: "Martinique" },
  { value: "139", label: "Mauritania" },
  { value: "140", label: "Mauritius" },
  { value: "141", label: "Mayotte" },
  { value: "142", label: "Mexico" },
  { value: "143", label: "Micronesia Federated" },
  { value: "144", label: "Moldova Republic Of" },
  { value: "145", label: "Monaco" },
  { value: "146", label: "Mongolia" },
  { value: "147", label: "Montserrat" },
  { value: "148", label: "Morocco" },
  { value: "149", label: "Mozambique" },
  { value: "150", label: "Myanmar" },
  { value: "151", label: "Namibia" },
  { value: "152", label: "Nauru" },
  { value: "153", label: "Nepal" },
  { value: "154", label: "Netherlands" },
  { value: "155", label: "Netherlands Antilles" },
  { value: "156", label: "New Caledonia" },
  { value: "157", label: "New Zealand" },
  { value: "158", label: "Nicaragua" },
  { value: "159", label: "Niger" },
  { value: "160", label: "Nigeria" },
  { value: "161", label: "Niue" },
  { value: "162", label: "Norfolk Island" },
  { value: "163", label: "Northern Mariana Isl" },
  { value: "164", label: "Norway" },
  { value: "165", label: "Oman" },
  { value: "166", label: "Pakistan" },
  { value: "167", label: "Palau" },
  { value: "168", label: "Palestinian Territor" },
  { value: "169", label: "Panama" },
  { value: "170", label: "Papua New Guinea" },
  { value: "171", label: "Paraguay" },
  { value: "172", label: "Peru" },
  { value: "173", label: "Philippines" },
  { value: "174", label: "Pitcairn" },
  { value: "175", label: "Poland" },
  { value: "176", label: "Portugal" },
  { value: "177", label: "Puerto Rico" },
  { value: "178", label: "Qatar" },
  { value: "179", label: "Reunion" },
  { value: "180", label: "Romania" },
  { value: "181", label: "Russian Federation" },
  { value: "182", label: "Rwanda" },
  { value: "183", label: "Saint Helena" },
  { value: "184", label: "Saint Kitts And Nevi" },
  { value: "185", label: "Saint Lucia" },
  { value: "186", label: "Saint Pierre And Miq" },
  { value: "187", label: "Saint Vincent And Th" },
  { value: "188", label: "Samoa" },
  { value: "189", label: "San Marino" },
  { value: "190", label: "Sao Tome And Princip" },
  { value: "191", label: "Saudi Arabia" },
  { value: "192", label: "Senegal" },
  { value: "193", label: "Serbia And Montenegr" },
  { value: "194", label: "Seychelles" },
  { value: "195", label: "Sierra Leone" },
  { value: "196", label: "Singapore" },
  { value: "197", label: "Slovakia" },
  { value: "198", label: "Slovenia" },
  { value: "199", label: "Solomon Islands" },
  { value: "200", label: "Somalia" },
  { value: "201", label: "South Africa" },
  { value: "202", label: "South Georgia And Th" },
  { value: "203", label: "Spain" },
  { value: "204", label: "Sri Lanka" },
  { value: "205", label: "Sudan" },
  { value: "206", label: "Suriname" },
  { value: "207", label: "Svalbard And Jan May" },
  { value: "208", label: "Swaziland" },
  { value: "209", label: "Sweden" },
  { value: "210", label: "Switzerland" },
  { value: "211", label: "Syrian Arab Republic" },
  { value: "212", label: "Taiwan Province Of C" },
  { value: "213", label: "Tajikistan" },
  { value: "214", label: "Tanzania United Repu" },
  { value: "215", label: "Thailand" },
  { value: "216", label: "Timor-Leste" },
  { value: "217", label: "Togo" },
  { value: "218", label: "Tokelau" },
  { value: "219", label: "Tonga" },
  { value: "220", label: "Trinidad And Tobago" },
  { value: "221", label: "Tunisia" },
  { value: "222", label: "Turkey" },
  { value: "223", label: "Turkmenistan" },
  { value: "224", label: "Turks And Caicos Isl" },
  { value: "225", label: "Tuvalu" },
  { value: "226", label: "Uganda" },
  { value: "227", label: "Ukraine" },
  { value: "228", label: "United Arab Emirates" },
  { value: "229", label: "United Kingdom" },
  { value: "230", label: "United States" },
  { value: "231", label: "United States Minor" },
  { value: "232", label: "Uruguay" },
  { value: "233", label: "Uzbekistan" },
  { value: "234", label: "Vanuatu" },
  { value: "235", label: "Venezuela" },
  { value: "236", label: "Viet Nam" },
  { value: "237", label: "Virgin Islands Briti" },
  { value: "238", label: "Virgin Islands U.S." },
  { value: "239", label: "Wallis And Futuna" },
  { value: "240", label: "Western Sahara" },
  { value: "241", label: "Yemen" },
  { value: "242", label: "Zambia" },
  { value: "243", label: "Zimbabwe" },
  { value: "OTH", label: "Others" },
];
