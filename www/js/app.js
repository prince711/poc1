var app=angular.module('webadmin',['ngRoute']);
app.run(function ($rootScope){
	
});

 app.config(function ($routeProvider) {
	 $routeProvider
	 .when("/home", {
		templateUrl : "views/listing-page.html",
		controller : "addController"
	 })
	 .when("/Restaurant/:id", {
		templateUrl : "views/main.html",
		controller : "MainController"
	 }).
	 
	 otherwise({
		 redirectTo : "/home"
	 })
	
	
	
 });
 /* app.config(['$locationProvider',function($locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
 }]); */