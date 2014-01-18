'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
	.controller('PostController', ['$scope',  '$http', function($scope, $http) {
		$http({method: 'GET', url: 'http://localhost:3000/posts.json'}).success(function(data){
			$scope.posts = data;
		});
  	}])
	.controller('MyCtrl1', [function(){

	}])
	.controller('MyCtrl2', [function(){

	}]);





