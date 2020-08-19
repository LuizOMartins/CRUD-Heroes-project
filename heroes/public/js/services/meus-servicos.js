angular.module('meusServicos', ['ngResource'])
	.factory('heroResource', function($resource) {

		return $resource('/v1/fotos/:fotoId', null, { //  o parametro null e queryString
			'update' : { //informando a funcao e seu tipo de method a set usando
				method: 'PUT'
			}
		});
	})
	.factory("heroesRegister", function(heroResource, $q) { // o Serviço retorna um Promessi, o Serviço do
		var service = {};									// do AngularJS ( $q) permiti criar uma Promessi
		service.cadastrar = function(foto) {
			return $q(function(resolve, reject) {

				if(foto._id) { // se a foto já existir
					heroResource.update({fotoId: foto._id}, foto, function() {
						resolve({
							mensagem: 'Foto ' + foto.titulo + ' atualizada com sucesso',
							inclusao: false
						});
					}, function(erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível atualizar a foto ' + foto.titulo
						});
					});

				} else { // se for uma nova Foto
					heroResource.save(foto, function() {
						resolve({
							mensagem: 'Foto ' + foto.titulo + ' incluída com sucesso',
							inclusao: true
						});
					}, function(erro) {
						alert('Não Resolveu');
						reject({
							mensagem: 'Não foi possível incluir a foto ' + foto.titulo
						});
					});
				}
			});
		};
		return service;
    });