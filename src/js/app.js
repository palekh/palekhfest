var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "views/main.html",
        controller: 'MainCtrl',
        controllerAs: 'main'
    }).when("/program", {
        templateUrl: "views/program.html",
        controller: "ProgramCtrl",
        controllerAs: "program"
    }).when("/participants", {
        templateUrl: "views/participants.html",
        controller: "ParticipantsCtrl",
        controllerAs: "participants"
    }).when("/guide", {
        templateUrl: "views/guide.html"
    }).when("/contacts", {
        templateUrl: "views/contacts.html"
    }).otherwise({
        redirectTo: '/'
    });
});


app.controller('MainCtrl', function ($scope, $http) {
    $http.get('json/partners.json').success(function (data, status, headers, config) {
        $scope.partners = data;
    }).
        error(function (data, status, headers, config) {
            console.log('error');
        });
});
