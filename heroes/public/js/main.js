angular.module('heroes', ['minhasDiretivas','ngAnimate', 'ngRoute', 'ngResource', 'meusServicos'])
	.config(function($routeProvider, $locationProvider, $httpProvider) {


		$httpProvider.interceptors.push('tokenInterceptor');
		
		$routeProvider.when('/home', {
			templateUrl: 'partials/principal.html',
			controller: 'HeroesHomeController'
		});

		$routeProvider.when('/hero/new', {
			templateUrl: 'partials/hero.html',
			controller: 'HeroController'
		});

		$routeProvider.when('/hero/edit/:fotoId', {
			templateUrl: 'partials/hero.html',
			controller: 'HeroController'
		});

		$routeProvider.when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'LoginController'
        });


		$routeProvider.otherwise({redirectTo: '/home'});

	});