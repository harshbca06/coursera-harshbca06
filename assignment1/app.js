(function(){
  'use strict';
  angular.module("LunchCheck",[])
  .controller("LunchCheckController",LunchCheckController);

  LunchCheckController.$inject=['$scope'];

  function LunchCheckController($scope){
    $scope.inputValue = "";
    $scope.message="";
    $scope.color="";

    $scope.process = function(){
      var count=0;
      $scope.message= "Please enter data first";
      if($scope.inputValue == "")
      {
        $scope.message= "Please enter data first";
        $scope.color="red";
      }else{
        var iteamArr= $scope.inputValue.split(',');
        for(var i=0;i< iteamArr.length;i++){
            if(iteamArr[i].trim() !== "")
            {
              count++;
            }
          }

          if(count == 0){
            $scope.message= "Please enter data first";
            $scope.color="red";
          }
          else if(count >0 && count <= 3)
          {
            $scope.message= "Enjoy!";
            $scope.color="green";
          }
          else {
            $scope.message= "Too Much!";
            $scope.color="green";
          }
      }


    };//end of function

    };//end of controller


})();
