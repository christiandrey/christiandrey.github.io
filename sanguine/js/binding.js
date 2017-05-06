var app = angular.module("sanguine", [])
		.constant('API_URL','http://127.0.0.1:2311/api/v1/');

var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cLzEyNy4wLjAuMToyMzExXC9hcGlcL3YxXC91c2VyXC9zaWduaW4iLCJpYXQiOjE0OTMxMjYxNDQsImV4cCI6MTQ5MzIxMjU0NCwibmJmIjoxNDkzMTI2MTQ0LCJqdGkiOiJyYzA4d1NLYW5PTmxDZGg1In0.2MhjaqPdZb8YGdyuABogWpHKjyMyAqudbJjJrc6-qiU';

app.controller("getTasksController", function($scope, $http, API_URL) {
	$http.get(API_URL + 'task?token=' + token)
	.then(function(response){
		$scope.tasks = response;
		$scope.test = function() {
			console.log('Hello world')
		}
	})
})
