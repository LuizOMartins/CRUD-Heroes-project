var mongoose = require('mongoose');

module.exports = function(app) {
    var api = {};
    var model = mongoose.model('Usuario');

    api.lista = function(req, res) {

        model.find()
		.then(function(usuarios) {
            res.json(usuarios);
            console.log(usuarios);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		});
    };
    return api;

};