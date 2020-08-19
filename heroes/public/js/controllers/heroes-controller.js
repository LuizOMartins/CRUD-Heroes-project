angular.module('heroes').controller('HeroesHomeController', function($scope, heroResource) {
	
	$scope.heroes = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	heroResource.query(function(heroes) {
		$scope.heroes = heroes;
	}, function(erro) {
		console.log(erro);
	});

	$scope.remover = function(hero) {

		heroResource.delete({fotoId: hero._id}, function() { // delete a foto e uma função de call back para remove da View
			var indiceDaFoto = $scope.heroes.indexOf(hero);
			$scope.heroes.splice(indiceDaFoto, 1);
			$scope.mensagem = 'Herói ' + hero.titulo + ' removida com sucesso!';
		}, function(erro) {
			console.log(erro);
			$scope.mensagem = 'Não foi possível apagar a foto ' + hero.titulo;
		});
	};

});