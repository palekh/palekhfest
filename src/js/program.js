app.controller('ProgramCtrl', function ($scope, $http) {

    $http.get('json/program.json').success(function (data, status, headers, config) {
        $scope.days = data;
    }).error(function (data, status, headers, config) {
            console.log('error');
        });
	
});
