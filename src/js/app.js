var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "views/main.html",
        controller: "MainCtrl",
        controllerAs: "main"
    }).when("/program", {
        templateUrl: "views/program.html",
        controller: "ProgramCtrl",
        controllerAs: "program"
    }).when("/guide", {
        templateUrl: "views/guide/guide.html",
        controller: "GuideCtrl",
        controllerAs: "guide"
    }).when("/guide/howtoget", {
        templateUrl: "views/guide/howtoget.html"
    }).when("/contacts", {
        templateUrl: "views/contacts.html",
        controller: "ContactsCtrl",
        controllerAs: "contacts"
    })
        .when("/contest", {
            redirectTo: "/contest/about"
        })
        .when("/contest/about", {
            templateUrl: "views/contest/about.html"
        })
        .when("/contest/fairytale", {
            templateUrl: "views/contest/fairytale.html"
        })
        .when("/contest/rules", {
            templateUrl: "views/contest/rules.html"
        })
        .when("/palekh", {
            templateUrl: "views/contacts.html",
            controller: "PalekhCtrl",
            controllerAs: "palekh"
        }).otherwise({
        redirectTo: '/'
    });
});
