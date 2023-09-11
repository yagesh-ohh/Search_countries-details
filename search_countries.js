/** @format */

let inputValues = document.getElementById("inputValues");
let btn = document.getElementById("btn");
let detials = document.getElementById("detials");
let contariner = document.getElementById("contariner");
let countries = document.getElementById("countries_details");
let flag_container = document.getElementById("flag_container");

document.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    // console.log(event.key);
    btnClick();
  }
});

// ------------------Country Names List  --------------------
var country_list = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua &amp; Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia &amp; Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Cayman Islands",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cruise Ship",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Kyrgyz Republic",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre &amp; Miquelon",
  "Samoa",
  "San Marino",
  "Satellite",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "St Kitts &amp; Nevis",
  "St Lucia",
  "St Vincent",
  "St. Lucia",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad &amp; Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks &amp; Caicos",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

onload = function () {
  let input = "India";
  let url = `https://restcountries.com/v3.1/name/${input}?fullText=true`;
  console.log(url);

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      //   ---------------------------------------
      let altSpelling = data[0].altSpellings[0];
      let languages = Object.values(data[0].languages)
        .toString()
        .split(",")
        .join(", ");
      let capital = data[0].capital;
      let continents = data[0].continents;
      let currencies =
        data[0].currencies[Object.keys(data[0].currencies)].symbol;
      let population = data[0].population;
      let flag_img = data[0].flags.svg;
      // ---------------------------------------

      flag_container.innerHTML = `
<img src ="${flag_img}" class="flag-img">
<div>`;

      countries.innerHTML = `
      <div class ="flex-wraper">
      
 <table>
 <tbody>
 <tr><th>Capital : </th> <td>${capital} </td></tr>
 <tr><th>Language : </th> <td>${languages}</td></tr>
 <tr><th>Continent : </th> <td>${continents}</td></tr>
 <tr><th>Population : </th>  <td>${population}</td></tr>
 <tr><th>Currency Symbol : </th>  <td style="text-align:center;">${currencies}</td></tr>
 </tr>
 </tbody>
 </table>   
    
</div>`;
    });
  inputValues.focus();
};

function btnClick() {
  let input = inputValues.value;
  if (input == "") {
    alert("Enter the correct Country Name");
  }
  let url = `https://restcountries.com/v3.1/name/${input}?fullText=true`;
  console.log(url);

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //   ---------------------------------------
      let languages = Object.values(data[0].languages)
        .toString()
        .split(",")
        .join(", ");
      let capital = data[0].capital;
      let continents = data[0].continents;
      let currencies =
        data[0].currencies[Object.keys(data[0].currencies)].symbol;
      let population = data[0].population;
      let flag_img = data[0].flags.svg;
      // ---------------------------------------

      flag_container.innerHTML = `
<img src ="${flag_img}" class="flag-img">
<div>`;

      countries.innerHTML = `
      <div class ="flex-wraper">
      
 <table>
 <tbody>
 <tr><th>Capital : </th> <td>${capital} </td></tr>
 <tr><th>Language : </th> <td>${languages}</td></tr>
 <tr><th>Continent : </th> <td>${continents}</td></tr>
 <tr><th>Population : </th>  <td>${population}</td></tr>
 <tr><th>Currency Symbol : </th>  <td style="text-align:center;">${currencies}</td></tr>
 </tr>
 </tbody>
 </table>   
    
</div>`;
    });

  inputValues.value = "";
    inputValues.focus();
}

btn.addEventListener("click", btnClick);
