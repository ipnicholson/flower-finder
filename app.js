(function(){ // closure wrapper
  var app = angular.module('finder', [] );

  app.controller('FinderController', function(){
    this.flowers = plants;
  });

  var plants = [
    {
      commonName: "Bush Sunflower",
      scientificName: "Encelia Californica",
      family: "Asteraceae"

    }
  ]

})();