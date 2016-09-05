angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainService) {
  
  $scope.destinations = mainService.travelInfo;

})
