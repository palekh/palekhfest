app.directive("navigation", function ($location) {
    return {
        restrict: "E",
        templateUrl: "views/elements/navigation.html",
        controller: function () {
            this.links = [{
                number: 1,
                name: "программа",
                link: "/program"
            },
                {
                    number: 2,
                    name: "путеводитель",
                    link: "/guide"
                },
                {
                    number: 3,
                    name: "палех",
                    link: "/palekh"
                },
                {
                    number: 4,
                    name: "конкурс",
                    link: "/contest"
                },
                {
                    number: 5,
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
                    this.page = 0;
            }

            this.isSet = function (checkPage) {
                return this.page === checkPage;
            };

            this.setPage = function (activePage) {
                this.page = activePage;
            };
        },
        controllerAs: "navigation"
    };
});
