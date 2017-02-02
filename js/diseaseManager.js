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



            neighbor.percentInfected += 5;
            if(neighbor.percentInfected >= 100){
              neighbor.percentInfected = 100;
            }
            console.log(neighbor.provinceName + " is now infected " + neighbor.percentInfected + "%");

            $(neighbor.svgId.toString()).css("fill","#"+ "60" + "60" + "60");
            var myID = neighbor.svgId;
            console.log(myID)
            console.log($(myID).attr('fill'));


          })
        }
      })
      console.log("1 second")
    }, 1000);




  });
});
