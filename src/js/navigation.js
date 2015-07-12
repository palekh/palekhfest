app.directive("navigation", function ($location) {
    return {
        restrict: "E",
        templateUrl: "views/elements/navigation.html",
        controller: function () {
            this.links = [{
                number: 0,
                name: "программа",
                link: "/program"
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
                    link: "/palekh"
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
                    link: "/contacts"
                }];
            if ($location.path() == '/') this.page = -1;
            else {
                var link = this.links.filter(function (item) {
                    return $location.path().includes(item.link);
                })[0];
                this.page = link.number;
                if (link.tabs != null) {
                    link.tab = link.tabs.filter(function (item) {
                        return item.link.includes($location.path());
                    })[0].number;
                }
            }

            this.isSet = function (checkPage) {
                return this.page === checkPage;
            };

            this.isContainTabs = function (checkPage) {
                return this.links[checkPage].tabs != null;
            };

            this.setPage = function (activePage) {
                this.page = activePage;
            };

            this.isSetTab = function (checkTab) {
                return this.links[this.page].tab === checkTab;
            };

            this.setTab = function (activeTab) {
                this.links[this.page].tab = activeTab;
            };
        },
        controllerAs: "navigation"
    };
});
