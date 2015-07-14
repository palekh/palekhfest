app.directive("navigation", function ($location) {
    return {
        restrict: "E",
        templateUrl: "views/elements/navigation.html",
        controller: function ($rootScope, $scope) {
            $scope.links = [{
                number: 0,
                name: "программа",
                link: "/program",
                tab: null
            },
                {
                    number: 1,
                    name: "путеводитель",
                    link: "/guide",
                    tab: 0,
                    tabs: [{
                        number: 0,
                        name: "путеводитель",
                        link: "/guide"
                    }, {
                        number: 1,
                        name: "как добраться",
                        link: "/guide/howtoget"
                    }
                    ]
                },
                {
                    number: 2,
                    name: "палех",
                    link: "/palekh",
                    tab: null
                },
                {
                    number: 3,
                    name: "конкурс",
                    link: "/contest",
                    tab: 0,
                    tabs: [{
                        number: 0,
                        name: "конкурс",
                        link: "/contest/about"
                    }, {
                        number: 1,
                        name: "сказка",
                        link: "/contest/fairytale"
                    }, {
                        number: 2,
                        name: "положение",
                        link: "/contest/rules"
                    }
                    ]
                },
                {
                    number: 4,
                    name: "контакты",
                    link: "/contacts",
                    tab: null
                }];
            $scope.page = -1;

            $rootScope.$on("$routeChangeSuccess", function () {
                if ($location.path() != '/') {
                    var link = $scope.links.filter(function (item) {
                        return $location.path().includes(item.link);
                    })[0];
                    $scope.page = link.number;
                    if (link.tabs != null) {
                        link.tab = link.tabs.filter(function (item) {
                            return item.link.includes($location.path());
                        })[0].number;
                    }
                }
            });

            this.isSet = function (checkPage) {
                return $scope.page === checkPage;
            };

            this.isContainTabs = function (checkPage) {
                return $scope.links[checkPage].tabs != null;
            };

            this.setPage = function (activePage) {
                $scope.page = activePage;
            };

            this.isSetTab = function (checkTab) {
                return $scope.page != -1 && $scope.links[$scope.page].tab === checkTab;
            };

            this.setTab = function (activeTab) {
                $scope.links[$scope.page].tab = activeTab;
            };
        },
        controllerAs: "navigation"
    };
});