/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var myApp = angular
        .module('myModule',[])
        .controller('myController',function($scope){
          
               var company = ['KFC','webnun','ecobank'];     
                $scope.company = company;
        });