angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $state, mainService) {

$scope.array = mainService.travelInfo;  //I assigned a scope variable to this to make it cleaner

for(var i = 0; i < $scope.array.length; i++) {  //loop through your information array
  if($scope.array[i].id == $state.params.id) {  //my variable[i] comparing to the parameter of $state, with the ID passed to it from packages.html
    $scope.booked = $scope.array[i];  //assigning the object in the array to a scope variable so you can pass it to booked.html
  }
}

})
