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
                        name: "путеводитель"
                    }, {
                        number: 1,
                        name: "как добраться"
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
                        name: "конкурс"
                    }, {
                        number: 1,
                        name: "сказка"
                    }, {
                        number: 2,
                        name: "положение"
                    }
                    ]
                },
                {
                    number: 4,
                    name: "контакты",
                    link: "/contacts"
                }];

            switch ($location.path()) {
                case this.links[0].link:
                    this.page = this.links[0].number;
                    break;
                case this.links[1].link:
                    this.page = this.links[1].number;
                    break;
                case this.links[2].link:
                    this.page = this.links[2].number;
                    break;
                case this.links[3].link:
                    this.page = this.links[3].number;
                    break;
                case this.links[4].link:
                    this.page = this.links[4].number;
                    break;
                default:
                    this.page = -1;
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
