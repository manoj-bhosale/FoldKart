angular.module('foldKart', ['ngRoute','ngSanitize','ngStorage']).config(function($routeProvider) {
	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'components/home/homeTemplate.html',
			controller  : 'homeController'
		})

		// route for the contact page
		.when('/contact', {
			templateUrl : 'components/contact/contactTemplate.html',
			controller  : 'contactController'
		})

		// route for the about page
		.when('/about', {
			templateUrl : 'components/about/aboutTemplate.html',
			controller  : 'aboutController'
		})

		.otherwise({redirectTo:'/'});

});
