function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }
    return false;
}

var countriesObjects = [];
var newAllProvinces = [];
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
{"country" : "Russian Federation", "population" : 146934000},
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


$(document).ready(function(){
  // grabs html elements of g tags and nested html
  var gtags = document.getElementsByTagName('g');
  var countryMap = new Map();
  var countryNames = [];
  var allProvinces = [];
  // cycle through gtags array
  for (var x = 0; x < gtags.length; x++){
    // grab the id string
    var tempString = gtags[x].id;
    // this string stores province name
    var tempCountryProvince = tempString.split(":");
    // stores country name
    var tempCountry = tempCountryProvince[0];
    // creates province object with province name and complete SVG ID
    var tempProvince = new Province (tempCountryProvince[1], tempString);
    // this string parsed will get coordinates for finding neighbors
    var coordInput = gtags[x].outerHTML;
    // this strips out the html in front and at end of each string.
    var frontClean = coordInput.slice(coordInput.indexOf('path d="M') + 9);
    var clean = frontClean.slice(0, frontClean.indexOf('z"'));
    var cleanSplit = clean.split(/L|\s/);

    // goes through array of coordinates and creates coordinate objects with x,y values
    for (var y = 0; y < cleanSplit.length; y+=2){
      var tempCoordinate = new Coordinate(cleanSplit[y], cleanSplit[y + 1]);
      tempProvince.provinceCoords.push(tempCoordinate);
    }

    tempProvince.getBufferSize();

    // Push province object on to array of provinces for creating province relationships
    allProvinces.push(tempProvince);

    // sees if the countryMap already has the country.  If not add both country and province else only add province
    if (countryMap.has(tempCountry) === false){
      countryMap.set(tempCountry, [tempProvince]);
      countryNames.push(tempCountry);
    } else {
      countryMap.get(tempCountry).push(tempProvince);
    }
  }
  // creates country objects and populates with provinces and population
  countryNames.forEach(function(cName){
    var countryObject = new Country(cName);
    //inefficient and needs refactoring
    populationNumbers.forEach(function(entry){
      if (entry.country === cName){
        countryObject.totalPopulation = entry.population;
      }
    });
    countryObject.provinces = countryMap.get(cName);
    countryObject.setProvincePop();
    countriesObjects.push(countryObject);
  });

  var buffer = 20;/////CHANGED FROM 10 BY DYLAN TO INFECT MORE COUNTRIES

  //   //   // Check province 1 xright against province 2 xleft where province 1 ytop or ybottom is inside province 2 ytop or yBottom
  //   //
  //   //   // check province 1 ytop against province 2 ybottom where province 1 xleft or xright is inside of province 2 xleft and xright
  //   //
  //   //   // check province 1 ybottom against province 2 ytop where province 1 xleft or xright is inside of province 2 xleft and xright



  var counter = 0;
  allProvinces.forEach(function(oneProvince){

    allProvinces.forEach(function(anotherProvince){
      // finds neighbors to the right and top
      if((oneProvince.xLeft + buffer > anotherProvince.xRight) && ((oneProvince.xLeft - buffer) < anotherProvince.xRight) && (oneProvince.yBottom < anotherProvince.yBottom + buffer) && (oneProvince.yBottom > anotherProvince.yTop - buffer)){
        oneProvince.addNeighbor(anotherProvince);
        // console.log(oneProvince.svgId + " has a neighbor called " + anotherProvince.svgId);
        // finds neighbors to the right and bottom
      } else if ((oneProvince.xLeft + buffer > anotherProvince.xRight) && ((oneProvince.xLeft - buffer) < anotherProvince.xRight) && (oneProvince.yTop < anotherProvince.yBottom + buffer) && (oneProvince.yTop > anotherProvince.yTop - buffer)){
        oneProvince.addNeighbor(anotherProvince);
        // finds neighbors to the left and top
      } else if ((oneProvince.xRight + buffer > anotherProvince.xLeft) && ((oneProvince.xRight - buffer) < anotherProvince.xLeft) && (oneProvince.yBottom < anotherProvince.yBottom + buffer) && (oneProvince.ybottom > anotherProvince.yTop - buffer)){
        oneProvince.addNeighbor(anotherProvince);
        // finds neighbors to the left and bottom
      } else if ((oneProvince.xRight + buffer > anotherProvince.xLeft) && (oneProvince.xRight < anotherProvince.xRight) && (oneProvince.yTop < anotherProvince.yBottom + buffer) && (oneProvince.yTop > anotherProvince.yTop - buffer)){
        oneProvince.addNeighbor(anotherProvince);
        // finds neighbors below
      } else if ((oneProvince.yTop + buffer > anotherProvince.yBottom) && ((oneProvince.yTop - buffer) < anotherProvince.yBottom) && ((oneProvince.xLeft || oneProvince.xRight) < anotherProvince.xRight + buffer) && (oneProvince.xLeft || oneProvince.xRight) > anotherProvince.xLeft - buffer) {
        oneProvince.addNeighbor(anotherProvince);
        // finds neighbors above
      } else if ((oneProvince.yBottom + buffer > anotherProvince.yTop) && ((oneProvince.yBottom - buffer) < anotherProvince.yTop) && ((oneProvince.xLeft || oneProvince.xRight) < anotherProvince.xRight + buffer) && (oneProvince.xLeft || oneProvince.xRight) > anotherProvince.xLeft - buffer) {
      }
    });
    newAllProvinces.push(oneProvince);
    countriesObjects.forEach(function(country){
      if(oneProvince.svgId.split(":")[0] === country.countryName){
        oneProvince.country = country;
      }
    })
  });

  // artificial neighbor creation for simulation
  newAllProvinces.forEach(function(province){
    if(province.provinceName === "Mudug Region"){
      newAllProvinces.forEach(function(newNeighbor){
        if(newNeighbor.provinceName === "Tamil Nadu State" || newNeighbor.provinceName === "South Australia State" ||newNeighbor.provinceName === "Tomansina Province")
        province.provinceNeighbors.push(newNeighbor)

      })
    }else if(province.provinceName === "England Division"){
      newAllProvinces.forEach(function(newNeighbor){
        if(newNeighbor.provinceName === "Ostgronland Region" || newNeighbor.provinceName === "Quebec Province" ||newNeighbor.provinceName === "Northwest Territories Territory")
        province.provinceNeighbors.push(newNeighbor)

      })
    }else if(province.provinceName === "Lofa County"){
      newAllProvinces.forEach(function(newNeighbor){
        if(newNeighbor.provinceName === "Buenos Aires Province" || newNeighbor.provinceName === "Bolivar State" ||newNeighbor.provinceName === "Colon Department")
        province.provinceNeighbors.push(newNeighbor)

      })
    }else if(province.provinceName === "Centre Region"){
      newAllProvinces.forEach(function(newNeighbor){
        if(newNeighbor.provinceName === "Florida State")
        province.provinceNeighbors.push(newNeighbor)

      })
    }else if(province.provinceName === "Nei Mongol Autonomous Region"){
      newAllProvinces.forEach(function(newNeighbor){
        if(newNeighbor.provinceName === "California State" || newNeighbor.provinceName === "Alaska State" ||newNeighbor.provinceName === "Santa Cruz Province" || newNeighbor.provinceName === "Respublika Sakha(Yakutiya) Republic")
        province.provinceNeighbors.push(newNeighbor)

      })
    }else if(province.provinceName === "Bolivar State"){
      newAllProvinces.forEach(function(newNeighbor){
        if(newNeighbor.provinceName === "Buenos Aires Province" || newNeighbor.provinceName === "Lofa County" ||newNeighbor.provinceName === "Colon Department")
        province.provinceNeighbors.push(newNeighbor)

      })
    }else if(province.provinceName === "Georgia State"){
      newAllProvinces.forEach(function(newNeighbor){
        if(newNeighbor.provinceName === "Centre Region" || newNeighbor.provinceName === "England Division" ||newNeighbor.provinceName === "Colon Department")
        province.provinceNeighbors.push(newNeighbor)

      })
    }
  })



  // go through each province
  // allProvinces.forEach(function(provinceOne){
  //   //get center value
  //   var centerValue = provinceOne.findCenter();
  //   // set the province buffers
  //   provinceOne.getBufferSize();
  //
  //
  //
  //   // go through each other province and get its center value
  //   // allProvinces.forEach(function(provinceTwo){
  //   //   provinceTwo.getBufferSize();
  //   //   var compareCenterValue = provinceTwo.findCenter();
  //   //
  //   //   // if center value + xBuffer (difference between highest and lowest buffer) >= center value xCoord of comparison
  //   //   // But this basically just works for comparitors that start to the right or down as it is comparing centers and the buffer isn't large enough to get past borders
  //   //
  //   //   // if(((centerValue.xCoord + prov.xBuffer) >= provCompare.xLeft) && ((centerValue.xCoord - prov.xBuffer) <= provCompare.xleft) && (()(centerValue.yCoord + prov.yBuffer) >= provCompare.yBottom) && (centerValue.yCoord - ))
  //   //
  //   //
  //   //   // if (((centerValue.xCoord + prov.xBuffer >= compareCenterValue.xCoord) && (centerValue.xCoord - prov.xBuffer <= compareCenterValue.xCoord)) && (centerValue.yCoord + prov.yBuffer >= compareCenterValue.yCoord) && (centerValue.yCoord - prov.yBuffer <= compareCenterValue.yCoord) && (centerValue.xCoord !== compareCenterValue.xCoord) && (centerValue.yCoord !== compareCenterValue.yCoord)){
  //   //   //   prov.addNeighbor(provCompare);
  //   //   //
  //   //   // }
  //   //
  //   //   // Check Province 1 xLeft against province 2 xright where province 1 ytop or yBottom is inside province 2 ytop or yBottom
  //   //   // if((provinceOne.xLeft > provinceTwo.xRight) && ((provinceOne.xLeft - buffer) < provinceTwo.xRight)) {
  //   //   //   console.log("on the right of this country");
  //   //   // }
  //   //
  //   //
  //   //
  //   //
  //   //   // Check province 1 xright against province 2 xleft where province 1 ytop or ybottom is inside province 2 ytop or yBottom
  //   //
  //   //   // check province 1 ytop against province 2 ybottom where province 1 xleft or xright is inside of province 2 xleft and xright
  //   //
  //   //   // check province 1 ybottom against province 2 ytop where province 1 xleft or xright is inside of province 2 xleft and xright
  //   //
  //   //
  //   //
  //   //
  //   //
  //   //
  //   //
  //   //
  //   // });
  //
  //
  // });




  var gameManager = new GameManager(countriesObjects, "Sars")
  console.log(gameManager);
  //console.log(allProvinces);







});
