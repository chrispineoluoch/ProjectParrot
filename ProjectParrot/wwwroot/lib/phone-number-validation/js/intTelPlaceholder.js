// Set the custom international phone number placeholders
function customPlaceholder(selectedCountryPlaceholder, selectedCountryData) {
    if (!selectedCountryData) {
        // Set the default value for the first load
        return '+1 123 456 789'; // United States of America
    }

    switch (selectedCountryData.iso2) {
        case "af":
            return "+93 123 456 789"; // Afghanistan
        case "al":
            return "+355 123 456 789"; // Albania
        case "dz":
            return "+213 123 456 789"; // Algeria
        case "as":
            return "+1 684 123 456 789"; // American Samoa
        case "ad":
            return "+376 123 456 789"; // Andorra
        case "ao":
            return "+244 123 456 789"; // Angola
        case "ai":
            return "+1 264 123 456 789"; // Anguilla
        case "ag":
            return "+1 268 123 456 789"; // Antigua and Barbuda
        case "ar":
            return "+54 123 456 789"; // Argentina
        case "am":
            return "+374 123 456 789"; // Armenia
        case "aw":
            return "+297 123 456 789"; // Aruba
        case "sh-ac":
            return "+247 123 456 789"; // Ascension Island
        case "au":
            return "+61 123 456 789"; // Australia
        case "at":
            return "+43 123 456 789"; // Austria
        case "az":
            return "+994 123 456 789"; // Azerbaijan
        case "bs":
            return "+1 242 123 456 789"; // Bahamas
        case "bh":
            return "+973 123 456 789"; // Bahrain
        case "bd":
            return "+880 123 456 789"; // Bangladesh
        case "bb":
            return "+1 246 123 456 789"; // Barbados
        case "by":
            return "+375 123 456 789"; // Belarus
        case "be":
            return "+32 123 456 789"; // Belgium
        case "bz":
            return "+501 123 456 789"; // Belize
        case "bj":
            return "+229 123 456 789"; // Benin
        case "bm":
            return "+1 441 123 456 789"; // Bermuda
        case "bt":
            return "+975 123 456 789"; // Bhutan
        case "bo":
            return "+591 123 456 789"; // Bolivia
        case "ba":
            return "+387 123 456 789"; // Bosnia and Herzegovina
        case "bw":
            return "+267 123 456 789"; // Botswana
        case "br":
            return "+55 123 456 789"; // Brazil
        case "io":
            return "+246 123 456 789"; // British Indian Ocean Territory
        case "vg":
            return "+1 284 123 456 789"; // British Virgin Islands
        case "bn":
            return "+673 123 456 789"; // Brunei
        case "bg":
            return "+359 123 456 789"; // Bulgaria
        case "bf":
            return "+226 123 456 789"; // Burkina Faso
        case "bi":
            return "+257 123 456 789"; // Burundi
        case "kh":
            return "+855 123 456 789"; // Cambodia
        case "cm":
            return "+237 123 456 789"; // Cameroon
        case "ca":
            return "+1 123 456 789"; // Canada
        case "cv":
            return "+238 123 456 789"; // Cape Verde
        case "bq":
            return "+599 123 456 789"; // Caribbean Netherlands
        case "ky":
            return "+1 345 123 456 789"; // Cayman Islands
        case "cf":
            return "+236 123 456 789"; // Central African Republic
        case "td":
            return "+235 123 456 789"; // Chad
        case "cl":
            return "+56 123 456 789"; // Chile
        case "cn":
            return "+86 123 456 789"; // China
        case "cx":
            return "+61 123 456 789"; // Christmas Island
        case "cc":
            return "+61 123 456 789"; // Cocos (Keeling) Islands
        case "co":
            return "+57 123 456 789"; // Colombia
        case "km":
            return "+269 123 456 789"; // Comoros
        case "cg":
            return "+242 123 456 789"; // Congo
        case "cd":
            return "+243 123 456 789"; // Congo, Democratic Republic of the
        case "ck":
            return "+682 123 456 789"; // Cook Islands
        case "cr":
            return "+506 123 456 789"; // Costa Rica
        case "ci":
            return "+225 123 456 789"; // Cote d'Ivoire
        case "hr":
            return "+385 123 456 789"; // Croatia
        case "cu":
            return "+53 123 456 789"; // Cuba
        case "cw":
            return "+599 123 456 789"; // Curaçao
        case "cy":
            return "+357 123 456 789"; // Cyprus
        case "cz":
            return "+420 123 456 789"; // Czech Republic
        case "dk":
            return "+45 123 456 789"; // Denmark
        case "dj":
            return "+253 123 456 789"; // Djibouti
        case "dm":
            return "+1 767 123 456 789"; // Dominica
        case "do":
            return "+1 809 123 456 789"; // Dominican Republic
        case "ec":
            return "+593 123 456 789"; // Ecuador
        case "eg":
            return "+20 123 456 789"; // Egypt
        case "sv":
            return "+503 123 456 789"; // El Salvador
        case "gq":
            return "+240 123 456 789"; // Equatorial Guinea
        case "er":
            return "+291 123 456 789"; // Eritrea
        case "ee":
            return "+372 123 456 789"; // Estonia
        case "sz":
            return "+268 123 456 789"; // Eswatini
        case "et":
            return "+251 123 456 789"; // Ethiopia
        case "fk":
            return "+500 123 456 789"; // Falkland Islands
        case "fo":
            return "+298 123 456 789"; // Faroe Islands
        case "fj":
            return "+679 123 456 789"; // Fiji
        case "fi":
            return "+358 123 456 789"; // Finland
        case "fr":
            return "+33 123 456 789"; // France
        case "gf":
            return "+594 123 456 789"; // French Guiana
        case "pf":
            return "+689 123 456 789"; // French Polynesia
        case "ga":
            return "+241 123 456 789"; // Gabon
        case "gm":
            return "+220 123 456 789"; // Gambia
        case "ge":
            return "+995 123 456 789"; // Georgia
        case "de":
            return "+49 123 456 789"; // Germany
        case "gh":
            return "+233 123 456 789"; // Ghana
        case "gi":
            return "+350 123 456 789"; // Gibraltar
        case "gr":
            return "+30 123 456 789"; // Greece
        case "gl":
            return "+299 123 456 789"; // Greenland (Kalaallit Nunaat)
        case "gd":
            return "+1 473 123 456 789"; // Grenada
        case "gp":
            return "+590 123 456 789"; // Guadeloupe
        case "gu":
            return "+1 671 123 456 789"; // Guam
        case "gt":
            return "+502 123 456 789"; // Guatemala
        case "gg":
            return "+44 1481 123 456 789"; // Guernsey
        case "gn":
            return "+224 123 456 789"; // Guinea
        case "gw":
            return "+245 123 456 789"; // Guinea-Bissau
        case "gy":
            return "+592 123 456 789"; // Guyana
        case "ht":
            return "+509 123 456 789"; // Haiti
        case "hn":
            return "+504 123 456 789"; // Honduras
        case "hk":
            return "+852 123 456 789"; // Hong Kong
        case "hu":
            return "+36 123 456 789"; // Hungary
        case "is":
            return "+354 123 456 789"; // Iceland
        case "in":
            return "+91 123 456 789"; // India
        case "id":
            return "+62 123 456 789"; // Indonesia
        case "ir":
            return "+98 123 456 789"; // Iran
        case "iq":
            return "+964 123 456 789"; // Iraq
        case "ie":
            return "+353 123 456 789"; // Ireland
        case "im":
            return "+44 1624 123 456 789"; // Isle of Man
        case "il":
            return "+972 123 456 789"; // Israel
        case "it":
            return "+39 123 456 789"; // Italy
        case "jm":
            return "+1 876 123 456 789"; // Jamaica
        case "jp":
            return "+81 123 456 789"; // Japan
        case "je":
            return "+44 1534 123 456 789"; // Jersey
        case "jo":
            return "+962 123 456 789"; // Jordan
        case "kz":
            return "+7 123 456 789"; // Kazakhstan
        case "ke":
            return "+254 123 456 789"; // Kenya
        case "ki":
            return "+686 123 456 789"; // Kiribati
        case "xk":
            return "+383 123 456 789"; // Kosovo
        case "kp":
            return "+850 123 456 789"; // Korea, Democratic People's Republic of
        case "kr":
            return "+82 123 456 789"; // Korea, Republic of
        case "xk":
            return "+383 123 456 789"; // Kosovo
        case "kw":
            return "+965 123 456 789"; // Kuwait
        case "kg":
            return "+996 123 456 789"; // Kyrgyzstan
        case "la":
            return "+856 123 456 789"; // Laos
        case "lv":
            return "+371 123 456 789"; // Latvia
        case "lb":
            return "+961 123 456 789"; // Lebanon
        case "ls":
            return "+266 123 456 789"; // Lesotho
        case "lr":
            return "+231 123 456 789"; // Liberia
        case "ly":
            return "+218 123 456 789"; // Libya
        case "li":
            return "+423 123 456 789"; // Liechtenstein
        case "lt":
            return "+370 123 456 789"; // Lithuania
        case "lu":
            return "+352 123 456 789"; // Luxembourg
        case "mo":
            return "+853 123 456 789"; // Macau
        case "mk":
            return "+389 123 456 789"; // Macedonia
        case "mg":
            return "+261 123 456 789"; // Madagascar
        case "mw":
            return "+265 123 456 789"; // Malawi
        case "my":
            return "+60 123 456 789"; // Malaysia
        case "mv":
            return "+960 123 456 789"; // Maldives
        case "ml":
            return "+223 123 456 789"; // Mali
        case "mt":
            return "+356 123 456 789"; // Malta
        case "mh":
            return "+692 123 456 789"; // Marshall Islands
        case "mq":
            return "+596 123 456 789"; // Martinique
        case "mr":
            return "+222 123 456 789"; // Mauritania
        case "mu":
            return "+230 123 456 789"; // Mauritius
        case "yt":
            return "+262 123 456 789"; // Mayotte
        case "mx":
            return "+52 123 456 789"; // Mexico
        case "fm":
            return "+691 123 456 789"; // Micronesia
        case "md":
            return "+373 123 456 789"; // Moldova
        case "mc":
            return "+377 123 456 789"; // Monaco
        case "mn":
            return "+976 123 456 789"; // Mongolia
        case "me":
            return "+382 123 456 789"; // Montenegro
        case "ms":
            return "+1 664 123 456 789"; // Montserrat
        case "ma":
            return "+212 123 456 789"; // Morocco
        case "mz":
            return "+258 123 456 789"; // Mozambique
        case "mm":
            return "+95 123 456 789"; // Myanmar (Burma)
        case "na":
            return "+264 123 456 789"; // Namibia
        case "nr":
            return "+674 123 456 789"; // Nauru
        case "np":
            return "+977 123 456 789"; // Nepal
        case "nl":
            return "+31 123 456 789"; // Netherlands
        case "nc":
            return "+687 123 456 789"; // New Caledonia
        case "nz":
            return "+64 123 456 789"; // New Zealand
        case "ni":
            return "+505 123 456 789"; // Nicaragua
        case "ne":
            return "+227 123 456 789"; // Niger
        case "ng":
            return "+234 123 456 789"; // Nigeria
        case "nu":
            return "+683 123 456 789"; // Niue
        case "nf":
            return "+672 123 456 789"; // Norfolk Island
        case "kp":
            return "+850 123 456 789"; // North Korea
        case "mp":
            return "+1 670 123 456 789"; // Northern Mariana Islands
        case "no":
            return "+47 123 456 789"; // Norway
        case "om":
            return "+968 123 456 789"; // Oman
        case "pk":
            return "+92 123 456 789"; // Pakistan
        case "pw":
            return "+680 123 456 789"; // Palau
        case "ps":
            return "+970 123 456 789"; // Palestine
        case "pa":
            return "+507 123 456 789"; // Panama
        case "pg":
            return "+675 123 456 789"; // Papua New Guinea
        case "py":
            return "+595 123 456 789"; // Paraguay
        case "pe":
            return "+51 123 456 789"; // Peru
        case "ph":
            return "+63 123 456 789"; // Philippines
        case "pl":
            return "+48 123 456 789"; // Poland
        case "pt":
            return "+351 123 456 789"; // Portugal
        case "pr":
            return "+1 787 123 456 789"; // Puerto Rico
        case "qa":
            return "+974 123 456 789"; // Qatar
        case "re":
            return "+262 123 456 789"; // Réunion
        case "ro":
            return "+40 123 456 789"; // Romania
        case "ru":
            return "+7 123 456 789"; // Russia
        case "rw":
            return "+250 123 456 789"; // Rwanda
        case "bl":
            return "+590 590 123 456 789"; // Saint Barthélemy
        case "sh":
            return "+290 123 456 789"; // Saint Helena
        case "mf":
            return "+590 690 123 456 789"; // Saint Martin
        case "pm":
            return "+508 123 456 789"; // Saint Pierre and Miquelon
        case "kn":
            return "+1 869 123 456 789"; // Saint Kitts and Nevis
        case "lc":
            return "+1 758 123 456 789"; // Saint Lucia
        case "vc":
            return "+1 784 123 456 789"; // Saint Vincent and the Grenadines
        case "ws":
            return "+685 123 456 789"; // Samoa
        case "sm":
            return "+378 123 456 789"; // San Marino
        case "st":
            return "+239 123 456 789"; // Sao Tome and Principe
        case "sa":
            return "+966 123 456 789"; // Saudi Arabia
        case "sn":
            return "+221 123 456 789"; // Senegal
        case "rs":
            return "+381 123 456 789"; // Serbia
        case "sc":
            return "+248 123 456 789"; // Seychelles
        case "sl":
            return "+232 123 456 789"; // Sierra Leone
        case "sg":
            return "+65 123 456 789"; // Singapore
        case "sx":
            return "+1 721 123 456 789"; // Sint Maarten
        case "sk":
            return "+421 123 456 789"; // Slovakia
        case "si":
            return "+386 123 456 789"; // Slovenia
        case "sb":
            return "+677 123 456 789"; // Solomon Islands
        case "so":
            return "+252 123 456 789"; // Somalia
        case "za":
            return "+27 123 456 789"; // South Africa
        case "kr":
            return "+82 123 456 789"; // South Korea
        case "ss":
            return "+211 123 456 789"; // South Sudan
        case "es":
            return "+34 123 456 789"; // Spain
        case "lk":
            return "+94 123 456 789"; // Sri Lanka
        case "sd":
            return "+249 123 456 789"; // Sudan
        case "sr":
            return "+597 123 456 789"; // Suriname
        case "sj":
            return "+47 123 456 789"; // Svalbard and Jan Mayen
        case "sz":
            return "+268 123 456 789"; // Eswatini
        case "se":
            return "+46 123 456 789"; // Sweden
        case "ch":
            return "+41 123 456 789"; // Switzerland
        case "sy":
            return "+963 123 456 789"; // Syria
        case "tw":
            return "+886 123 456 789"; // Taiwan
        case "tj":
            return "+992 123 456 789"; // Tajikistan
        case "tz":
            return "+255 123 456 789"; // Tanzania
        case "th":
            return "+66 123 456 789"; // Thailand
        case "tl":
            return "+670 123 456 789"; // Timor-Leste
        case "tg":
            return "+228 123 456 789"; // Togo
        case "tk":
            return "+690 123 456 789"; // Tokelau
        case "to":
            return "+676 123 456 789"; // Tonga
        case "tt":
            return "+1 868 123 456 789"; // Trinidad and Tobago
        case "tn":
            return "+216 123 456 789"; // Tunisia
        case "tr":
            return "+90 123 456 789"; // Turkey
        case "tm":
            return "+993 123 456 789"; // Turkmenistan
        case "tc":
            return "+1 649 123 456 789"; // Turks and Caicos Islands
        case "tv":
            return "+688 123 456 789"; // Tuvalu
        case "vi":
            return "+1 340 123 456 789"; // U.S. Virgin Islands
        case "ug":
            return "+256 123 456 789"; // Uganda
        case "ua":
            return "+380 123 456 789"; // Ukraine
        case "ae":
            return "+971 123 456 789"; // United Arab Emirates
        case "gb":
            return "+44 123 456 789"; // United Kingdom
        case "us":
            return "+1 123 456 789"; // United States of America
        case "uy":
            return "+598 123 456 789"; // Uruguay
        case "uz":
            return "+998 123 456 789"; // Uzbekistan
        case "vu":
            return "+678 123 456 789"; // Vanuatu
        case "va":
            return "+379 123 456 789"; // Vatican City
        case "ve":
            return "+58 123 456 789"; // Venezuela
        case "vn":
            return "+84 123 456 789"; // Vietnam
        case "wf":
            return "+681 123 456 789"; // Wallis and Futuna
        case "eh":
            return "+212 123 456 789"; // Western Sahara
        case "ye":
            return "+967 123 456 789"; // Yemen
        case "zm":
            return "+260 123 456 789"; // Zambia
        case "zw":
            return "+263 123 456 789"; // Zimbabwe
        case "ax":
            return "+358 18 123 456 789"; // Åland Islands
        default:
            return selectedCountryPlaceholder;
    }
}

// Call the customPlaceholder function when the page loads
window.onload = function () {
    var selectedCountryData = null; // Replace with the actual selected country data
    var selectedCountryPlaceholder = ''; // Replace with the actual selected country placeholder
    var placeholder = customPlaceholder(selectedCountryPlaceholder, selectedCountryData);

    // Set the placeholder value in your HTML input element
    var phoneNumberInput = document.getElementById('phone'); // Replace 'phone-number-input' with the actual ID of your input element
    phoneNumberInput.placeholder = placeholder;
};
