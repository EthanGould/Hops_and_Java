hnjApp.controller('hnjController', function ($scope, $http){
  $scope.beers = []

  $scope.getBeers = function(){
    $scope.beers = []
    $http.get('/beers.json').success(function(data){
      for (i = 0; i < data.length; i++){
        $scope.beers.push(data[i]);
      };
    });
  };
})
