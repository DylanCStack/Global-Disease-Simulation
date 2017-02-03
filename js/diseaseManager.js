$(document).ready(function() {

  $("#diseaseInput").submit(function(event) {
    event.preventDefault();
    $("#diseaseBox").hide();

    var diseaseName = $("#diseaseName").val();
    var diseaseVirulence = $("#diseaseVirulence").val();
    var diseaseLethality = $("#diseaseLethality").val();
    var diseaseColor = "#cc0000";

    var newDisease = new Disease(diseaseName,diseaseVirulence,diseaseLethality,diseaseColor);
    //create disease
    $("g").click(function(){
      var myID = $(this).attr("id");
      var provinceZero;
      console.log(myID);
      newAllProvinces.forEach(function(provinceBeingSearchedThrough){//give disease a starting location
        console.log(provinceBeingSearchedThrough.provinceNeighbors[0]);
        if(provinceBeingSearchedThrough.svgId === myID){

          provinceZero = provinceBeingSearchedThrough;
          provinceZero.percentInfected = (10/100)*newDisease.virulence;

          console.log(provinceZero);
        }
        $("g").off('click');

      });
    });




    setInterval(function(){
      //run disease every x seconds.
      newAllProvinces.forEach(function(province){
        if(province.percentInfected > 0){

          province.provinceNeighbors.forEach( function(neighbor){



            console.log(neighbor);

            neighbor.percentInfected += 1;
            if(neighbor.percentInfected >= 100){
              neighbor.percentInfected = 100;
            }
            console.log(neighbor.provinceName + " is now infected " + neighbor.percentInfected + "%");


            var color = neighbor.percentInfected*.7;
            var landColor = 60 -(neighbor.percentInfected * .4)
            if(color < 10){
              color = "0" + color;
            }
            if(landColor < 10){
              landColor = "0" + landColor;
            }

            $(document.getElementById(neighbor.svgId)).children("path").css("fill","#"+ color + "00" + "00");
          })
        }
      })
      console.log("2 seconds")
    }, 2000);
  });
});
