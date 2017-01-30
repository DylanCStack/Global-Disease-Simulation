$(document).ready(function(){
  var gtags = document.getElementsByTagName('g');
  var countryMap = new Map();
  for (var x = 0; x < gtags.length; x++){
    console.log(gtags[x]);
    var tempString = gtags[x].id;
    var tempCountryProvince = tempString.split(":");
    var tempCountry = tempCountryProvince[0];
    var tempProvince = tempCountryProvince[1];
    if (countryMap.has(tempCountry) === false){
      countryMap.set(tempCountry, [tempProvince]);
    } else {
      countryMap.get(tempCountry).push(tempProvince);
      console.log(tempCountry);
      console.log(countryMap.get(tempCountry));

    }

  }




});
