var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when("/", {
        templateUrl: "mainPage.html",
        controller: "MainCtrl",
        controllerAs: "main"
    }).otherwise({
        redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
});

app.controller('MainCtrl', function () {
    this.message = "Hello, World!";
});

