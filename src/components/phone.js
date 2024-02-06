// const countries = [
//   { name: "Afghanistan", code: "AF", phone: 93 },
//   { name: "Aland Islands", code: "AX", phone: 358 },
//   { name: "Albania", code: "AL", phone: 355 },
//   { name: "Algeria", code: "DZ", phone: 213 },
//   { name: "American Samoa", code: "AS", phone: 1684 },
//   { name: "Andorra", code: "AD", phone: 376 },
//   { name: "Angola", code: "AO", phone: 244 },
//   { name: "Anguilla", code: "AI", phone: 1264 },
//   { name: "Antarctica", code: "AQ", phone: 672 },
//   { name: "Antigua and Barbuda", code: "AG", phone: 1268 },
//   { name: "Argentina", code: "AR", phone: 54 },
//   { name: "Armenia", code: "AM", phone: 374 },
//   { name: "Aruba", code: "AW", phone: 297 },
//   { name: "Australia", code: "AU", phone: 61 },
//   { name: "Austria", code: "AT", phone: 43 },
//   { name: "Azerbaijan", code: "AZ", phone: 994 },
//   { name: "Bahamas", code: "BS", phone: 1242 },
//   { name: "Bahrain", code: "BH", phone: 973 },
//   { name: "Bangladesh", code: "BD", phone: 880 },
//   { name: "Barbados", code: "BB", phone: 1246 },
//   { name: "Belarus", code: "BY", phone: 375 },
//   { name: "Belgium", code: "BE", phone: 32 },
//   { name: "Belize", code: "BZ", phone: 501 },
//   { name: "Benin", code: "BJ", phone: 229 },
//   { name: "Bermuda", code: "BM", phone: 1441 },
//   { name: "Bhutan", code: "BT", phone: 975 },
//   { name: "Bolivia", code: "BO", phone: 591 },
//   { name: "Bonaire, Sint Eustatius and Saba", code: "BQ", phone: 599 },
//   { name: "Bosnia and Herzegovina", code: "BA", phone: 387 },
//   { name: "Botswana", code: "BW", phone: 267 },
//   { name: "Bouvet Island", code: "BV", phone: 55 },
//   { name: "Brazil", code: "BR", phone: 55 },
//   { name: "British Indian Ocean Territory", code: "IO", phone: 246 },
//   { name: "Brunei Darussalam", code: "BN", phone: 673 },
//   { name: "Bulgaria", code: "BG", phone: 359 },
//   { name: "Burkina Faso", code: "BF", phone: 226 },
//   { name: "Burundi", code: "BI", phone: 257 },
//   { name: "Cambodia", code: "KH", phone: 855 },
//   { name: "Cameroon", code: "CM", phone: 237 },
//   { name: "Canada", code: "CA", phone: 1 },
//   { name: "Cape Verde", code: "CV", phone: 238 },
//   { name: "Cayman Islands", code: "KY", phone: 1345 },
//   { name: "Central African Republic", code: "CF", phone: 236 },
//   { name: "Chad", code: "TD", phone: 235 },
//   { name: "Chile", code: "CL", phone: 56 },
//   { name: "China", code: "CN", phone: 86 },
//   { name: "Christmas Island", code: "CX", phone: 61 },
//   { name: "Cocos (Keeling) Islands", code: "CC", phone: 672 },
//   { name: "Colombia", code: "CO", phone: 57 },
//   { name: "Comoros", code: "KM", phone: 269 },
//   { name: "Congo", code: "CG", phone: 242 },
//   { name: "Congo, Democratic Republic of the Congo", code: "CD", phone: 242 },
//   { name: "Cook Islands", code: "CK", phone: 682 },
//   { name: "Costa Rica", code: "CR", phone: 506 },
//   { name: "Cote D'Ivoire", code: "CI", phone: 225 },
//   { name: "Croatia", code: "HR", phone: 385 },
//   { name: "Cuba", code: "CU", phone: 53 },
//   { name: "Curacao", code: "CW", phone: 599 },
//   { name: "Cyprus", code: "CY", phone: 357 },
//   { name: "Czech Republic", code: "CZ", phone: 420 },
//   { name: "Denmark", code: "DK", phone: 45 },
//   { name: "Djibouti", code: "DJ", phone: 253 },
//   { name: "Dominica", code: "DM", phone: 1767 },
//   { name: "Dominican Republic", code: "DO", phone: 1809 },
//   { name: "Ecuador", code: "EC", phone: 593 },
//   { name: "Egypt", code: "EG", phone: 20 },
//   { name: "El Salvador", code: "SV", phone: 503 },
//   { name: "Equatorial Guinea", code: "GQ", phone: 240 },
//   { name: "Eritrea", code: "ER", phone: 291 },
//   { name: "Estonia", code: "EE", phone: 372 },
//   { name: "Ethiopia", code: "ET", phone: 251 },
//   { name: "Falkland Islands (Malvinas)", code: "FK", phone: 500 },
//   { name: "Faroe Islands", code: "FO", phone: 298 },
//   { name: "Fiji", code: "FJ", phone: 679 },
//   { name: "Finland", code: "FI", phone: 358 },
//   { name: "France", code: "FR", phone: 33 },
//   { name: "French Guiana", code: "GF", phone: 594 },
//   { name: "French Polynesia", code: "PF", phone: 689 },
//   { name: "French Southern Territories", code: "TF", phone: 262 },
//   { name: "Gabon", code: "GA", phone: 241 },
//   { name: "Gambia", code: "GM", phone: 220 },
//   { name: "Georgia", code: "GE", phone: 995 },
//   { name: "Germany", code: "DE", phone: 49 },
//   { name: "Ghana", code: "GH", phone: 233 },
//   { name: "Gibraltar", code: "GI", phone: 350 },
//   { name: "Greece", code: "GR", phone: 30 },
//   { name: "Greenland", code: "GL", phone: 299 },
//   { name: "Grenada", code: "GD", phone: 1473 },
//   { name: "Guadeloupe", code: "GP", phone: 590 },
//   { name: "Guam", code: "GU", phone: 1671 },
//   { name: "Guatemala", code: "GT", phone: 502 },
//   { name: "Guernsey", code: "GG", phone: 44 },
//   { name: "Guinea", code: "GN", phone: 224 },
//   { name: "Guinea-Bissau", code: "GW", phone: 245 },
//   { name: "Guyana", code: "GY", phone: 592 },
//   { name: "Haiti", code: "HT", phone: 509 },
//   { name: "Heard Island and McDonald Islands", code: "HM", phone: 0 },
//   { name: "Holy See (Vatican City State)", code: "VA", phone: 39 },
//   { name: "Honduras", code: "HN", phone: 504 },
//   { name: "Hong Kong", code: "HK", phone: 852 },
//   { name: "Hungary", code: "HU", phone: 36 },
//   { name: "Iceland", code: "IS", phone: 354 },
//   { name: "India", code: "IN", phone: 91 },
//   { name: "Indonesia", code: "ID", phone: 62 },
//   { name: "Iran, Islamic Republic of", code: "IR", phone: 98 },
//   { name: "Iraq", code: "IQ", phone: 964 },
//   { name: "Ireland", code: "IE", phone: 353 },
//   { name: "Isle of Man", code: "IM", phone: 44 },
//   { name: "Israel", code: "IL", phone: 972 },
//   { name: "Italy", code: "IT", phone: 39 },
//   { name: "Jamaica", code: "JM", phone: 1876 },
//   { name: "Japan", code: "JP", phone: 81 },
//   { name: "Jersey", code: "JE", phone: 44 },
//   { name: "Jordan", code: "JO", phone: 962 },
//   { name: "Kazakhstan", code: "KZ", phone: 7 },
//   { name: "Kenya", code: "KE", phone: 254 },
//   { name: "Kiribati", code: "KI", phone: 686 },
//   { name: "Korea, Democratic People's Republic of", code: "KP", phone: 850 },
//   { name: "Korea, Republic of", code: "KR", phone: 82 },
//   { name: "Kosovo", code: "XK", phone: 383 },
//   { name: "Kuwait", code: "KW", phone: 965 },
//   { name: "Kyrgyzstan", code: "KG", phone: 996 },
//   { name: "Lao People's Democratic Republic", code: "LA", phone: 856 },
//   { name: "Latvia", code: "LV", phone: 371 },
//   { name: "Lebanon", code: "LB", phone: 961 },
//   { name: "Lesotho", code: "LS", phone: 266 },
//   { name: "Liberia", code: "LR", phone: 231 },
//   { name: "Libyan Arab Jamahiriya", code: "LY", phone: 218 },
//   { name: "Liechtenstein", code: "LI", phone: 423 },
//   { name: "Lithuania", code: "LT", phone: 370 },
//   { name: "Luxembourg", code: "LU", phone: 352 },
//   { name: "Macao", code: "MO", phone: 853 },
//   {
//     name: "Macedonia, the Former Yugoslav Republic of",
//     code: "MK",
//     phone: 389,
//   },
//   { name: "Madagascar", code: "MG", phone: 261 },
//   { name: "Malawi", code: "MW", phone: 265 },
//   { name: "Malaysia", code: "MY", phone: 60 },
//   { name: "Maldives", code: "MV", phone: 960 },
//   { name: "Mali", code: "ML", phone: 223 },
//   { name: "Malta", code: "MT", phone: 356 },
//   { name: "Marshall Islands", code: "MH", phone: 692 },
//   { name: "Martinique", code: "MQ", phone: 596 },
//   { name: "Mauritania", code: "MR", phone: 222 },
//   { name: "Mauritius", code: "MU", phone: 230 },
//   { name: "Mayotte", code: "YT", phone: 262 },
//   { name: "Mexico", code: "MX", phone: 52 },
//   { name: "Micronesia, Federated States of", code: "FM", phone: 691 },
//   { name: "Moldova, Republic of", code: "MD", phone: 373 },
//   { name: "Monaco", code: "MC", phone: 377 },
//   { name: "Mongolia", code: "MN", phone: 976 },
//   { name: "Montenegro", code: "ME", phone: 382 },
//   { name: "Montserrat", code: "MS", phone: 1664 },
//   { name: "Morocco", code: "MA", phone: 212 },
//   { name: "Mozambique", code: "MZ", phone: 258 },
//   { name: "Myanmar", code: "MM", phone: 95 },
//   { name: "Namibia", code: "NA", phone: 264 },
//   { name: "Nauru", code: "NR", phone: 674 },
//   { name: "Nepal", code: "NP", phone: 977 },
//   { name: "Netherlands", code: "NL", phone: 31 },
//   { name: "Netherlands Antilles", code: "AN", phone: 599 },
//   { name: "New Caledonia", code: "NC", phone: 687 },
//   { name: "New Zealand", code: "NZ", phone: 64 },
//   { name: "Nicaragua", code: "NI", phone: 505 },
//   { name: "Niger", code: "NE", phone: 227 },
//   { name: "Nigeria", code: "NG", phone: 234 },
//   { name: "Niue", code: "NU", phone: 683 },
//   { name: "Norfolk Island", code: "NF", phone: 672 },
//   { name: "Northern Mariana Islands", code: "MP", phone: 1670 },
//   { name: "Norway", code: "NO", phone: 47 },
//   { name: "Oman", code: "OM", phone: 968 },
//   { name: "Pakistan", code: "PK", phone: 92 },
//   { name: "Palau", code: "PW", phone: 680 },
//   { name: "Palestinian Territory, Occupied", code: "PS", phone: 970 },
//   { name: "Panama", code: "PA", phone: 507 },
//   { name: "Papua New Guinea", code: "PG", phone: 675 },
//   { name: "Paraguay", code: "PY", phone: 595 },
//   { name: "Peru", code: "PE", phone: 51 },
//   { name: "Philippines", code: "PH", phone: 63 },
//   { name: "Pitcairn", code: "PN", phone: 64 },
//   { name: "Poland", code: "PL", phone: 48 },
//   { name: "Portugal", code: "PT", phone: 351 },
//   { name: "Puerto Rico", code: "PR", phone: 1787 },
//   { name: "Qatar", code: "QA", phone: 974 },
//   { name: "Reunion", code: "RE", phone: 262 },
//   { name: "Romania", code: "RO", phone: 40 },
//   { name: "Russian Federation", code: "RU", phone: 7 },
//   { name: "Rwanda", code: "RW", phone: 250 },
//   { name: "Saint Barthelemy", code: "BL", phone: 590 },
//   { name: "Saint Helena", code: "SH", phone: 290 },
//   { name: "Saint Kitts and Nevis", code: "KN", phone: 1869 },
//   { name: "Saint Lucia", code: "LC", phone: 1758 },
//   { name: "Saint Martin", code: "MF", phone: 590 },
//   { name: "Saint Pierre and Miquelon", code: "PM", phone: 508 },
//   { name: "Saint Vincent and the Grenadines", code: "VC", phone: 1784 },
//   { name: "Samoa", code: "WS", phone: 684 },
//   { name: "San Marino", code: "SM", phone: 378 },
//   { name: "Sao Tome and Principe", code: "ST", phone: 239 },
//   { name: "Saudi Arabia", code: "SA", phone: 966 },
//   { name: "Senegal", code: "SN", phone: 221 },
//   { name: "Serbia", code: "RS", phone: 381 },
//   { name: "Serbia and Montenegro", code: "CS", phone: 381 },
//   { name: "Seychelles", code: "SC", phone: 248 },
//   { name: "Sierra Leone", code: "SL", phone: 232 },
//   { name: "Singapore", code: "SG", phone: 65 },
//   { name: "St Martin", code: "SX", phone: 721 },
//   { name: "Slovakia", code: "SK", phone: 421 },
//   { name: "Slovenia", code: "SI", phone: 386 },
//   { name: "Solomon Islands", code: "SB", phone: 677 },
//   { name: "Somalia", code: "SO", phone: 252 },
//   { name: "South Africa", code: "ZA", phone: 27 },
//   {
//     name: "South Georgia and the South Sandwich Islands",
//     code: "GS",
//     phone: 500,
//   },
//   { name: "South Sudan", code: "SS", phone: 211 },
//   { name: "Spain", code: "ES", phone: 34 },
//   { name: "Sri Lanka", code: "LK", phone: 94 },
//   { name: "Sudan", code: "SD", phone: 249 },
//   { name: "Suriname", code: "SR", phone: 597 },
//   { name: "Svalbard and Jan Mayen", code: "SJ", phone: 47 },
//   { name: "Swaziland", code: "SZ", phone: 268 },
//   { name: "Sweden", code: "SE", phone: 46 },
//   { name: "Switzerland", code: "CH", phone: 41 },
//   { name: "Syrian Arab Republic", code: "SY", phone: 963 },
//   { name: "Taiwan, Province of China", code: "TW", phone: 886 },
//   { name: "Tajikistan", code: "TJ", phone: 992 },
//   { name: "Tanzania, United Republic of", code: "TZ", phone: 255 },
//   { name: "Thailand", code: "TH", phone: 66 },
//   { name: "Timor-Leste", code: "TL", phone: 670 },
//   { name: "Togo", code: "TG", phone: 228 },
//   { name: "Tokelau", code: "TK", phone: 690 },
//   { name: "Tonga", code: "TO", phone: 676 },
//   { name: "Trinidad and Tobago", code: "TT", phone: 1868 },
//   { name: "Tunisia", code: "TN", phone: 216 },
//   { name: "Turkey", code: "TR", phone: 90 },
//   { name: "Turkmenistan", code: "TM", phone: 7370 },
//   { name: "Turks and Caicos Islands", code: "TC", phone: 1649 },
//   { name: "Tuvalu", code: "TV", phone: 688 },
//   { name: "Uganda", code: "UG", phone: 256 },
//   { name: "Ukraine", code: "UA", phone: 380 },
//   { name: "United Arab Emirates", code: "AE", phone: 971 },
//   { name: "United Kingdom", code: "GB", phone: 44 },
//   { name: "United States", code: "US", phone: 1 },
//   { name: "United States Minor Outlying Islands", code: "UM", phone: 1 },
//   { name: "Uruguay", code: "UY", phone: 598 },
//   { name: "Uzbekistan", code: "UZ", phone: 998 },
//   { name: "Vanuatu", code: "VU", phone: 678 },
//   { name: "Venezuela", code: "VE", phone: 58 },
//   { name: "Viet Nam", code: "VN", phone: 84 },
//   { name: "Virgin Islands, British", code: "VG", phone: 1284 },
//   { name: "Virgin Islands, U.s.", code: "VI", phone: 1340 },
//   { name: "Wallis and Futuna", code: "WF", phone: 681 },
//   { name: "Western Sahara", code: "EH", phone: 212 },
//   { name: "Yemen", code: "YE", phone: 967 },
//   { name: "Zambia", code: "ZM", phone: 260 },
//   { name: "Zimbabwe", code: "ZW", phone: 263 },
// ];

// const formattedCountries = countries.map((country) => ({
//   value: `+${country.phone}`,
//   label: `${country.name} (+${country.phone})`,
// }));

// console.log(formattedCountries);

// [
//   {
//     value: "+93",
//     label: "Afghanistan (+93)",
//   },
//   {
//     value: "+358",
//     label: "Aland Islands (+358)",
//   },
//   {
//     value: "+355",
//     label: "Albania (+355)",
//   },
//   {
//     value: "+213",
//     label: "Algeria (+213)",
//   },
//   {
//     value: "+1684",
//     label: "American Samoa (+1684)",
//   },
//   {
//     value: "+376",
//     label: "Andorra (+376)",
//   },
//   {
//     value: "+244",
//     label: "Angola (+244)",
//   },
//   {
//     value: "+1264",
//     label: "Anguilla (+1264)",
//   },
//   {
//     value: "+672",
//     label: "Antarctica (+672)",
//   },
//   {
//     value: "+1268",
//     label: "Antigua and Barbuda (+1268)",
//   },
//   {
//     value: "+54",
//     label: "Argentina (+54)",
//   },
//   {
//     value: "+374",
//     label: "Armenia (+374)",
//   },
//   {
//     value: "+297",
//     label: "Aruba (+297)",
//   },
//   {value: "+61",label: "Australia (+61)",},
//   {
//     value: "+43",
//     label: "Austria (+43)",
//   },
//   {
//     value: "+994",
//     label: "Azerbaijan (+994)",
//   },
//   {
//     value: "+1242",
//     label: "Bahamas (+1242)",
//   },
//   {
//     value: "+973",
//     label: "Bahrain (+973)",
//   },
//   {
//     value: "+880",
//     label: "Bangladesh (+880)",
//   },
//   {
//     value: "+1246",
//     label: "Barbados (+1246)",
//   },
//   {
//     value: "+375",
//     label: "Belarus (+375)",
//   },
//   {
//     value: "+32",
//     label: "Belgium (+32)",
//   },
//   {
//     value: "+501",
//     label: "Belize (+501)",
//   },
//   {
//     value: "+229",
//     label: "Benin (+229)",
//   },
//   {
//     value: "+1441",
//     label: "Bermuda (+1441)",
//   },
//   {
//     value: "+975",
//     label: "Bhutan (+975)",
//   },
//   {
//     value: "+591",
//     label: "Bolivia (+591)",
//   },
//   {
//     value: "+599",
//     label: "Bonaire, Sint Eustatius and Saba (+599)",
//   },
//   {
//     value: "+387",
//     label: "Bosnia and Herzegovina (+387)",
//   },
//   {
//     value: "+267",
//     label: "Botswana (+267)",
//   },
//   {
//     value: "+55",
//     label: "Bouvet Island (+55)",
//   },
//   {
//     value: "+55",
//     label: "Brazil (+55)",
//   },
//   {
//     value: "+246",
//     label: "British Indian Ocean Territory (+246)",
//   },
//   {
//     value: "+673",
//     label: "Brunei Darussalam (+673)",
//   },
//   {
//     value: "+359",
//     label: "Bulgaria (+359)",
//   },
//   {
//     value: "+226",
//     label: "Burkina Faso (+226)",
//   },
//   {
//     value: "+257",
//     label: "Burundi (+257)",
//   },
//   {
//     value: "+855",
//     label: "Cambodia (+855)",
//   },
//   {
//     value: "+237",
//     label: "Cameroon (+237)",
//   },
//   {
//     value: "+1",
//     label: "Canada (+1)",
//   },
//   {
//     value: "+238",
//     label: "Cape Verde (+238)",
//   },
//   {
//     value: "+1345",
//     label: "Cayman Islands (+1345)",
//   },
//   {
//     value: "+236",
//     label: "Central African Republic (+236)",
//   },
//   {
//     value: "+235",
//     label: "Chad (+235)",
//   },
//   {
//     value: "+56",
//     label: "Chile (+56)",
//   },
//   {
//     value: "+86",
//     label: "China (+86)",
//   },
//   {
//     value: "+61",
//     label: "Christmas Island (+61)",
//   },
//   {
//     value: "+672",
//     label: "Cocos (Keeling) Islands (+672)",
//   },
//   {
//     value: "+57",
//     label: "Colombia (+57)",
//   },
//   {
//     value: "+269",
//     label: "Comoros (+269)",
//   },
//   {
//     value: "+242",
//     label: "Congo (+242)",
//   },
//   {
//     value: "+242",
//     label: "Congo, Democratic Republic of the Congo (+242)",
//   },
//   {
//     value: "+682",
//     label: "Cook Islands (+682)",
//   },
//   {
//     value: "+506",
//     label: "Costa Rica (+506)",
//   },
//   {
//     value: "+225",
//     label: "Cote D'Ivoire (+225)",
//   },
//   {
//     value: "+385",
//     label: "Croatia (+385)",
//   },
//   {
//     value: "+53",
//     label: "Cuba (+53)",
//   },
//   {
//     value: "+599",
//     label: "Curacao (+599)",
//   },
//   {
//     value: "+357",
//     label: "Cyprus (+357)",
//   },
//   {
//     value: "+420",
//     label: "Czech Republic (+420)",
//   },
//   {
//     value: "+45",
//     label: "Denmark (+45)",
//   },
//   {
//     value: "+253",
//     label: "Djibouti (+253)",
//   },
//   {
//     value: "+1767",
//     label: "Dominica (+1767)",
//   },
//   {
//     value: "+1809",
//     label: "Dominican Republic (+1809)",
//   },
//   {
//     value: "+593",
//     label: "Ecuador (+593)",
//   },
//   {
//     value: "+20",
//     label: "Egypt (+20)",
//   },
//   {
//     value: "+503",
//     label: "El Salvador (+503)",
//   },
//   {
//     value: "+240",
//     label: "Equatorial Guinea (+240)",
//   },
//   {
//     value: "+291",
//     label: "Eritrea (+291)",
//   },
//   {
//     value: "+372",
//     label: "Estonia (+372)",
//   },
//   {
//     value: "+251",
//     label: "Ethiopia (+251)",
//   },
//   {
//     value: "+500",
//     label: "Falkland Islands (Malvinas) (+500)",
//   },
//   {
//     value: "+298",
//     label: "Faroe Islands (+298)",
//   },
//   {
//     value: "+679",
//     label: "Fiji (+679)",
//   },
//   {
//     value: "+358",
//     label: "Finland (+358)",
//   },
//   {
//     value: "+33",
//     label: "France (+33)",
//   },
//   {
//     value: "+594",
//     label: "French Guiana (+594)",
//   },
//   {
//     value: "+689",
//     label: "French Polynesia (+689)",
//   },
//   {
//     value: "+262",
//     label: "French Southern Territories (+262)",
//   },
//   {
//     value: "+241",
//     label: "Gabon (+241)",
//   },
//   {
//     value: "+220",
//     label: "Gambia (+220)",
//   },
//   {
//     value: "+995",
//     label: "Georgia (+995)",
//   },
//   {
//     value: "+49",
//     label: "Germany (+49)",
//   },
//   {
//     value: "+233",
//     label: "Ghana (+233)",
//   },
//   {
//     value: "+350",
//     label: "Gibraltar (+350)",
//   },
//   {
//     value: "+30",
//     label: "Greece (+30)",
//   },
//   {
//     value: "+299",
//     label: "Greenland (+299)",
//   },
//   {
//     value: "+1473",
//     label: "Grenada (+1473)",
//   },
//   {
//     value: "+590",
//     label: "Guadeloupe (+590)",
//   },
//   {
//     value: "+1671",
//     label: "Guam (+1671)",
//   },
//   {
//     value: "+502",
//     label: "Guatemala (+502)",
//   },
//   {
//     value: "+44",
//     label: "Guernsey (+44)",
//   },
//   {
//     value: "+224",
//     label: "Guinea (+224)",
//   },
//   {
//     value: "+245",
//     label: "Guinea-Bissau (+245)",
//   },
//   {
//     value: "+592",
//     label: "Guyana (+592)",
//   },
//   {
//     value: "+509",
//     label: "Haiti (+509)",
//   },
//   {
//     value: "+0",
//     label: "Heard Island and McDonald Islands (+0)",
//   },
//   {
//     value: "+39",
//     label: "Holy See (Vatican City State) (+39)",
//   },
//   {
//     value: "+504",
//     label: "Honduras (+504)",
//   },
//   {
//     value: "+852",
//     label: "Hong Kong (+852)",
//   },
//   {
//     value: "+36",
//     label: "Hungary (+36)",
//   },
//   {
//     value: "+354",
//     label: "Iceland (+354)",
//   },
//   {
//     value: "+91",
//     label: "India (+91)",
//   },
//   {
//     value: "+62",
//     label: "Indonesia (+62)",
//   },
//   {
//     value: "+98",
//     label: "Iran, Islamic Republic of (+98)",
//   },
//   {
//     value: "+964",
//     label: "Iraq (+964)",
//   },
//   {
//     value: "+353",
//     label: "Ireland (+353)",
//   },
//   {
//     value: "+44",
//     label: "Isle of Man (+44)",
//   },
//   {
//     value: "+972",
//     label: "Israel (+972)",
//   },
//   {
//     value: "+39",
//     label: "Italy (+39)",
//   },
//   {
//     value: "+1876",
//     label: "Jamaica (+1876)",
//   },
//   {
//     value: "+81",
//     label: "Japan (+81)",
//   },
//   {
//     value: "+44",
//     label: "Jersey (+44)",
//   },
//   {
//     value: "+962",
//     label: "Jordan (+962)",
//   },
//   {
//     value: "+7",
//     label: "Kazakhstan (+7)",
//   },
//   {
//     value: "+254",
//     label: "Kenya (+254)",
//   },
//   {
//     value: "+686",
//     label: "Kiribati (+686)",
//   },
//   {
//     value: "+850",
//     label: "Korea, Democratic People's Republic of (+850)",
//   },
//   {
//     value: "+82",
//     label: "Korea, Republic of (+82)",
//   },
//   {
//     value: "+383",
//     label: "Kosovo (+383)",
//   },
//   {
//     value: "+965",
//     label: "Kuwait (+965)",
//   },
//   {
//     value: "+996",
//     label: "Kyrgyzstan (+996)",
//   },
//   {
//     value: "+856",
//     label: "Lao People's Democratic Republic (+856)",
//   },
//   {
//     value: "+371",
//     label: "Latvia (+371)",
//   },
//   {
//     value: "+961",
//     label: "Lebanon (+961)",
//   },
//   {
//     value: "+266",
//     label: "Lesotho (+266)",
//   },
//   {
//     value: "+231",
//     label: "Liberia (+231)",
//   },
//   {
//     value: "+218",
//     label: "Libyan Arab Jamahiriya (+218)",
//   },
//   {
//     value: "+423",
//     label: "Liechtenstein (+423)",
//   },
//   {
//     value: "+370",
//     label: "Lithuania (+370)",
//   },
//   {
//     value: "+352",
//     label: "Luxembourg (+352)",
//   },
//   {
//     value: "+853",
//     label: "Macao (+853)",
//   },
//   {
//     value: "+389",
//     label: "Macedonia, the Former Yugoslav Republic of (+389)",
//   },
//   {
//     value: "+261",
//     label: "Madagascar (+261)",
//   },
//   {
//     value: "+265",
//     label: "Malawi (+265)",
//   },
//   {
//     value: "+60",
//     label: "Malaysia (+60)",
//   },
//   {
//     value: "+960",
//     label: "Maldives (+960)",
//   },
//   {
//     value: "+223",
//     label: "Mali (+223)",
//   },
//   {
//     value: "+356",
//     label: "Malta (+356)",
//   },
//   {
//     value: "+692",
//     label: "Marshall Islands (+692)",
//   },
//   {
//     value: "+596",
//     label: "Martinique (+596)",
//   },
//   {
//     value: "+222",
//     label: "Mauritania (+222)",
//   },
//   {
//     value: "+230",
//     label: "Mauritius (+230)",
//   },
//   {
//     value: "+262",
//     label: "Mayotte (+262)",
//   },
//   {
//     value: "+52",
//     label: "Mexico (+52)",
//   },
//   {
//     value: "+691",
//     label: "Micronesia, Federated States of (+691)",
//   },
//   {
//     value: "+373",
//     label: "Moldova, Republic of (+373)",
//   },
//   {
//     value: "+377",
//     label: "Monaco (+377)",
//   },
//   {
//     value: "+976",
//     label: "Mongolia (+976)",
//   },
//   {
//     value: "+382",
//     label: "Montenegro (+382)",
//   },
//   {
//     value: "+1664",
//     label: "Montserrat (+1664)",
//   },
//   {
//     value: "+212",
//     label: "Morocco (+212)",
//   },
//   {
//     value: "+258",
//     label: "Mozambique (+258)",
//   },
//   {
//     value: "+95",
//     label: "Myanmar (+95)",
//   },
//   {
//     value: "+264",
//     label: "Namibia (+264)",
//   },
//   {
//     value: "+674",
//     label: "Nauru (+674)",
//   },
//   {
//     value: "+977",
//     label: "Nepal (+977)",
//   },
//   {
//     value: "+31",
//     label: "Netherlands (+31)",
//   },
//   {
//     value: "+599",
//     label: "Netherlands Antilles (+599)",
//   },
//   {
//     value: "+687",
//     label: "New Caledonia (+687)",
//   },
//   {
//     value: "+64",
//     label: "New Zealand (+64)",
//   },
//   {
//     value: "+505",
//     label: "Nicaragua (+505)",
//   },
//   {
//     value: "+227",
//     label: "Niger (+227)",
//   },
//   {
//     value: "+234",
//     label: "Nigeria (+234)",
//   },
//   {
//     value: "+683",
//     label: "Niue (+683)",
//   },
//   {
//     value: "+672",
//     label: "Norfolk Island (+672)",
//   },
//   {
//     value: "+1670",
//     label: "Northern Mariana Islands (+1670)",
//   },
//   {
//     value: "+47",
//     label: "Norway (+47)",
//   },
//   {
//     value: "+968",
//     label: "Oman (+968)",
//   },
//   {
//     value: "+92",
//     label: "Pakistan (+92)",
//   },
//   {
//     value: "+680",
//     label: "Palau (+680)",
//   },
//   {
//     value: "+970",
//     label: "Palestinian Territory, Occupied (+970)",
//   },
//   {
//     value: "+507",
//     label: "Panama (+507)",
//   },
//   {
//     value: "+675",
//     label: "Papua New Guinea (+675)",
//   },
//   {
//     value: "+595",
//     label: "Paraguay (+595)",
//   },
//   {
//     value: "+51",
//     label: "Peru (+51)",
//   },
//   {
//     value: "+63",
//     label: "Philippines (+63)",
//   },
//   {
//     value: "+64",
//     label: "Pitcairn (+64)",
//   },
//   {
//     value: "+48",
//     label: "Poland (+48)",
//   },
//   {
//     value: "+351",
//     label: "Portugal (+351)",
//   },
//   {
//     value: "+1787",
//     label: "Puerto Rico (+1787)",
//   },
//   {
//     value: "+974",
//     label: "Qatar (+974)",
//   },
//   {
//     value: "+262",
//     label: "Reunion (+262)",
//   },
//   {
//     value: "+40",
//     label: "Romania (+40)",
//   },
//   {
//     value: "+7",
//     label: "Russian Federation (+7)",
//   },
//   {
//     value: "+250",
//     label: "Rwanda (+250)",
//   },
//   {
//     value: "+590",
//     label: "Saint Barthelemy (+590)",
//   },
//   {
//     value: "+290",
//     label: "Saint Helena (+290)",
//   },
//   {
//     value: "+1869",
//     label: "Saint Kitts and Nevis (+1869)",
//   },
//   {
//     value: "+1758",
//     label: "Saint Lucia (+1758)",
//   },
//   {
//     value: "+590",
//     label: "Saint Martin (+590)",
//   },
//   {
//     value: "+508",
//     label: "Saint Pierre and Miquelon (+508)",
//   },
//   {
//     value: "+1784",
//     label: "Saint Vincent and the Grenadines (+1784)",
//   },
//   {
//     value: "+684",
//     label: "Samoa (+684)",
//   },
//   {
//     value: "+378",
//     label: "San Marino (+378)",
//   },
//   {
//     value: "+239",
//     label: "Sao Tome and Principe (+239)",
//   },
//   {
//     value: "+966",
//     label: "Saudi Arabia (+966)",
//   },
//   {
//     value: "+221",
//     label: "Senegal (+221)",
//   },
//   {
//     value: "+381",
//     label: "Serbia (+381)",
//   },
//   {
//     value: "+381",
//     label: "Serbia and Montenegro (+381)",
//   },
//   {
//     value: "+248",
//     label: "Seychelles (+248)",
//   },
//   {
//     value: "+232",
//     label: "Sierra Leone (+232)",
//   },
//   {
//     value: "+65",
//     label: "Singapore (+65)",
//   },
//   {
//     value: "+721",
//     label: "St Martin (+721)",
//   },
//   {
//     value: "+421",
//     label: "Slovakia (+421)",
//   },
//   {
//     value: "+386",
//     label: "Slovenia (+386)",
//   },
//   {
//     value: "+677",
//     label: "Solomon Islands (+677)",
//   },
//   {
//     value: "+252",
//     label: "Somalia (+252)",
//   },
//   {
//     value: "+27",
//     label: "South Africa (+27)",
//   },
//   {
//     value: "+500",
//     label: "South Georgia and the South Sandwich Islands (+500)",
//   },
//   {
//     value: "+211",
//     label: "South Sudan (+211)",
//   },
//   {
//     value: "+34",
//     label: "Spain (+34)",
//   },
//   {
//     value: "+94",
//     label: "Sri Lanka (+94)",
//   },
//   {
//     value: "+249",
//     label: "Sudan (+249)",
//   },
//   {
//     value: "+597",
//     label: "Suriname (+597)",
//   },
//   {
//     value: "+47",
//     label: "Svalbard and Jan Mayen (+47)",
//   },
//   {
//     value: "+268",
//     label: "Swaziland (+268)",
//   },
//   {
//     value: "+46",
//     label: "Sweden (+46)",
//   },
//   {
//     value: "+41",
//     label: "Switzerland (+41)",
//   },
//   {
//     value: "+963",
//     label: "Syrian Arab Republic (+963)",
//   },
//   {
//     value: "+886",
//     label: "Taiwan, Province of China (+886)",
//   },
//   {
//     value: "+992",
//     label: "Tajikistan (+992)",
//   },
//   {
//     value: "+255",
//     label: "Tanzania, United Republic of (+255)",
//   },
//   {
//     value: "+66",
//     label: "Thailand (+66)",
//   },
//   {
//     value: "+670",
//     label: "Timor-Leste (+670)",
//   },
//   {
//     value: "+228",
//     label: "Togo (+228)",
//   },
//   {
//     value: "+690",
//     label: "Tokelau (+690)",
//   },
//   {
//     value: "+676",
//     label: "Tonga (+676)",
//   },
//   {
//     value: "+1868",
//     label: "Trinidad and Tobago (+1868)",
//   },
//   {
//     value: "+216",
//     label: "Tunisia (+216)",
//   },
//   {
//     value: "+90",
//     label: "Turkey (+90)",
//   },
//   {
//     value: "+7370",
//     label: "Turkmenistan (+7370)",
//   },
//   {
//     value: "+1649",
//     label: "Turks and Caicos Islands (+1649)",
//   },
//   {
//     value: "+688",
//     label: "Tuvalu (+688)",
//   },
//   {
//     value: "+256",
//     label: "Uganda (+256)",
//   },
//   {
//     value: "+380",
//     label: "Ukraine (+380)",
//   },
//   {
//     value: "+971",
//     label: "United Arab Emirates (+971)",
//   },
//   {
//     value: "+44",
//     label: "United Kingdom (+44)",
//   },
//   {
//     value: "+1",
//     label: "United States (+1)",
//   },
//   {
//     value: "+1",
//     label: "United States Minor Outlying Islands (+1)",
//   },
//   {
//     value: "+598",
//     label: "Uruguay (+598)",
//   },
//   {
//     value: "+998",
//     label: "Uzbekistan (+998)",
//   },
//   {
//     value: "+678",
//     label: "Vanuatu (+678)",
//   },
//   {
//     value: "+58",
//     label: "Venezuela (+58)",
//   },
//   {
//     value: "+84",
//     label: "Viet Nam (+84)",
//   },
//   {
//     value: "+1284",
//     label: "Virgin Islands, British (+1284)",
//   },
//   {
//     value: "+1340",
//     label: "Virgin Islands, U.s. (+1340)",
//   },
//   {
//     value: "+681",
//     label: "Wallis and Futuna (+681)",
//   },
//   {
//     value: "+212",
//     label: "Western Sahara (+212)",
//   },
//   {
//     value: "+967",
//     label: "Yemen (+967)",
//   },
//   {
//     value: "+260",
//     label: "Zambia (+260)",
//   },
//   {
//     value: "+263",
//     label: "Zimbabwe (+263)",
//   },
//   {
//     value: "+93",
//     label: "Afghanistan (+93)",
//   },
//   {
//     value: "+358",
//     label: "Aland Islands (+358)",
//   },
//   {
//     value: "+355",
//     label: "Albania (+355)",
//   },
//   {
//     value: "+213",
//     label: "Algeria (+213)",
//   },
//   {
//     value: "+1684",
//     label: "American Samoa (+1684)",
//   },
//   {
//     value: "+376",
//     label: "Andorra (+376)",
//   },
//   {
//     value: "+244",
//     label: "Angola (+244)",
//   },
//   {
//     value: "+1264",
//     label: "Anguilla (+1264)",
//   },
//   {
//     value: "+672",
//     label: "Antarctica (+672)",
//   },
//   {
//     value: "+1268",
//     label: "Antigua and Barbuda (+1268)",
//   },
//   {
//     value: "+54",
//     label: "Argentina (+54)",
//   },
//   {
//     value: "+374",
//     label: "Armenia (+374)",
//   },
//   {
//     value: "+297",
//     label: "Aruba (+297)",
//   },
//   {
//     value: "+61",
//     label: "Australia (+61)",
//   },
//   {
//     value: "+43",
//     label: "Austria (+43)",
//   },
//   {
//     value: "+994",
//     label: "Azerbaijan (+994)",
//   },
//   {
//     value: "+1242",
//     label: "Bahamas (+1242)",
//   },
//   {
//     value: "+973",
//     label: "Bahrain (+973)",
//   },
//   {
//     value: "+880",
//     label: "Bangladesh (+880)",
//   },
//   {
//     value: "+1246",
//     label: "Barbados (+1246)",
//   },
//   {
//     value: "+375",
//     label: "Belarus (+375)",
//   },
//   {
//     value: "+32",
//     label: "Belgium (+32)",
//   },
//   {
//     value: "+501",
//     label: "Belize (+501)",
//   },
//   {
//     value: "+229",
//     label: "Benin (+229)",
//   },
//   {
//     value: "+1441",
//     label: "Bermuda (+1441)",
//   },
//   {
//     value: "+975",
//     label: "Bhutan (+975)",
//   },
//   {
//     value: "+591",
//     label: "Bolivia (+591)",
//   },
//   {
//     value: "+599",
//     label: "Bonaire, Sint Eustatius and Saba (+599)",
//   },
//   {
//     value: "+387",
//     label: "Bosnia and Herzegovina (+387)",
//   },
//   {
//     value: "+267",
//     label: "Botswana (+267)",
//   },
//   {
//     value: "+55",
//     label: "Bouvet Island (+55)",
//   },
//   {
//     value: "+55",
//     label: "Brazil (+55)",
//   },
//   {
//     value: "+246",
//     label: "British Indian Ocean Territory (+246)",
//   },
//   {
//     value: "+673",
//     label: "Brunei Darussalam (+673)",
//   },
//   {
//     value: "+359",
//     label: "Bulgaria (+359)",
//   },
//   {
//     value: "+226",
//     label: "Burkina Faso (+226)",
//   },
//   {
//     value: "+257",
//     label: "Burundi (+257)",
//   },
//   {
//     value: "+855",
//     label: "Cambodia (+855)",
//   },
//   {
//     value: "+237",
//     label: "Cameroon (+237)",
//   },
//   {
//     value: "+1",
//     label: "Canada (+1)",
//   },
//   {
//     value: "+238",
//     label: "Cape Verde (+238)",
//   },
//   {
//     value: "+1345",
//     label: "Cayman Islands (+1345)",
//   },
//   {
//     value: "+236",
//     label: "Central African Republic (+236)",
//   },
//   {
//     value: "+235",
//     label: "Chad (+235)",
//   },
//   {
//     value: "+56",
//     label: "Chile (+56)",
//   },
//   {
//     value: "+86",
//     label: "China (+86)",
//   },
//   {
//     value: "+61",
//     label: "Christmas Island (+61)",
//   },
//   {
//     value: "+672",
//     label: "Cocos (Keeling) Islands (+672)",
//   },
//   {
//     value: "+57",
//     label: "Colombia (+57)",
//   },
//   {
//     value: "+269",
//     label: "Comoros (+269)",
//   },
//   {
//     value: "+242",
//     label: "Congo (+242)",
//   },
//   {
//     value: "+242",
//     label: "Congo, Democratic Republic of the Congo (+242)",
//   },
//   {
//     value: "+682",
//     label: "Cook Islands (+682)",
//   },
//   {
//     value: "+506",
//     label: "Costa Rica (+506)",
//   },
//   {
//     value: "+225",
//     label: "Cote D'Ivoire (+225)",
//   },
//   {
//     value: "+385",
//     label: "Croatia (+385)",
//   },
//   {
//     value: "+53",
//     label: "Cuba (+53)",
//   },
//   {
//     value: "+599",
//     label: "Curacao (+599)",
//   },
//   {
//     value: "+357",
//     label: "Cyprus (+357)",
//   },
//   {
//     value: "+420",
//     label: "Czech Republic (+420)",
//   },
//   {
//     value: "+45",
//     label: "Denmark (+45)",
//   },
//   {
//     value: "+253",
//     label: "Djibouti (+253)",
//   },
//   {
//     value: "+1767",
//     label: "Dominica (+1767)",
//   },
//   {
//     value: "+1809",
//     label: "Dominican Republic (+1809)",
//   },
//   {
//     value: "+593",
//     label: "Ecuador (+593)",
//   },
//   {
//     value: "+20",
//     label: "Egypt (+20)",
//   },
//   {
//     value: "+503",
//     label: "El Salvador (+503)",
//   },
//   {
//     value: "+240",
//     label: "Equatorial Guinea (+240)",
//   },
//   {
//     value: "+291",
//     label: "Eritrea (+291)",
//   },
//   {
//     value: "+372",
//     label: "Estonia (+372)",
//   },
//   {
//     value: "+251",
//     label: "Ethiopia (+251)",
//   },
//   {
//     value: "+500",
//     label: "Falkland Islands (Malvinas) (+500)",
//   },
//   {
//     value: "+298",
//     label: "Faroe Islands (+298)",
//   },
//   {
//     value: "+679",
//     label: "Fiji (+679)",
//   },
//   {
//     value: "+358",
//     label: "Finland (+358)",
//   },
//   {
//     value: "+33",
//     label: "France (+33)",
//   },
//   {
//     value: "+594",
//     label: "French Guiana (+594)",
//   },
//   {
//     value: "+689",
//     label: "French Polynesia (+689)",
//   },
//   {
//     value: "+262",
//     label: "French Southern Territories (+262)",
//   },
//   {
//     value: "+241",
//     label: "Gabon (+241)",
//   },
//   {
//     value: "+220",
//     label: "Gambia (+220)",
//   },
//   {
//     value: "+995",
//     label: "Georgia (+995)",
//   },
//   {
//     value: "+49",
//     label: "Germany (+49)",
//   },
//   {
//     value: "+233",
//     label: "Ghana (+233)",
//   },
//   {
//     value: "+350",
//     label: "Gibraltar (+350)",
//   },
//   {
//     value: "+30",
//     label: "Greece (+30)",
//   },
//   {
//     value: "+299",
//     label: "Greenland (+299)",
//   },
//   {
//     value: "+1473",
//     label: "Grenada (+1473)",
//   },
//   {
//     value: "+590",
//     label: "Guadeloupe (+590)",
//   },
//   {
//     value: "+1671",
//     label: "Guam (+1671)",
//   },
//   {
//     value: "+502",
//     label: "Guatemala (+502)",
//   },
//   {
//     value: "+44",
//     label: "Guernsey (+44)",
//   },
//   {
//     value: "+224",
//     label: "Guinea (+224)",
//   },
//   {
//     value: "+245",
//     label: "Guinea-Bissau (+245)",
//   },
//   {
//     value: "+592",
//     label: "Guyana (+592)",
//   },
//   {
//     value: "+509",
//     label: "Haiti (+509)",
//   },
//   {
//     value: "+0",
//     label: "Heard Island and McDonald Islands (+0)",
//   },
//   {
//     value: "+39",
//     label: "Holy See (Vatican City State) (+39)",
//   },
//   {
//     value: "+504",
//     label: "Honduras (+504)",
//   },
//   {
//     value: "+852",
//     label: "Hong Kong (+852)",
//   },
//   {
//     value: "+36",
//     label: "Hungary (+36)",
//   },
//   {
//     value: "+354",
//     label: "Iceland (+354)",
//   },
//   {
//     value: "+91",
//     label: "India (+91)",
//   },
//   {
//     value: "+62",
//     label: "Indonesia (+62)",
//   },
//   {
//     value: "+98",
//     label: "Iran, Islamic Republic of (+98)",
//   },
//   {
//     value: "+964",
//     label: "Iraq (+964)",
//   },
//   {
//     value: "+353",
//     label: "Ireland (+353)",
//   },
//   {
//     value: "+44",
//     label: "Isle of Man (+44)",
//   },
//   {
//     value: "+972",
//     label: "Israel (+972)",
//   },
//   {
//     value: "+39",
//     label: "Italy (+39)",
//   },
//   {
//     value: "+1876",
//     label: "Jamaica (+1876)",
//   },
//   {
//     value: "+81",
//     label: "Japan (+81)",
//   },
//   {
//     value: "+44",
//     label: "Jersey (+44)",
//   },
//   {
//     value: "+962",
//     label: "Jordan (+962)",
//   },
//   {
//     value: "+7",
//     label: "Kazakhstan (+7)",
//   },
//   {
//     value: "+254",
//     label: "Kenya (+254)",
//   },
//   {
//     value: "+686",
//     label: "Kiribati (+686)",
//   },
//   {
//     value: "+850",
//     label: "Korea, Democratic People's Republic of (+850)",
//   },
//   {
//     value: "+82",
//     label: "Korea, Republic of (+82)",
//   },
//   {
//     value: "+383",
//     label: "Kosovo (+383)",
//   },
//   {
//     value: "+965",
//     label: "Kuwait (+965)",
//   },
//   {
//     value: "+996",
//     label: "Kyrgyzstan (+996)",
//   },
//   {
//     value: "+856",
//     label: "Lao People's Democratic Republic (+856)",
//   },
//   {
//     value: "+371",
//     label: "Latvia (+371)",
//   },
//   {
//     value: "+961",
//     label: "Lebanon (+961)",
//   },
//   {
//     value: "+266",
//     label: "Lesotho (+266)",
//   },
//   {
//     value: "+231",
//     label: "Liberia (+231)",
//   },
//   {
//     value: "+218",
//     label: "Libyan Arab Jamahiriya (+218)",
//   },
//   {
//     value: "+423",
//     label: "Liechtenstein (+423)",
//   },
//   {
//     value: "+370",
//     label: "Lithuania (+370)",
//   },
//   {
//     value: "+352",
//     label: "Luxembourg (+352)",
//   },
//   {
//     value: "+853",
//     label: "Macao (+853)",
//   },
//   {
//     value: "+389",
//     label: "Macedonia, the Former Yugoslav Republic of (+389)",
//   },
//   {
//     value: "+261",
//     label: "Madagascar (+261)",
//   },
//   {
//     value: "+265",
//     label: "Malawi (+265)",
//   },
//   {
//     value: "+60",
//     label: "Malaysia (+60)",
//   },
//   {
//     value: "+960",
//     label: "Maldives (+960)",
//   },
//   {
//     value: "+223",
//     label: "Mali (+223)",
//   },
//   {
//     value: "+356",
//     label: "Malta (+356)",
//   },
//   {
//     value: "+692",
//     label: "Marshall Islands (+692)",
//   },
//   {
//     value: "+596",
//     label: "Martinique (+596)",
//   },
//   {
//     value: "+222",
//     label: "Mauritania (+222)",
//   },
//   {
//     value: "+230",
//     label: "Mauritius (+230)",
//   },
//   {
//     value: "+262",
//     label: "Mayotte (+262)",
//   },
//   {
//     value: "+52",
//     label: "Mexico (+52)",
//   },
//   {
//     value: "+691",
//     label: "Micronesia, Federated States of (+691)",
//   },
//   {
//     value: "+373",
//     label: "Moldova, Republic of (+373)",
//   },
//   {
//     value: "+377",
//     label: "Monaco (+377)",
//   },
//   {
//     value: "+976",
//     label: "Mongolia (+976)",
//   },
//   {
//     value: "+382",
//     label: "Montenegro (+382)",
//   },
//   {
//     value: "+1664",
//     label: "Montserrat (+1664)",
//   },
//   {
//     value: "+212",
//     label: "Morocco (+212)",
//   },
//   {
//     value: "+258",
//     label: "Mozambique (+258)",
//   },
//   {
//     value: "+95",
//     label: "Myanmar (+95)",
//   },
//   {
//     value: "+264",
//     label: "Namibia (+264)",
//   },
//   {
//     value: "+674",
//     label: "Nauru (+674)",
//   },
//   {
//     value: "+977",
//     label: "Nepal (+977)",
//   },
//   {
//     value: "+31",
//     label: "Netherlands (+31)",
//   },
//   {
//     value: "+599",
//     label: "Netherlands Antilles (+599)",
//   },
//   {
//     value: "+687",
//     label: "New Caledonia (+687)",
//   },
//   {
//     value: "+64",
//     label: "New Zealand (+64)",
//   },
//   {
//     value: "+505",
//     label: "Nicaragua (+505)",
//   },
//   {
//     value: "+227",
//     label: "Niger (+227)",
//   },
//   {
//     value: "+234",
//     label: "Nigeria (+234)",
//   },
//   {
//     value: "+683",
//     label: "Niue (+683)",
//   },
//   {
//     value: "+672",
//     label: "Norfolk Island (+672)",
//   },
//   {
//     value: "+1670",
//     label: "Northern Mariana Islands (+1670)",
//   },
//   {
//     value: "+47",
//     label: "Norway (+47)",
//   },
//   {
//     value: "+968",
//     label: "Oman (+968)",
//   },
//   {
//     value: "+92",
//     label: "Pakistan (+92)",
//   },
//   {
//     value: "+680",
//     label: "Palau (+680)",
//   },
//   {
//     value: "+970",
//     label: "Palestinian Territory, Occupied (+970)",
//   },
//   {
//     value: "+507",
//     label: "Panama (+507)",
//   },
//   {
//     value: "+675",
//     label: "Papua New Guinea (+675)",
//   },
//   {
//     value: "+595",
//     label: "Paraguay (+595)",
//   },
//   {
//     value: "+51",
//     label: "Peru (+51)",
//   },
//   {
//     value: "+63",
//     label: "Philippines (+63)",
//   },
//   {
//     value: "+64",
//     label: "Pitcairn (+64)",
//   },
//   {
//     value: "+48",
//     label: "Poland (+48)",
//   },
//   {
//     value: "+351",
//     label: "Portugal (+351)",
//   },
//   {
//     value: "+1787",
//     label: "Puerto Rico (+1787)",
//   },
//   {
//     value: "+974",
//     label: "Qatar (+974)",
//   },
//   {
//     value: "+262",
//     label: "Reunion (+262)",
//   },
//   {
//     value: "+40",
//     label: "Romania (+40)",
//   },
//   {
//     value: "+7",
//     label: "Russian Federation (+7)",
//   },
//   {
//     value: "+250",
//     label: "Rwanda (+250)",
//   },
//   {
//     value: "+590",
//     label: "Saint Barthelemy (+590)",
//   },
//   {
//     value: "+290",
//     label: "Saint Helena (+290)",
//   },
//   {
//     value: "+1869",
//     label: "Saint Kitts and Nevis (+1869)",
//   },
//   {
//     value: "+1758",
//     label: "Saint Lucia (+1758)",
//   },
//   {
//     value: "+590",
//     label: "Saint Martin (+590)",
//   },
//   {
//     value: "+508",
//     label: "Saint Pierre and Miquelon (+508)",
//   },
//   {
//     value: "+1784",
//     label: "Saint Vincent and the Grenadines (+1784)",
//   },
//   {
//     value: "+684",
//     label: "Samoa (+684)",
//   },
//   {
//     value: "+378",
//     label: "San Marino (+378)",
//   },
//   {
//     value: "+239",
//     label: "Sao Tome and Principe (+239)",
//   },
//   {
//     value: "+966",
//     label: "Saudi Arabia (+966)",
//   },
//   {
//     value: "+221",
//     label: "Senegal (+221)",
//   },
//   {
//     value: "+381",
//     label: "Serbia (+381)",
//   },
//   {
//     value: "+381",
//     label: "Serbia and Montenegro (+381)",
//   },
//   {
//     value: "+248",
//     label: "Seychelles (+248)",
//   },
//   {
//     value: "+232",
//     label: "Sierra Leone (+232)",
//   },
//   {
//     value: "+65",
//     label: "Singapore (+65)",
//   },
//   {
//     value: "+721",
//     label: "St Martin (+721)",
//   },
//   {
//     value: "+421",
//     label: "Slovakia (+421)",
//   },
//   {
//     value: "+386",
//     label: "Slovenia (+386)",
//   },
//   {
//     value: "+677",
//     label: "Solomon Islands (+677)",
//   },
//   {
//     value: "+252",
//     label: "Somalia (+252)",
//   },
//   {
//     value: "+27",
//     label: "South Africa (+27)",
//   },
//   {
//     value: "+500",
//     label: "South Georgia and the South Sandwich Islands (+500)",
//   },
//   {
//     value: "+211",
//     label: "South Sudan (+211)",
//   },
//   {
//     value: "+34",
//     label: "Spain (+34)",
//   },
//   {
//     value: "+94",
//     label: "Sri Lanka (+94)",
//   },
//   {
//     value: "+249",
//     label: "Sudan (+249)",
//   },
//   {
//     value: "+597",
//     label: "Suriname (+597)",
//   },
//   {
//     value: "+47",
//     label: "Svalbard and Jan Mayen (+47)",
//   },
//   {
//     value: "+268",
//     label: "Swaziland (+268)",
//   },
//   {
//     value: "+46",
//     label: "Sweden (+46)",
//   },
//   {
//     value: "+41",
//     label: "Switzerland (+41)",
//   },
//   {
//     value: "+963",
//     label: "Syrian Arab Republic (+963)",
//   },
//   {
//     value: "+886",
//     label: "Taiwan, Province of China (+886)",
//   },
//   {
//     value: "+992",
//     label: "Tajikistan (+992)",
//   },
//   {
//     value: "+255",
//     label: "Tanzania, United Republic of (+255)",
//   },
//   {
//     value: "+66",
//     label: "Thailand (+66)",
//   },
//   {
//     value: "+670",
//     label: "Timor-Leste (+670)",
//   },
//   {
//     value: "+228",
//     label: "Togo (+228)",
//   },
//   {
//     value: "+690",
//     label: "Tokelau (+690)",
//   },
//   {
//     value: "+676",
//     label: "Tonga (+676)",
//   },
//   {
//     value: "+1868",
//     label: "Trinidad and Tobago (+1868)",
//   },
//   {
//     value: "+216",
//     label: "Tunisia (+216)",
//   },
//   {
//     value: "+90",
//     label: "Turkey (+90)",
//   },
//   {
//     value: "+7370",
//     label: "Turkmenistan (+7370)",
//   },
//   {
//     value: "+1649",
//     label: "Turks and Caicos Islands (+1649)",
//   },
//   {
//     value: "+688",
//     label: "Tuvalu (+688)",
//   },
//   {
//     value: "+256",
//     label: "Uganda (+256)",
//   },
//   {
//     value: "+380",
//     label: "Ukraine (+380)",
//   },
//   {
//     value: "+971",
//     label: "United Arab Emirates (+971)",
//   },
//   {
//     value: "+44",
//     label: "United Kingdom (+44)",
//   },
//   {
//     value: "+1",
//     label: "United States (+1)",
//   },
//   {
//     value: "+1",
//     label: "United States Minor Outlying Islands (+1)",
//   },
//   {
//     value: "+598",
//     label: "Uruguay (+598)",
//   },
//   {
//     value: "+998",
//     label: "Uzbekistan (+998)",
//   },
//   {
//     value: "+678",
//     label: "Vanuatu (+678)",
//   },
//   {
//     value: "+58",
//     label: "Venezuela (+58)",
//   },
//   {
//     value: "+84",
//     label: "Viet Nam (+84)",
//   },
//   {
//     value: "+1284",
//     label: "Virgin Islands, British (+1284)",
//   },
//   {
//     value: "+1340",
//     label: "Virgin Islands, U.s. (+1340)",
//   },
//   {
//     value: "+681",
//     label: "Wallis and Futuna (+681)",
//   },
//   {
//     value: "+212",
//     label: "Western Sahara (+212)",
//   },
//   {
//     value: "+967",
//     label: "Yemen (+967)",
//   },
//   {
//     value: "+260",
//     label: "Zambia (+260)",
//   },
//   {
//     value: "+263",
//     label: "Zimbabwe (+263)",
//   },
//   {
//     value: "+93",
//     label: "Afghanistan (+93)",
//   },
//   {
//     value: "+358",
//     label: "Aland Islands (+358)",
//   },
//   {
//     value: "+355",
//     label: "Albania (+355)",
//   },
//   {
//     value: "+213",
//     label: "Algeria (+213)",
//   },
//   {
//     value: "+1684",
//     label: "American Samoa (+1684)",
//   },
//   {
//     value: "+376",
//     label: "Andorra (+376)",
//   },
//   {
//     value: "+244",
//     label: "Angola (+244)",
//   },
//   {
//     value: "+1264",
//     label: "Anguilla (+1264)",
//   },
//   {
//     value: "+672",
//     label: "Antarctica (+672)",
//   },
//   {
//     value: "+1268",
//     label: "Antigua and Barbuda (+1268)",
//   },
//   {
//     value: "+54",
//     label: "Argentina (+54)",
//   },
//   {
//     value: "+374",
//     label: "Armenia (+374)",
//   },
//   {
//     value: "+297",
//     label: "Aruba (+297)",
//   },
//   {
//     value: "+61",
//     label: "Australia (+61)",
//   },
//   {
//     value: "+43",
//     label: "Austria (+43)",
//   },
//   {
//     value: "+994",
//     label: "Azerbaijan (+994)",
//   },
//   {
//     value: "+1242",
//     label: "Bahamas (+1242)",
//   },
//   {
//     value: "+973",
//     label: "Bahrain (+973)",
//   },
//   {
//     value: "+880",
//     label: "Bangladesh (+880)",
//   },
//   {
//     value: "+1246",
//     label: "Barbados (+1246)",
//   },
//   {
//     value: "+375",
//     label: "Belarus (+375)",
//   },
//   {
//     value: "+32",
//     label: "Belgium (+32)",
//   },
//   {
//     value: "+501",
//     label: "Belize (+501)",
//   },
//   {
//     value: "+229",
//     label: "Benin (+229)",
//   },
//   {
//     value: "+1441",
//     label: "Bermuda (+1441)",
//   },
//   {
//     value: "+975",
//     label: "Bhutan (+975)",
//   },
//   {
//     value: "+591",
//     label: "Bolivia (+591)",
//   },
//   {
//     value: "+599",
//     label: "Bonaire, Sint Eustatius and Saba (+599)",
//   },
//   {
//     value: "+387",
//     label: "Bosnia and Herzegovina (+387)",
//   },
//   {
//     value: "+267",
//     label: "Botswana (+267)",
//   },
//   {
//     value: "+55",
//     label: "Bouvet Island (+55)",
//   },
//   {
//     value: "+55",
//     label: "Brazil (+55)",
//   },
//   {
//     value: "+246",
//     label: "British Indian Ocean Territory (+246)",
//   },
//   {
//     value: "+673",
//     label: "Brunei Darussalam (+673)",
//   },
//   {
//     value: "+359",
//     label: "Bulgaria (+359)",
//   },
//   {
//     value: "+226",
//     label: "Burkina Faso (+226)",
//   },
//   {
//     value: "+257",
//     label: "Burundi (+257)",
//   },
//   {
//     value: "+855",
//     label: "Cambodia (+855)",
//   },
//   {
//     value: "+237",
//     label: "Cameroon (+237)",
//   },
//   {
//     value: "+1",
//     label: "Canada (+1)",
//   },
//   {
//     value: "+238",
//     label: "Cape Verde (+238)",
//   },
//   {
//     value: "+1345",
//     label: "Cayman Islands (+1345)",
//   },
//   {
//     value: "+236",
//     label: "Central African Republic (+236)",
//   },
//   {
//     value: "+235",
//     label: "Chad (+235)",
//   },
//   {
//     value: "+56",
//     label: "Chile (+56)",
//   },
//   {
//     value: "+86",
//     label: "China (+86)",
//   },
//   {
//     value: "+61",
//     label: "Christmas Island (+61)",
//   },
//   {
//     value: "+672",
//     label: "Cocos (Keeling) Islands (+672)",
//   },
//   {
//     value: "+57",
//     label: "Colombia (+57)",
//   },
//   {
//     value: "+269",
//     label: "Comoros (+269)",
//   },
//   {
//     value: "+242",
//     label: "Congo (+242)",
//   },
//   {
//     value: "+242",
//     label: "Congo, Democratic Republic of the Congo (+242)",
//   },
//   {
//     value: "+682",
//     label: "Cook Islands (+682)",
//   },
//   {
//     value: "+506",
//     label: "Costa Rica (+506)",
//   },
//   {
//     value: "+225",
//     label: "Cote D'Ivoire (+225)",
//   },
//   {
//     value: "+385",
//     label: "Croatia (+385)",
//   },
//   {
//     value: "+53",
//     label: "Cuba (+53)",
//   },
//   {
//     value: "+599",
//     label: "Curacao (+599)",
//   },
//   {
//     value: "+357",
//     label: "Cyprus (+357)",
//   },
//   {
//     value: "+420",
//     label: "Czech Republic (+420)",
//   },
//   {
//     value: "+45",
//     label: "Denmark (+45)",
//   },
//   {
//     value: "+253",
//     label: "Djibouti (+253)",
//   },
//   {
//     value: "+1767",
//     label: "Dominica (+1767)",
//   },
//   {
//     value: "+1809",
//     label: "Dominican Republic (+1809)",
//   },
//   {
//     value: "+593",
//     label: "Ecuador (+593)",
//   },
//   {
//     value: "+20",
//     label: "Egypt (+20)",
//   },
//   {
//     value: "+503",
//     label: "El Salvador (+503)",
//   },
//   {
//     value: "+240",
//     label: "Equatorial Guinea (+240)",
//   },
//   {
//     value: "+291",
//     label: "Eritrea (+291)",
//   },
//   {
//     value: "+372",
//     label: "Estonia (+372)",
//   },
//   {
//     value: "+251",
//     label: "Ethiopia (+251)",
//   },
//   {
//     value: "+500",
//     label: "Falkland Islands (Malvinas) (+500)",
//   },
//   {
//     value: "+298",
//     label: "Faroe Islands (+298)",
//   },
//   {
//     value: "+679",
//     label: "Fiji (+679)",
//   },
//   {
//     value: "+358",
//     label: "Finland (+358)",
//   },
//   {
//     value: "+33",
//     label: "France (+33)",
//   },
//   {
//     value: "+594",
//     label: "French Guiana (+594)",
//   },
//   {
//     value: "+689",
//     label: "French Polynesia (+689)",
//   },
//   {
//     value: "+262",
//     label: "French Southern Territories (+262)",
//   },
//   {
//     value: "+241",
//     label: "Gabon (+241)",
//   },
//   {
//     value: "+220",
//     label: "Gambia (+220)",
//   },
//   {
//     value: "+995",
//     label: "Georgia (+995)",
//   },
//   {
//     value: "+49",
//     label: "Germany (+49)",
//   },
//   {
//     value: "+233",
//     label: "Ghana (+233)",
//   },
//   {
//     value: "+350",
//     label: "Gibraltar (+350)",
//   },
//   {
//     value: "+30",
//     label: "Greece (+30)",
//   },
//   {
//     value: "+299",
//     label: "Greenland (+299)",
//   },
//   {
//     value: "+1473",
//     label: "Grenada (+1473)",
//   },
//   {
//     value: "+590",
//     label: "Guadeloupe (+590)",
//   },
//   {
//     value: "+1671",
//     label: "Guam (+1671)",
//   },
//   {
//     value: "+502",
//     label: "Guatemala (+502)",
//   },
//   {
//     value: "+44",
//     label: "Guernsey (+44)",
//   },
//   {
//     value: "+224",
//     label: "Guinea (+224)",
//   },
//   {
//     value: "+245",
//     label: "Guinea-Bissau (+245)",
//   },
//   {
//     value: "+592",
//     label: "Guyana (+592)",
//   },
//   {
//     value: "+509",
//     label: "Haiti (+509)",
//   },
//   {
//     value: "+0",
//     label: "Heard Island and McDonald Islands (+0)",
//   },
//   {
//     value: "+39",
//     label: "Holy See (Vatican City State) (+39)",
//   },
//   {
//     value: "+504",
//     label: "Honduras (+504)",
//   },
//   {
//     value: "+852",
//     label: "Hong Kong (+852)",
//   },
//   {
//     value: "+36",
//     label: "Hungary (+36)",
//   },
//   {
//     value: "+354",
//     label: "Iceland (+354)",
//   },
//   {
//     value: "+91",
//     label: "India (+91)",
//   },
//   {
//     value: "+62",
//     label: "Indonesia (+62)",
//   },
//   {
//     value: "+98",
//     label: "Iran, Islamic Republic of (+98)",
//   },
//   {
//     value: "+964",
//     label: "Iraq (+964)",
//   },
//   {
//     value: "+353",
//     label: "Ireland (+353)",
//   },
//   {
//     value: "+44",
//     label: "Isle of Man (+44)",
//   },
//   {
//     value: "+972",
//     label: "Israel (+972)",
//   },
//   {
//     value: "+39",
//     label: "Italy (+39)",
//   },
//   {
//     value: "+1876",
//     label: "Jamaica (+1876)",
//   },
//   {
//     value: "+81",
//     label: "Japan (+81)",
//   },
//   {
//     value: "+44",
//     label: "Jersey (+44)",
//   },
//   {
//     value: "+962",
//     label: "Jordan (+962)",
//   },
//   {
//     value: "+7",
//     label: "Kazakhstan (+7)",
//   },
//   {
//     value: "+254",
//     label: "Kenya (+254)",
//   },
//   {
//     value: "+686",
//     label: "Kiribati (+686)",
//   },
//   {
//     value: "+850",
//     label: "Korea, Democratic People's Republic of (+850)",
//   },
//   {
//     value: "+82",
//     label: "Korea, Republic of (+82)",
//   },
//   {
//     value: "+383",
//     label: "Kosovo (+383)",
//   },
//   {
//     value: "+965",
//     label: "Kuwait (+965)",
//   },
//   {
//     value: "+996",
//     label: "Kyrgyzstan (+996)",
//   },
//   {
//     value: "+856",
//     label: "Lao People's Democratic Republic (+856)",
//   },
//   {
//     value: "+371",
//     label: "Latvia (+371)",
//   },
//   {
//     value: "+961",
//     label: "Lebanon (+961)",
//   },
//   {
//     value: "+266",
//     label: "Lesotho (+266)",
//   },
//   {
//     value: "+231",
//     label: "Liberia (+231)",
//   },
//   {
//     value: "+218",
//     label: "Libyan Arab Jamahiriya (+218)",
//   },
//   {
//     value: "+423",
//     label: "Liechtenstein (+423)",
//   },
//   {
//     value: "+370",
//     label: "Lithuania (+370)",
//   },
//   {
//     value: "+352",
//     label: "Luxembourg (+352)",
//   },
//   {
//     value: "+853",
//     label: "Macao (+853)",
//   },
//   {
//     value: "+389",
//     label: "Macedonia, the Former Yugoslav Republic of (+389)",
//   },
//   {
//     value: "+261",
//     label: "Madagascar (+261)",
//   },
//   {
//     value: "+265",
//     label: "Malawi (+265)",
//   },
//   {
//     value: "+60",
//     label: "Malaysia (+60)",
//   },
//   {
//     value: "+960",
//     label: "Maldives (+960)",
//   },
//   {
//     value: "+223",
//     label: "Mali (+223)",
//   },
//   {
//     value: "+356",
//     label: "Malta (+356)",
//   },
//   {
//     value: "+692",
//     label: "Marshall Islands (+692)",
//   },
//   {
//     value: "+596",
//     label: "Martinique (+596)",
//   },
//   {
//     value: "+222",
//     label: "Mauritania (+222)",
//   },
//   {
//     value: "+230",
//     label: "Mauritius (+230)",
//   },
//   {
//     value: "+262",
//     label: "Mayotte (+262)",
//   },
//   {
//     value: "+52",
//     label: "Mexico (+52)",
//   },
//   {
//     value: "+691",
//     label: "Micronesia, Federated States of (+691)",
//   },
//   {
//     value: "+373",
//     label: "Moldova, Republic of (+373)",
//   },
//   {
//     value: "+377",
//     label: "Monaco (+377)",
//   },
//   {
//     value: "+976",
//     label: "Mongolia (+976)",
//   },
//   {
//     value: "+382",
//     label: "Montenegro (+382)",
//   },
//   {
//     value: "+1664",
//     label: "Montserrat (+1664)",
//   },
//   {
//     value: "+212",
//     label: "Morocco (+212)",
//   },
//   {
//     value: "+258",
//     label: "Mozambique (+258)",
//   },
//   {
//     value: "+95",
//     label: "Myanmar (+95)",
//   },
//   {
//     value: "+264",
//     label: "Namibia (+264)",
//   },
//   {
//     value: "+674",
//     label: "Nauru (+674)",
//   },
//   {
//     value: "+977",
//     label: "Nepal (+977)",
//   },
//   {
//     value: "+31",
//     label: "Netherlands (+31)",
//   },
//   {
//     value: "+599",
//     label: "Netherlands Antilles (+599)",
//   },
//   {
//     value: "+687",
//     label: "New Caledonia (+687)",
//   },
//   {
//     value: "+64",
//     label: "New Zealand (+64)",
//   },
//   {
//     value: "+505",
//     label: "Nicaragua (+505)",
//   },
//   {
//     value: "+227",
//     label: "Niger (+227)",
//   },
//   {
//     value: "+234",
//     label: "Nigeria (+234)",
//   },
//   {
//     value: "+683",
//     label: "Niue (+683)",
//   },
//   {
//     value: "+672",
//     label: "Norfolk Island (+672)",
//   },
//   {
//     value: "+1670",
//     label: "Northern Mariana Islands (+1670)",
//   },
//   {
//     value: "+47",
//     label: "Norway (+47)",
//   },
//   {
//     value: "+968",
//     label: "Oman (+968)",
//   },
//   {
//     value: "+92",
//     label: "Pakistan (+92)",
//   },
//   {
//     value: "+680",
//     label: "Palau (+680)",
//   },
//   {
//     value: "+970",
//     label: "Palestinian Territory, Occupied (+970)",
//   },
//   {
//     value: "+507",
//     label: "Panama (+507)",
//   },
//   {
//     value: "+675",
//     label: "Papua New Guinea (+675)",
//   },
//   {
//     value: "+595",
//     label: "Paraguay (+595)",
//   },
//   {
//     value: "+51",
//     label: "Peru (+51)",
//   },
//   {
//     value: "+63",
//     label: "Philippines (+63)",
//   },
//   {
//     value: "+64",
//     label: "Pitcairn (+64)",
//   },
//   {
//     value: "+48",
//     label: "Poland (+48)",
//   },
//   {
//     value: "+351",
//     label: "Portugal (+351)",
//   },
//   {
//     value: "+1787",
//     label: "Puerto Rico (+1787)",
//   },
//   {
//     value: "+974",
//     label: "Qatar (+974)",
//   },
//   {
//     value: "+262",
//     label: "Reunion (+262)",
//   },
//   {
//     value: "+40",
//     label: "Romania (+40)",
//   },
//   {
//     value: "+7",
//     label: "Russian Federation (+7)",
//   },
//   {
//     value: "+250",
//     label: "Rwanda (+250)",
//   },
//   {
//     value: "+590",
//     label: "Saint Barthelemy (+590)",
//   },
//   {
//     value: "+290",
//     label: "Saint Helena (+290)",
//   },
//   {
//     value: "+1869",
//     label: "Saint Kitts and Nevis (+1869)",
//   },
//   {
//     value: "+1758",
//     label: "Saint Lucia (+1758)",
//   },
//   {
//     value: "+590",
//     label: "Saint Martin (+590)",
//   },
//   {
//     value: "+508",
//     label: "Saint Pierre and Miquelon (+508)",
//   },
//   {
//     value: "+1784",
//     label: "Saint Vincent and the Grenadines (+1784)",
//   },
//   {
//     value: "+684",
//     label: "Samoa (+684)",
//   },
//   {
//     value: "+378",
//     label: "San Marino (+378)",
//   },
//   {
//     value: "+239",
//     label: "Sao Tome and Principe (+239)",
//   },
//   {
//     value: "+966",
//     label: "Saudi Arabia (+966)",
//   },
//   {
//     value: "+221",
//     label: "Senegal (+221)",
//   },
//   {
//     value: "+381",
//     label: "Serbia (+381)",
//   },
//   {
//     value: "+381",
//     label: "Serbia and Montenegro (+381)",
//   },
//   {
//     value: "+248",
//     label: "Seychelles (+248)",
//   },
//   {
//     value: "+232",
//     label: "Sierra Leone (+232)",
//   },
//   {
//     value: "+65",
//     label: "Singapore (+65)",
//   },
//   {
//     value: "+721",
//     label: "St Martin (+721)",
//   },
//   {
//     value: "+421",
//     label: "Slovakia (+421)",
//   },
//   {
//     value: "+386",
//     label: "Slovenia (+386)",
//   },
//   {
//     value: "+677",
//     label: "Solomon Islands (+677)",
//   },
//   {
//     value: "+252",
//     label: "Somalia (+252)",
//   },
//   {
//     value: "+27",
//     label: "South Africa (+27)",
//   },
//   {
//     value: "+500",
//     label: "South Georgia and the South Sandwich Islands (+500)",
//   },
//   {
//     value: "+211",
//     label: "South Sudan (+211)",
//   },
//   {
//     value: "+34",
//     label: "Spain (+34)",
//   },
//   {
//     value: "+94",
//     label: "Sri Lanka (+94)",
//   },
//   {
//     value: "+249",
//     label: "Sudan (+249)",
//   },
//   {
//     value: "+597",
//     label: "Suriname (+597)",
//   },
//   {
//     value: "+47",
//     label: "Svalbard and Jan Mayen (+47)",
//   },
//   {
//     value: "+268",
//     label: "Swaziland (+268)",
//   },
//   {
//     value: "+46",
//     label: "Sweden (+46)",
//   },
//   {
//     value: "+41",
//     label: "Switzerland (+41)",
//   },
//   {
//     value: "+963",
//     label: "Syrian Arab Republic (+963)",
//   },
//   {
//     value: "+886",
//     label: "Taiwan, Province of China (+886)",
//   },
//   {
//     value: "+992",
//     label: "Tajikistan (+992)",
//   },
//   {
//     value: "+255",
//     label: "Tanzania, United Republic of (+255)",
//   },
//   {
//     value: "+66",
//     label: "Thailand (+66)",
//   },
//   {
//     value: "+670",
//     label: "Timor-Leste (+670)",
//   },
//   {
//     value: "+228",
//     label: "Togo (+228)",
//   },
//   {
//     value: "+690",
//     label: "Tokelau (+690)",
//   },
//   {
//     value: "+676",
//     label: "Tonga (+676)",
//   },
//   {
//     value: "+1868",
//     label: "Trinidad and Tobago (+1868)",
//   },
//   {
//     value: "+216",
//     label: "Tunisia (+216)",
//   },
//   {
//     value: "+90",
//     label: "Turkey (+90)",
//   },
//   {
//     value: "+7370",
//     label: "Turkmenistan (+7370)",
//   },
//   {
//     value: "+1649",
//     label: "Turks and Caicos Islands (+1649)",
//   },
//   {
//     value: "+688",
//     label: "Tuvalu (+688)",
//   },
//   {
//     value: "+256",
//     label: "Uganda (+256)",
//   },
//   {
//     value: "+380",
//     label: "Ukraine (+380)",
//   },
//   {
//     value: "+971",
//     label: "United Arab Emirates (+971)",
//   },
//   {
//     value: "+44",
//     label: "United Kingdom (+44)",
//   },
//   {
//     value: "+1",
//     label: "United States (+1)",
//   },
//   {
//     value: "+1",
//     label: "United States Minor Outlying Islands (+1)",
//   },
//   {
//     value: "+598",
//     label: "Uruguay (+598)",
//   },
//   {
//     value: "+998",
//     label: "Uzbekistan (+998)",
//   },
//   {
//     value: "+678",
//     label: "Vanuatu (+678)",
//   },
//   {
//     value: "+58",
//     label: "Venezuela (+58)",
//   },
//   {
//     value: "+84",
//     label: "Viet Nam (+84)",
//   },
//   {
//     value: "+1284",
//     label: "Virgin Islands, British (+1284)",
//   },
//   {
//     value: "+1340",
//     label: "Virgin Islands, U.s. (+1340)",
//   },
//   {
//     value: "+681",
//     label: "Wallis and Futuna (+681)",
//   },
//   {
//     value: "+212",
//     label: "Western Sahara (+212)",
//   },
//   {
//     value: "+967",
//     label: "Yemen (+967)",
//   },
//   {
//     value: "+260",
//     label: "Zambia (+260)",
//   },
//   {
//     value: "+263",
//     label: "Zimbabwe (+263)",
//   }
// ];
