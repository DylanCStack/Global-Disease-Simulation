// Country Object
// Params: countryName: String, totalPop: int, provinces: array of province object
function Country(countryName){
  this.countryName = countryName;
  this.totalPopulation = 0;
  this.provinces = [];
  this.percentInfected = 0;////
  this.countryNeighbors = [];////
  this.deaths = 0;/////
};

// Country prototype Methods
// This method is used to add a population to a country
Country.prototype.setCountryPop = function(){

};

// This method sets each province population to a fraction of the total country population
Country.prototype.setProvincePop = function(){
  var amount = this.totalPopulation;
  var totalProvinceCount = this.provinces.length;
  this.provinces.forEach(function(province){
    province.population = amount / totalProvinceCount;
  });
};

// This method is used to add a neighbor to a country
Country.prototype.addNeighbor = function(neighbor){
  this.countryNeighbors.push(neighbor);
}

// Province object
// Params: provinceName: String, svgId: String
function Province(provinceName, svgId){
  this.provinceName = provinceName;
  this.svgId = svgId;
  this.population = 0;
  this.percentInfected = 0;

  this.provinceNeighbors = [];
  this.provinceCoords = [];
  this.xBuffer = 0;
  this.yBuffer = 0;
  this.xLeft = 0;
  this.xRight = 0;
  this.yTop = 0;
  this.yBottom = 0;
  this.country;
  this.deaths = 0;

};

// Province prototype Methods
// This method adds a neighbor to a province
Province.prototype.addNeighbor = function(neighbor){
  this.provinceNeighbors.push(neighbor);
}

// Method for finding general center of province
Province.prototype.findCenter = function(){
  var xCoordCenter = 0;
  var yCoordCenter = 0;
  this.provinceCoords.forEach(function(coord){
    xCoordCenter += coord.xCoord;
    yCoordCenter += coord.yCoord;
  });

  var center = new Coordinate(xCoordCenter/this.provinceCoords.length, yCoordCenter/this.provinceCoords.length);

  return center;

}

// Method for setting buffer size based on size of provinceCoords
Province.prototype.getBufferSize = function(){
  var xLeft = 10000000;
  var xRight = -1000000;
  var yTop = 10000000;
  var yBottom = -100000000;

  this.provinceCoords.forEach(function(coord){
    if (coord.xCoord < xLeft){
      xLeft = coord.xCoord;
    }
    if (coord.xCoord > xRight){
      xRight = coord.xCoord;
    }
    if (coord.yCoord < yTop){
      yTop = coord.yCoord;
    }
    if (coord.yCoord > yBottom){
      yBottom = coord.yCoord;
    }
  });

  this.xBuffer = (xRight - xLeft)*1.5;
  this.yBuffer = (yBottom - yTop)*1.5;
  this.xLeft = xLeft;
  this.xRight = xRight;
  this.yBottom = yBottom;
  this.yTop = yTop;



}

// Coordinate object
// Params: PointA: floating point number representing x coordinate, PointB: floating point number representing y coordinate
function Coordinate(pointA, pointB){
  this.xCoord = parseFloat(pointA);
  this.yCoord = parseFloat(pointB);
}

// Disease object
// Params: diseaseName: String, virulity: floating point number, lethality: floating point number, displayColor: string
function Disease(diseaseName, virulence, lethality, displayColor){
  this.diseaseName = diseaseName;
  this.virulence = virulence;
  this.lethality = lethality;
  this.displayColor = displayColor;
};

// Disease Methods



// Game Manager object
// Params: countries: array of country objects, disease: disease object
function GameManager(countries, disease){
  this.countryList = countries;
  this.disease = disease;
  this.worldPercentInfected = 0;
};

// Game Manager Methods
// method for infecting a province with a disease
GameManager.prototype.infect = function(province){

};

// method for growing a population infected
GameManager.prototype.grow = function(virulity, population){

};

// method for spreading to other provinces
GameManager.prototype.spread = function(neighbors){

};

// method for resetting data
GameManager.prototype.reset = function(neighbors){

};

// Testing

// var colorado = new Province("Colorado", "ColoradoSVG");
// var kansas = new Province("Kansas", "KansasSVG");
// kansas.addNeighbor(colorado);
// colorado.addNeighbor(kansas);
// var provinceList = [];
// provinceList.push(colorado);
// provinceList.push(kansas);
// var usa = new Country("USA", provinceList);
// var manitoba = new Province("Manitoba", "ManitobaSVG");
// var ottawa = new Province("Ottawa", "OttawaSVG");
// manitoba.addNeighbor(ottawa);
// ottawa.addNeighbor(manitoba);
// var provinceList2 = [];
// provinceList2.push(manitoba);
// provinceList2.push(ottawa);
// var canada = new Country("Canada", provinceList2);
// usa.addNeighbor(canada);
// canada.addNeighbor(usa);
// var countryList = [];
// countryList.push(usa);
// countryList.push(canada);
// var disease = new Disease("Bad Disease", 0.1234, 2.34, "blue");
// var gameState = new GameManager(countryList, disease);
//
// console.log(gameState);
