app.controller('ProgramCtrl', function ($scope, $http) {

    $scope.days = $http.get('json/program.json')
        .success(function (data, status, header, config) {
            $scope.days = data;
        })
        .error(function (data, status, header, config) {
            console.log('error');
        });
});
