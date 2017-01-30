// Country Object
// Params: countryName: String, totalPop: int, provinces: array of province object
function Country(countryName, totalPop, provinces){
  this.countryName = countryName;
  this.totalPopulation = totalPop;
  this.provinces = provinces;
  this.percentInfected = 0;
  this.countryNeighbors
};

// Country prototype Methods
GameManager.prototype.setProvincePop = function(){
  var amount = this.totalPopulation;
  var totalProvinceCount = this.provinces.length;
  this.provinces.forEach(function(province){
    province.population = amount / totalProvinceCount;
  })

};

// Province object
// Params: provinceName: String, svgName: String
function Province(provinceName, svgName){
  this.provinceName = provinceName;
  this.svgName = svgName;
  this.population = 0;
  this.percentInfected = 0;
  this.provinceNeighbors = [];
};

// Province prototype Methods

// Disease object
// Params: diseaseName: String, virulity: floating point number, lethality: floating point number, displayColor: string
function Disease(diseaseName, virulity, lethality, displayColor){
  this.diseaseName = diseaseName;
  this.virulity = virulity;
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




// UI

// Display Country Detail function
