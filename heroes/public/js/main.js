angular.module('heroes', ['minhasDiretivas','ngAnimate', 'ngRoute', 'ngResource', 'meusServicos'])
	.config(function($routeProvider, $locationProvider, $httpProvider) {


		$httpProvider.interceptors.push('tokenInterceptor');
		
		$routeProvider.when('/home', {
			templateUrl: 'partials/principal.html',
			controller: 'HeroesHomeController'
		});

		$routeProvider.when('/fotos/new', {
			templateUrl: 'partials/foto.html',
			controller: 'FotoController'
		});

		$routeProvider.when('/fotos/edit/:fotoId', {
			templateUrl: 'partials/foto.html',
			controller: 'FotoController'
		});

		$routeProvider.when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'LoginController'
        });


		$routeProvider.otherwise({redirectTo: '/home'});

	});