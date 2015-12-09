app.controller('ParticipantsCtrl', function ($scope, $http) {
    $scope.imageLink = function (person) {
        return 'url(../img/' + person.image + ' )';
    };

    $http.get('json/participants.json').success(function (data, status, headers, config) {
        $scope.participants = data;
    }).
        error(function (data, status, headers, config) {
            console.log('error');
        });
});
