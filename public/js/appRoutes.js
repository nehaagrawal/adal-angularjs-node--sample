angular.module('appRoutes', ['AdalAngular']).config(['$routeProvider', '$locationProvider', '$httpProvider','adalAuthenticationServiceProvider', function($routeProvider, $locationProvider, $httpProvider,adalProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/nerds', {
			templateUrl: 'views/nerd.html',
			controller: 'NerdController',
            requireADLogin: true
		})

		.when('/geeks', {
			templateUrl: 'views/geek.html',
			controller: 'GeekController'	
		});

	//$locationProvider.html5Mode(true);

    $locationProvider.html5Mode(true).hashPrefix('!');


    adalProvider.init(
        {
            instance: 'https://login.microsoftonline.com/',
            tenant: 'microsoft.onmicrosoft.com',
            clientId: 'daf08e8a-bb72-4eb3-80cd-e83ac8dacc93',
            popUp: false,
			extraQueryParameter: "prompt=select_account"
            //cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
        },
        $httpProvider // pass http provider to inject request interceptor to attach tokens
    );



}]);