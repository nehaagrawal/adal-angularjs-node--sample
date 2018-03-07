# Single Page Application Angularjs ADAL Starter

This is a repo for a starter application for a Single Page angularjs application with ADAL. 
You can use any IDE like intellij, eclipse or visual studio.

## Installation
1. Download the repository
2. Install npm modules: `npm install`
3. Install bower : `npm install -g bower`
3. Install bower dependencies `bower install` 
4. Start up the server: `node server.js`
5. View in browser at http://localhost:8080

Use this starter kit to build any adal-angularjs application you like. You need to change only one file appRoutes.js. 
Please replace instance, tenant and clientId with your own ids.

            instance: 'https://login.microsoftonline.com/',
            tenant: 'microsoft.onmicrosoft.com',
            clientId: 'daf08e8a-bb72-4eb3-80cd-e83ac8dacc93',


Also notice that currently the requireADLogin is set to only one of the route i.e. /nerds. 

.when('/nerds', {
			templateUrl: 'views/nerd.html',
			controller: 'NerdController',
            requireADLogin: true
		})
		

 I will keep updating this to make it perfect.


