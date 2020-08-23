angular.module('heroes')
	.controller('GruposController', function($scope, $http, $resource) {
		$scope.grupos = {};
		var resourceGrupo = $resource('/v1/grupos');
		resourceGrupo.query().$promise.then(function(response) {
			$scope.grupos = response;
		 }, function(error) {
			console.log(error);
		 });

	});

