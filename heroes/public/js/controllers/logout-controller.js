angular.module('heroes')
.controller('logoutController', function($scope, $window, $location) {

    $scope.myLogout = function() {
        delete $window.sessionStorage.token;
        $location.path( "/login" );

    };

    

});