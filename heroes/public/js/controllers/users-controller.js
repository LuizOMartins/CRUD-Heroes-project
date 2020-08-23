angular.module('heroes').controller('UsersController', function($scope,  $resource) {
    
		$scope.usuario = {};
		var resourceGrupo = $resource('/v1/usuario');
		resourceGrupo.query().$promise.then(function(response) {
            $scope.usuario = response;
            console.log(response)
		 }, function(error) {
			console.log(error);
		 });

    
         
    
});