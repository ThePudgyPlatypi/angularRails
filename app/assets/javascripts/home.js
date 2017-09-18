// dont forget to remove the comments at the top or JS files wont load properly.

var app = angular.module('receta', ['templates, 'ngRoute', 'controllers'])

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: "index.html",
		controller: "RecipesController"
	})
}])

var controllers = angular.module('controllers', [])

controllers.controller("RecipesController", ['$scope', function($scope) {
	$scope
}])