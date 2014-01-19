'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
	.controller('PostController', ['$scope',  '$http', function($scope, $http) {
		$http({method: 'GET', url: 'http://localhost:3000/posts.json'}).success(function(data){
			$scope.posts = data;
		});
  	}])
	.controller('formController', ['$scope','$http',function($scope, $http){
		$scope.master = {};
		$scope.update = function(post) {
			$scope.master = angular.copy(post);
			if(post.id == undefined){
				$http({method: 'POST', url: 'http://localhost:3000/posts', 
					data: '{ "post" :' + JSON.stringify( {title:post.title, detail:post.detail}) + ' }',
        				headers: {'Content-Type': 'application/json', 'Accept': 'application/json' }
					})
					.success(function(data){
						$scope.post = data.post;
					})
			}else{
				$http({method: 'PATCH', url: 'http://localhost:3000/posts/'+post.id,
					data: '{ "post": ' + JSON.stringify({title:post.title, detail:post.detail}) + '}',
					headers: {'Content-Type':'application/json', 'Accept': 'application/json' }
					})
					.success(function(data){
						$scope.post = data.post;
					})
			}
		};
		
		$scope.reset = function(){
			$scope.post = null;
		};
		
		$scope.reset();

		$scope.edit = function(post){
			$scope.post = post	
		};
		
		$scope.delete = function(post){
			$http.delete({ url: 'http://localhost:3000/posts/'+post.id
					})
				.success(function(data){
					$scope.post = data.post;
				})
		};
	}])
	.controller('MyCtrl1', [function(){

	}])
	.controller('MyCtrl2', [function(){

	}]);


