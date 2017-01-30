var countriesObjects = [];

$(document).ready(function(){
  var gtags = document.getElementsByTagName('g');
  var countryMap = new Map();
  var countryNames = [];
  for (var x = 0; x < gtags.length; x++){
    var tempString = gtags[x].id;
    var tempCountryProvince = tempString.split(":");
    var tempCountry = tempCountryProvince[0];
    var tempProvince = new Province (tempCountryProvince[1], tempString);
    if (countryMap.has(tempCountry) === false){
      countryMap.set(tempCountry, [tempProvince]);
      countryNames.push(tempCountry);

    } else {
      countryMap.get(tempCountry).push(tempProvince);
      //console.log(tempCountry);
      //console.log(countryMap.get(tempCountry));
    }

  }

  countryNames.forEach(function(cName){
    var countryObject = new Country(cName);
    countryObject.provinces = countryMap.get(cName);
    countriesObjects.push(countryObject);
  });

  console.log(countriesObjects);



});
