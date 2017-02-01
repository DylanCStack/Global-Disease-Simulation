$(document).ready(function() {
  $("#diseaseInput").submit(function(event) {
    event.preventDefault();

    var diseaseName = $("#diseaseName").val();
    var diseaseVirulence = $("#diseaseVirulence").val();
    var diseaseLethality = $("#diseaseLethality").val();
    var diseaseColor = "#cc0000";

    var newDisease = new Disease(diseaseName,diseaseVirulence,diseaseLethality,diseaseColor);
    //create disease



    //give disease a starting location

    setInterval(function(){
      //run disease every x seconds.
      console.log("1 second")
    }, 1000);


  })

})
