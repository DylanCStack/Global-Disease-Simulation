$(document).ready(function() {

  $("#diseaseInput").submit(function(event) {
    event.preventDefault();

    var diseaseName = $("#diseaseName").val();
    var diseaseVirulence = $("#diseaseVirulence").val();
    var diseaseLethality = $("#diseaseLethality").val();
    var diseaseColor = "#cc0000";

    var newDisease = new Disease(diseaseName,diseaseVirulence,diseaseLethality,diseaseColor);
    //create disease
    $("g").click(function(){
      var myID = $(this).attr("id");
      var provinceZero;
      newAllProvinces.forEach(function(provinceBeingSearchedThrough){
        console.log(provinceBeingSearchedThrough.provinceNeighbors[0]);
        if(provinceBeingSearchedThrough.svgId === myID){

          provinceZero = provinceBeingSearchedThrough;
          provinceZero.percentInfected = (10/100)*newDisease.virulence;
          console.log(provinceZero);
        }
        $("g").off('click');

      });
    });


    //give disease a starting location

    setInterval(function(){
      //run disease every x seconds.
      newAllProvinces.forEach(function(province){
        if(province.percentInfected > 0){
          province.provinceNeighbors.forEach( function(neighbor){
            neighbor.percentInfected += 5;

            if(neighbor.percentInfected >= 100){
              neighbor.percentInfected = 100;

            }

          })
        }
      })
      console.log("1 second")
    }, 1000);




  });
});
