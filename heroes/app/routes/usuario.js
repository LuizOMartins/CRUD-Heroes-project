module.exports = function(app) {
	
	var api = app.api.usuario;
	app.get('/v1/usuario', api.lista);
};