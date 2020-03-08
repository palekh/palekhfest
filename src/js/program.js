app.controller('ProgramCtrl', function ($scope, $http) {

    $http.get('json/program.json').then(
        function (response) {
            $scope.days = response.data;
        },
        function (response) {
            console.log('error', response);
        }
    );

});
