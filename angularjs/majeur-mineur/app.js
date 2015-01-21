var myApp = angular.module('myApp',[]);

myApp.controller("getAgeCtrl", function($scope){
    $scope.age = 0;
    $scope.sayStatut = function(){
        if($scope.age < 18){
            return "mineur";
        }else{
            return "majeur";
        }
    };
});