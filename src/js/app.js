var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
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
        templateUrl: "views/guide.html",
        controller: "GuideCtrl",
        controllerAs: "guide"
    }).when("/contacts", {
        templateUrl: "views/contacts.html"
    }).otherwise({
        redirectTo: '/'
    });

    // $locationProvider.html5Mode({
    //     enabled: true,
    //     requireBase: false
    // });
    $locationProvider.hashPrefix();
});


app.controller('MainCtrl', function ($scope, $http) {
    $http.get('json/partners.json')
        .then(
            function (response) {
                $scope.partners = response.data;
            },
            function (response) {
                console.error('error', response);
            }
        );
});

app.directive('toggleClass', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('click', function() {
                element.toggleClass(attrs.toggleClass);
            });
        }
    };
});
