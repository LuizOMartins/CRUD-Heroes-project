angular.module('heroes')
	.controller('HeroController', function($scope, heroResource, $routeParams, heroesRegister) {

		$scope.foto = {};
		$scope.mensagem = '';

		if($routeParams.fotoId) {
			heroResource.get({fotoId: $routeParams.fotoId}, function(foto) {
				$scope.foto = foto; 
			}, function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível obter a foto'
			});
		}

		$scope.submeter = function() {
			if ($scope.formulario.$valid) {
				heroesRegister.cadastrar($scope.foto)
				.then(function(dados) {
					$scope.mensagem = dados.mensagem;
					if (dados.inclusao) $scope.foto = {};
				})
				.catch(function(erro) {
					$scope.mensagem = erro.mensagem;
				});
			}
		};
	});