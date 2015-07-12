var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "views/mainPage.html",
        controller: "MainCtrl",
        controllerAs: "main"
    }).when("/program", {
        templateUrl: "views/programPage.html",
        controller: "ProgramCtrl",
        controllerAs: "program"
    }).when("/guide", {
        templateUrl: "views/guidePage.html",
        controller: "GuideCtrl",
        controllerAs: "guide"
    }).when("/contacts", {
        templateUrl: "views/contactsPage.html",
        controller: "ContactsCtrl",
        controllerAs: "contacts"
    })
        .when("/contest", {
            templateUrl: "views/contestPage.html",
            controller: "ContestCtrl",
            controllerAs: "contest"
        })
        .when("/palekh", {
            templateUrl: "views/contactsPage.html",
            controller: "PalekhCtrl",
            controllerAs: "palekh"
        }).otherwise({
        redirectTo: '/'
    });
});
