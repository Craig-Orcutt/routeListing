'use strict';

angular
.module('listing')
.controller('highwayTwoCtrl', function($scope) {
    console.log('hey');
    $scope.highway = {
        name : 'The Stairway to Heaven',
        description: 'This road winds on for miles. sometimes people die too. Could also be a trap'
    }
})