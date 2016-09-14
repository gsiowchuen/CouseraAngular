(function(){
'use strict';
angular.module('LunchCheck',[])
.controller('FoodController',FoodController);

FoodController.$inject = ['$scope'];
function FoodController($scope){

   //this will be the function that handles the request from the form
   $scope.checkFood = function(){
      console.log($scope.foodArrayString);
      if($scope.foodArrayString.length==0){
        $scope.checkResult = "Please enter data first";
      }else{
      var foodArray = $scope.foodArrayString.split(",");
      console.log(foodArray.length);
      if(foodArray.length>3){
        $scope.checkResult = "Too Much!";
      }else{
        $scope.checkResult = "Enjoy!";
      }
    }
   }

}
})()
