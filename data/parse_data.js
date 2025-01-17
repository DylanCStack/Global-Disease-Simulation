var countriesObjects = [];

// from https://github.com/samayo/country-data/blob/master/src/country-population.json
var populationNumbers = [
{"country" : "Aruba", "population" : 103000},
{"country" : "Afghanistan", "population" : 22720000},
{"country" : "Angola", "population" : 12878000},
{"country" : "Anguilla", "population" : 8000},
{"country" : "Albania", "population" : 3401200},
{"country" : "Andorra", "population" : 78000},
{"country" : "Netherlands Antilles", "population" : 217000},
{"country" : "United Arab Emirates", "population" : 2441000},
{"country" : "Argentina", "population" : 37032000},
{"country" : "Armenia", "population" : 3520000},
{"country" : "American Samoa", "population" : 68000},
{"country" : "Antigua and Barbuda", "population" : 68000},
{"country" : "Australia", "population" : 23840314},
{"country" : "Austria", "population" : 8091800},
{"country" : "Azerbaijan", "population" : 7734000},
{"country" : "Burundi", "population" : 6695000},
{"country" : "Belgium", "population" : 10239000},
{"country" : "Benin", "population" : 6097000},
{"country" : "Burkina Faso", "population" : 11937000},
{"country" : "Bangladesh", "population" : 129155000},
{"country" : "Bulgaria", "population" : 8190900},
{"country" : "Bahrain", "population" : 617000},
{"country" : "Bahamas", "population" : 307000},
{"country" : "Bosnia and Herzegovina", "population" : 3972000},
{"country" : "Belarus", "population" : 10236000},
{"country" : "Belize", "population" : 241000},
{"country" : "Bermuda", "population" : 65000},
{"country" : "Bolivia", "population" : 8329000},
{"country" : "Brazil", "population" : 170115000},
{"country" : "Barbados", "population" : 270000},
{"country" : "Brunei", "population" : 328000},
{"country" : "Bhutan", "population" : 2124000},
{"country" : "Botswana", "population" : 1622000},
{"country" : "Central African Republic", "population" : 3615000},
{"country" : "Canada", "population" : 31147000},
{"country" : "Cocos (Keeling) Islands", "population" : 600},
{"country" : "Switzerland", "population" : 7160400},
{"country" : "Chile", "population" : 15211000},
{"country" : "China", "population" : 1277558000},
{"country" : "Ivory Coast", "population" : 14786000},
{"country" : "Cameroon", "population" : 15085000},
{"country" : "The Democratic Republic of the Congo", "population" : 51654000},
{"country" : "Congo", "population" : 2943000},
{"country" : "Cook Islands", "population" : 20000},
{"country" : "Colombia", "population" : 42321000},
{"country" : "Comoros", "population" : 578000},
{"country" : "Cape Verde", "population" : 428000},
{"country" : "Costa Rica", "population" : 4023000},
{"country" : "Cuba", "population" : 11201000},
{"country" : "Christmas Island", "population" : 2500},
{"country" : "Cayman Islands", "population" : 38000},
{"country" : "Cyprus", "population" : 754700},
{"country" : "Czech Republic", "population" : 10278100},
{"country" : "Germany", "population" : 82164700},
{"country" : "Djibouti", "population" : 638000},
{"country" : "Dominica", "population" : 71000},
{"country" : "Denmark", "population" : 5330000},
{"country" : "Dominican Republic", "population" : 8495000},
{"country" : "Algeria", "population" : 31471000},
{"country" : "Ecuador", "population" : 12646000},
{"country" : "Egypt", "population" : 68470000},
{"country" : "Eritrea", "population" : 6250000},
{"country" : "Western Sahara", "population" : 293000},
{"country" : "Spain", "population" : 39441700},
{"country" : "Estonia", "population" : 1439200},
{"country" : "Ethiopia", "population" : 78565000},
{"country" : "Finland", "population" : 5171300},
{"country" : "Fiji Islands", "population" : 817000},
{"country" : "Falkland Islands", "population" : 2000},
{"country" : "France", "population" : 59225700},
{"country" : "Faroe Islands", "population" : 43000},
{"country" : "Federated States of Micronesia", "population" : 119000},
{"country" : "Gabon", "population" : 1226000},
{"country" : "United Kingdom", "population" : 59623400},
{"country" : "Georgia", "population" : 4968000},
{"country" : "Ghana", "population" : 20212000},
{"country" : "Gibraltar", "population" : 25000},
{"country" : "Guinea", "population" : 7430000},
{"country" : "Guadeloupe", "population" : 456000},
{"country" : "Gambia", "population" : 1305000},
{"country" : "Guinea-Bissau", "population" : 1213000},
{"country" : "Equatorial Guinea", "population" : 453000},
{"country" : "Greece", "population" : 10545700},
{"country" : "Grenada", "population" : 94000},
{"country" : "Greenland", "population" : 56000},
{"country" : "Guatemala", "population" : 11385000},
{"country" : "French Guiana", "population" : 181000},
{"country" : "Guam", "population" : 168000},
{"country" : "Guyana", "population" : 861000},
{"country" : "Hong Kong", "population" : 6782000},
{"country" : "Honduras", "population" : 6485000},
{"country" : "Croatia", "population" : 4473000},
{"country" : "Haiti", "population" : 8222000},
{"country" : "Hungary", "population" : 10043200},
{"country" : "Indonesia", "population" : 237641326},
{"country" : "India", "population" : 1013662000},
{"country" : "Ireland", "population" : 3775100},
{"country" : "Iran", "population" : 67702000},
{"country" : "Iraq", "population" : 23115000},
{"country" : "Iceland", "population" : 279000},
{"country" : "Israel", "population" : 6217000},
{"country" : "Italy", "population" : 57680000},
{"country" : "Jamaica", "population" : 2583000},
{"country" : "Jordan", "population" : 5083000},
{"country" : "Japan", "population" : 126714000},
{"country" : "Kazakstan", "population" : 16223000},
{"country" : "Kenya", "population" : 30080000},
{"country" : "Kyrgyzstan", "population" : 4699000},
{"country" : "Cambodia", "population" : 11168000},
{"country" : "Kiribati", "population" : 83000},
{"country" : "Saint Kitts and Nevis", "population" : 38000},
{"country" : "South Korea", "population" : 46844000},
{"country" : "Kuwait", "population" : 1972000},
{"country" : "Laos", "population" : 5433000},
{"country" : "Lebanon", "population" : 3282000},
{"country" : "Liberia", "population" : 3154000},
{"country" : "Libyan Arab Jamahiriya", "population" : 5605000},
{"country" : "Saint Lucia", "population" : 154000},
{"country" : "Liechtenstein", "population" : 32300},
{"country" : "Sri Lanka", "population" : 18827000},
{"country" : "Lesotho", "population" : 2153000},
{"country" : "Lithuania", "population" : 3698500},
{"country" : "Luxembourg", "population" : 435700},
{"country" : "Latvia", "population" : 2424200},
{"country" : "Macao", "population" : 473000},
{"country" : "Morocco", "population" : 28351000},
{"country" : "Monaco", "population" : 34000},
{"country" : "Moldova", "population" : 4380000},
{"country" : "Madagascar", "population" : 15942000},
{"country" : "Maldives", "population" : 286000},
{"country" : "Mexico", "population" : 98881000},
{"country" : "Marshall Islands", "population" : 64000},
{"country" : "Macedonia", "population" : 2024000},
{"country" : "Mali", "population" : 11234000},
{"country" : "Malta", "population" : 380200},
{"country" : "Myanmar", "population" : 45611000},
{"country" : "Mongolia", "population" : 2662000},
{"country" : "Northern Mariana Islands", "population" : 78000},
{"country" : "Mozambique", "population" : 19680000},
{"country" : "Mauritania", "population" : 2670000},
{"country" : "Montserrat", "population" : 11000},
{"country" : "Martinique", "population" : 395000},
{"country" : "Mauritius", "population" : 1158000},
{"country" : "Malawi", "population" : 10925000},
{"country" : "Malaysia", "population" : 22244000},
{"country" : "Mayotte", "population" : 149000},
{"country" : "Namibia", "population" : 1726000},
{"country" : "New Caledonia", "population" : 214000},
{"country" : "Niger", "population" : 10730000},
{"country" : "Norfolk Island", "population" : 2000},
{"country" : "Nigeria", "population" : 111506000},
{"country" : "Nicaragua", "population" : 5074000},
{"country" : "Niue", "population" : 2000},
{"country" : "Netherlands", "population" : 15864000},
{"country" : "Norway", "population" : 4478500},
{"country" : "Nepal", "population" : 23930000},
{"country" : "Nauru", "population" : 12000},
{"country" : "New Zealand", "population" : 3862000},
{"country" : "Oman", "population" : 2542000},
{"country" : "Pakistan", "population" : 156483000},
{"country" : "Panama", "population" : 2856000},
{"country" : "Pitcairn", "population" : 50},
{"country" : "Peru", "population" : 25662000},
{"country" : "Philippines", "population" : 75967000},
{"country" : "Palau", "population" : 19000},
{"country" : "Papua New Guinea", "population" : 4807000},
{"country" : "Poland", "population" : 38653600},
{"country" : "Puerto Rico", "population" : 3869000},
{"country" : "North Korea", "population" : 24039000},
{"country" : "Portugal", "population" : 9997600},
{"country" : "Paraguay", "population" : 5496000},
{"country" : "Palestine", "population" : 3101000},
{"country" : "French Polynesia", "population" : 235000},
{"country" : "Qatar", "population" : 599000},
{"country" : "Reunion", "population" : 699000},
{"country" : "Romania", "population" : 22455500},
{"country" : "Russia", "population" : 146934000},
{"country" : "Rwanda", "population" : 7733000},
{"country" : "Saudi Arabia", "population" : 21607000},
{"country" : "Sudan", "population" : 29490000},
{"country" : "South Sudan", "population" : 12042910},
{"country" : "Senegal", "population" : 9481000},
{"country" : "Singapore", "population" : 3567000},
{"country" : "Saint Helena", "population" : 6000},
{"country" : "Svalbard and Jan Mayen", "population" : 3200},
{"country" : "Solomon Islands", "population" : 444000},
{"country" : "Sierra Leone", "population" : 4854000},
{"country" : "El Salvador", "population" : 6276000},
{"country" : "San Marino", "population" : 27000},
{"country" : "Somalia", "population" : 10097000},
{"country" : "Saint Pierre and Miquelon", "population" : 7000},
{"country" : "Sao Tome and Principe", "population" : 147000},
{"country" : "Suriname", "population" : 417000},
{"country" : "Slovakia", "population" : 5398700},
{"country" : "Slovenia", "population" : 1987800},
{"country" : "Sweden", "population" : 8861400},
{"country" : "Swaziland", "population" : 1008000},
{"country" : "Seychelles", "population" : 77000},
{"country" : "Syria", "population" : 16125000},
{"country" : "Turks and Caicos Islands", "population" : 17000},
{"country" : "Chad", "population" : 7651000},
{"country" : "Togo", "population" : 4629000},
{"country" : "Thailand", "population" : 61399000},
{"country" : "Tajikistan", "population" : 6188000},
{"country" : "Tokelau", "population" : 2000},
{"country" : "Turkmenistan", "population" : 4459000},
{"country" : "East Timor", "population" : 885000},
{"country" : "Tonga", "population" : 99000},
{"country" : "Trinidad and Tobago", "population" : 1295000},
{"country" : "Tunisia", "population" : 9586000},
{"country" : "Turkey", "population" : 66591000},
{"country" : "Tuvalu", "population" : 12000},
{"country" : "Taiwan", "population" : 22256000},
{"country" : "Tanzania", "population" : 33517000},
{"country" : "Uganda", "population" : 21778000},
{"country" : "Ukraine", "population" : 50456000},
{"country" : "Uruguay", "population" : 3337000},
{"country" : "United States", "population" : 278357000},
{"country" : "Uzbekistan", "population" : 24318000},
{"country" : "Holy See (Vatican City State)", "population" : 1000},
{"country" : "Saint Vincent and the Grenadines", "population" : 114000},
{"country" : "Venezuela", "population" : 24170000},
{"country" : "British Virgin Islands", "population" : 21000},
{"country" : "United States Virgin Islands", "population" : 93000},
{"country" : "Vietnam", "population" : 79832000},
{"country" : "Vanuatu", "population" : 190000},
{"country" : "Wallis and Futuna", "population" : 15000},
{"country" : "Samoa", "population" : 180000},
{"country" : "Yemen", "population" : 18112000},
{"country" : "Yugoslavia", "population" : 10640000},
{"country" : "South Africa", "population" : 40377000},
{"country" : "Zambia", "population" : 9169000},
{"country" : "Zimbabwe", "population" : 11669000}
];

var allProvinces = [];////
newNewAllProvinces = []////
var globalPopulation = 0;//////
$(document).ready(function(){
  var gtags = document.getElementsByTagName('g');
  var countryMap = new Map();
  var countryNames = [];

  for (var x = 0; x < gtags.length; x++){
    var tempString = gtags[x].id;
    console.log(gtags[x].outerHTML);
    var tempCountryProvince = tempString.split(":");
    var tempCountry = tempCountryProvince[0];
    var tempProvince = new Province (tempCountryProvince[1], tempString);
    allProvinces.push(tempProvince);////
    if (countryMap.has(tempCountry) === false){
      countryMap.set(tempCountry, [tempProvince]);
      countryNames.push(tempCountry);
    } else {
      countryMap.get(tempCountry).push(tempProvince);
    }
  }


  countryNames.forEach(function(cName){
    var countryObject = new Country(cName);
    //inefficient and needs refactoring
    populationNumbers.forEach(function(entry){
      if (entry.country === cName){
        countryObject.totalPopulation = entry.population;
        globalPopulation += entry.population;///////
      }
    });
    countryObject.provinces = countryMap.get(cName);
    countryObject.provinces.forEach(function(province){/////
      province.country = countryObject;
      newNewAllProvinces.push(province);//////////****hacked
    })
    countryObject.setProvincePop();
    countriesObjects.push(countryObject);
  });

  //console.log(countriesObjects);







});
