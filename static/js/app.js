angular.module('myApp', ['myApp.controllers','ui.router'])
.config(function($stateProvider, $urlRouterProvider) {


	$urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl:'../html_templates/index.html',
        controller:'firstCtrl'
    })
    .state('register', {
        url: '/register',
        templateUrl:'../html_templates/register.html',
        // controller:'firstCtrl'
    })
    .state('login', {
        url: '/login',
        templateUrl:'../html_templates/login.html',
        // controller:'firstCtrl'
    });

}); //config ends

