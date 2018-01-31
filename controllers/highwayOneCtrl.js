'use strict';

angular
.module('listing')
.controller('highwayOneCtrl', function($scope) {
    console.log('hey');
    $scope.highway = {
        name : 'The yellow brick road',
        description: 'This road winds on for miles. sometimes people die'
    }
})