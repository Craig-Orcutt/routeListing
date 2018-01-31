'use strict';

angular
.module('listing',['ngRoute'])
.config($routeProvider =>{
    $routeProvider
    .when('/highwayOne', {
        templateUrl : 'partials/highwayOne.html',
        controller: 'highwayOneCtrl'
    })
    .when( '/highwayTwo', {
        templateUrl: "partials/highwayTwo.html",
        controller: 'highwayTwoCtrl'
    })
    .otherwise('/home')
})
