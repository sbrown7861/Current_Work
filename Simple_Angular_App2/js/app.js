/**
 * Created by skylerbrown on 7/15/15.
 */


/*Declaring app*/

var theApp= angular.module("MyApp",[]);

/*Setting up the controller*/

theApp.controller("MyController", function($scope,DataService){

    $scope.addresses = DataService.getAddresses();
        $scope.newAddress = {};


    $scope.addNewAddress = function(){

        if($scope.addresses.indexOf($scope.newAddress)== -1){

        DataService.saveAddress($scope.newAddress.company, $scope.newAddress.street, $scope.newAddress.state,
        $scope.newAddress.city, $scope.newAddress.zip);
        $scope.newAddress= {};}

            else(alert("this employee is already in the directory!"));

    };



    $scope.removeAddy= function(index){
        DataService.removeAddressAt(index);
    };

    $scope.clearIt= function(){
        DataService.destroyLocalStorage();
    }



});