angular.module('devmtnTravel').controller('packagesCtrl', function($scope, mainService) {

$scope.destinations = mainService.travelInfo;
// $scope.test = "Testing";

})
