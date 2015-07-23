app.controller('ParticipantsCtrl', function ($scope, $http) {
    $scope.hideName = function (person) {
        if (person.secret) return '???'; else
            return person.name;
    };

    $scope.hideImage = function (person) {
        if (person.secret) return 'none'; else
            return 'url(../img/' + person.image + ' )';
    };

    $scope.hideBg = function (person) {
        if (person.secret) return ''; else
            return 'transparent';
    };

    $scope.hideLink = function (person) {
        if (person.secret) return '#/program/participants'; else
            return person.link;
    };

    $scope.hideTarget = function (person) {
        if (person.secret) return '_self'; else
            return '_blank';
    };

    $http.get('json/participants.json').success(function (data, status, headers, config) {
        $scope.people = data;
    }).
        error(function (data, status, headers, config) {
            console.log('error');
        });
});
