'use strict';
var app = angular.module('vIOT', [ 'ngRoute' ]);
app.config(function($routeProvider) {
	$routeProvider.when('/showUser', {
		templateUrl : 'views/showUser.html'
	}).when('/addUser', {
			templateUrl : 'views/addUser.html'
	}).when('/editUser', {
		templateUrl : 'views/editUser.html'
	}).when('/', {
		templateUrl : 'views/home.html'
	})
	.otherwise({
		redirectTo : '/'
	});
});
