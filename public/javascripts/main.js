var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.ejs',
            controller:'homeController'
        })
        .when('/Inbox', {
            templateUrl: 'partials/inbox.ejs',
            controller: 'inboxController',
        })
        .when('/mdisplay/:mid', {
            templateUrl: 'partials/message.ejs',
            controller: 'mdisplayController'
        })
        .otherwise({
            redirectTo: '/'
        });
});