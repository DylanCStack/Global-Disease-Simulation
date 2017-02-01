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
  $("#globalPop").text(globalPopulation);

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

  // $('svg').on( 'DOMMouseScroll mousewheel', function ( event ) {
  //   if( event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0 ) { //alternative options for wheelData: wheelDeltaX & wheelDeltaY
  //     //scroll down
  //     // if($(this).width() < $(window).width()){
  //       $(this).css("width", $(this).width()-200   )
  //     // }
  //     console.log("down")
  //
  //   } else {
  //     //scroll up
  //     $(this).css("width", $(this).width()+200  )
  //     console.log('Up');
  //   }
  //   //prevent page fom scrolling
  //   return false;
  // });
  $(window).on('wheel', function(e) {

    var delta = e.originalEvent.deltaY;

    if (delta > 0){
      console.log($('svg').width()-200)
      $('svg').css("width", $('svg').width()-200   )
    }
    else {
      console.log($('svg').width()-200)
      $('svg').css("width", $('svg').width()+200  )
    }
    return false; // this line is only added so the whole page won't scroll in the demo
  });

  $(window).mousedown(function(event){
    var mouseX = event.pageX;
    var mouseY = event.pageY;
    $( document ).on( "mousemove", function( event ) {
      console.log(mouseX - event.pageX);
      var xMove = mouseX - event.pageX;
      var yMove = mouseY - event.pageY;
      var svg = $("svg");
      $("svg").css({left:svg.position().left-xMove+'px'});
      $("svg").css({top:svg.position().top-yMove+'px'});
      //

      mouseX = event.pageX;
      mouseY = event.pageY;
    });
  })
  $(window).mouseup(function(event){
    $(document).off("mousemove");
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
