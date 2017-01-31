var input =1000;
function formatBig(bigNumber){
    bigNumber=bigNumber.toString();
    if(bigNumber.length%3 === 1){
      bigNumber = "  " + bigNumber;
    } else if (bigNumber.length%3 ===2){
      bigNumber = " " + bigNumber;
    }
    bigNumber.split("");
    bigNumber.match(/.{1,3}/g).join(",");
    return bigNumber;
}




$(function(){

  $("#minimax").click(function(){
    $(this).siblings("form").toggle();
  })

  $("g").hover(function(){
    var myID = $(this).attr("id");
    var myProvince, myCountry;
    allProvinces.forEach(function(province){
      if(province.svgId === myID){

        myCountry = province.country;
        myProvince = province;

      }
    })
    //country name
    $("#countryName").text(myCountry.countryName);
    $("#countryPop").text(myCountry.totalPopulation);
    $("#countryProvinces").text(myCountry.provinces.length);
    $("#countryInfected").text(myCountry.percentInfected);
    $("#countryDeaths").text(myCountry.deaths);
    //province name
    $("#provinceName").text(myProvince.provinceName);
    $("#provincePop").text(Math.ceil(myProvince.population));
    $("#provinceInfected").text(myProvince.percentInfected);
    $("#provinceDeaths").text(myProvince.deaths);

  })









  var red= 1;
  var green = 2
  var blue = 3;
  $("g").click(function(){
    $(this).children("path").css("fill","#"+ red + green + blue);
    red+=3;
    green+=2;
    blue+=1;
    if(red>=9){
      red %= 9;
    }
    if(blue>=9){
      blue%= 9;
    }
    if(green>=9){
      green %= 9;
    }
  })
  $("g").each(function(){
    $(this).children("path").css("fill","#"+ "00" + "60" + "00");

  })

})
