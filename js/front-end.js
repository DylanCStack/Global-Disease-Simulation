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
function constrainSVG(){
  if($("svg").width()<= $(window).width()){
    $("svg").css({left:0+'px'});
    $("svg").css({top:0+'px'});
    $('svg').css("width", $(window).width())
  }// else if ($("svg").prop("left") > 0 ){
  //   $("svg").css({left:0+'px'});
  // } else if ($("svg").prop("top") > 0 ){
  //   $("svg").css({top:0+'px'});
  // }
}



$(function(){
  $("#globalPop").text(globalPopulation);

  $("#minimax").click(function(){
    $(this).siblings("form").toggle();
  })

  $("g").hover(function(){//shows province and country data on hover
    var myID = $(this).attr("id");
    var myProvince, myCountry;
    newAllProvinces.forEach(function(provinceBeingSearchedThrough){
      if(provinceBeingSearchedThrough.svgId === myID){

        myCountry = provinceBeingSearchedThrough.country;
        myProvince = provinceBeingSearchedThrough;

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


  $(window).on('wheel', function(e) {//zooms into or out of map on scroll

    var delta = e.originalEvent.deltaY;
    var svg = $("svg");
    if (delta > 0){
      console.log($('svg').width()-200)
      $('svg').css("width", $('svg').width()-200   )
      $("svg").css({left:svg.position().left+(200/2)+'px'});
      $("svg").css({top:svg.position().top+(96.475/2)+'px'});
    }
    else {
      console.log($('svg').width()-200)
      $('svg').css("width", $('svg').width()+200  )
      $("svg").css({left:svg.position().left-(200/2)+'px'});
      $("svg").css({top:svg.position().top-(96.475/2)+'px'});

    }
    constrainSVG();
    return false; // this line is only added so the whole page won't scroll in the demo
  });

  $(window).mousedown(function(event){
    var mouseX = event.pageX;
    var mouseY = event.pageY;
    $( document ).on( "mousemove", function( event ) {
      constrainSVG();
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







  // var red= 1;
  // var green = 2
  // var blue = 3;
  // $("g").click(function(){
  //   $(this).children("path").css("fill","#"+ red + green + blue);
  //   alert(this.id);
  //   red+=3;
  //   green+=2;
  //   blue+=1;
  //   if(red>=9){
  //     red %= 9;
  //   }
  //   if(blue>=9){
  //     blue%= 9;
  //   }
  //   if(green>=9){
  //     green %= 9;
  //   }
  // })

  $("g").each(function(){
    $(this).children("path").css("fill","#"+ "00" + "60" + "00");

  })

})
