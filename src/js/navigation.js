app.directive("navigation", function ($location) {
    return {
        restrict: "E",
        templateUrl: "views/elements/navigation.html",
        controller: function ($rootScope, $scope) {
            $scope.links = [
                {
                    number: 0,
                    name: "программа",
                    link: "#!/program"
                },
                {
                    number: 1,
                    name: "участники",
                    link: "#!/participants"
                },
                {
                    number: 2,
                    name: "путеводитель",
                    link: "#!/guide"
                },
                {
                    number: 3,
                    name: "контакты",
                    link: "#!/contacts"
                }
            ];
            $scope.page = -1;
            $scope.showNav = false;

            $rootScope.$on("$routeChangeSuccess", function () {
                window.scrollTo(0, 0);
                if ($location.path() != '/') {
                    var link = $scope.links.filter(function (item) {
                        return item.link.includes($location.path());
                    })[0];
                    $scope.page = link.number;
                }
            });

            this.isSet = function (checkPage) {
                return $scope.page === checkPage;
            };

            this.setPage = function (activePage) {
                $scope.showNav = false;
                $scope.page = activePage;
            };

            this.toggleNav = function () {
                $scope.showNav = !$scope.showNav;
            };

            $scope.isShow = function () {
                return $scope.showNav || window.innerWidth > 800;
            };

            $scope.currentPageName = function () {
                if ($scope.page == -1) return "главная ";
                return $scope.links[$scope.page].name + " ";
            };
        },
        controllerAs: "navigation"
    };
});
