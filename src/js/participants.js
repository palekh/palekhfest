app.controller('ParticipantsCtrl', function ($scope, $http) {
    $scope.imageLink = function (person) {
        return 'url(../img/' + person.image + ' )';
    };

    $http.get('json/participants.json')
        .then(
            function (response) {
                $scope.participants = response.data;
            },
            function (response) {
                console.error('error', response);
            }
        );
});
