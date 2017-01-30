$(document).ready(function(){
  var gtags = document.getElementsByTagName('g');
  var countryMap = new Map();
  for (var x = 0; x < gtags.length; x++){
    var tempString = gtags[x].id;
    console.log(tempString);
    var tempCountryProvince = tempString.split(":");
    var tempCountry = tempCountryProvince[0];
    var tempProvince = tempCountryProvince[1];
    console.log(tempProvince);
    if (countryMap.has(tempCountry) === false){
      countryMap.set(tempCountry, [tempProvince]);
      console.log(countryMap.get(tempCountry));
    } else {
      countryMap.get(tempCountry).push(tempProvince);
      console.log(countryMap.get(tempCountry));

    }

  }




});
