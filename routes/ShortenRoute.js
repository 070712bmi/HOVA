module.exports = function(app, router) {
	var UrlsModel 				= require('../models/UrlsModel.js');
	
	router.route('/api/shorten')
	
		/** Implementar el get de las URLS de la BD **/
		.get(function (req, res, next) {
			res.status(200).send({});
		})
		/** Implementar el post de las URLS de la BD **/
		.post(function (req, res, next){
			res.status(201).send({});
		});
	
	router.route('/api/redirect')
		/** Implementar funcionalidad de cuando ingrese a localhost:8081/#/0a0a0a redirija a la URL original **/
		.get(function(req, res, next){
			res.redirect("http://urlejemplo.com");
		})
};