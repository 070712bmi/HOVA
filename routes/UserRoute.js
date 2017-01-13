module.exports = function(app, router) {
	var User 							= require('../models/UsersModel.js'),
			Account						= require('../models/AccountsModel.js'),
			log 							= require('../config/logger.js'),
			util							= require('util'),
			passport					= require('passport'),
			LocalStrategy     = require("passport-local").Strategy,
			jwt               = require('jsonwebtoken'),
			expressJwt      	= require('express-jwt');

	passport.use(Account.createStrategy());
	passport.serializeUser(Account.serializeUser());
	passport.deserializeUser(Account.deserializeUser());
	
	router.route('/api/users')
		.get(function (req, res, next) {
			next(new Error("GET - /api/users not implemented Yet!"));

		})
		.post(function (req, res, next){
			createUser(req, res, next);
		});

	router.route('/api/users/:id')
		.get(function (req, res, next) {
			next(new Error("GET - /api/users/:id not implemented Yet!"));
			
		})
		.put(function (req, res, next){
			next(new Error("PUT - /api/users/:id Not implemented Yet!"));
			
		})
		.delete(function (req, res, next){
			next(new Error("DELETE - /api/users/:id Not implemented Yet!"));
		});

	router.route('/signup')
		.post(function (req, res, next){

		});

	router.route('/login')
		.post(function (req, res, next){

		});

	function createUser(req, res, next){
 
	}
	
	createAccount = function(username,password,user) {

	};
};