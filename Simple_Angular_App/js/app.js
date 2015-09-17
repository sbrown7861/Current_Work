/**
 * Created by skylerbrown on 7/8/15.
 */


    //Creating a variable for angular app

var app= angular.module('myApp',[]);

app.controller('GroceryController', function($scope){

  $scope.newItem;

    //list items

    $scope.groceries = [];


    //Add Item function

    $scope.addItem = function(){

        if ($scope.groceries.indexOf($scope.newItem) == -1){

        $scope.groceries.push($scope.newItem);

        $scope.newItem = '';}

            else(alert("This item is already in the list!"));

    };


    //Remove item function

    // Could not figure out how to override angular to display list items in the center.

    $scope.removeItem = function(item){

        var index = $scope.groceries.indexOf(item);

            $scope.groceries.splice(index,1);


    }

});