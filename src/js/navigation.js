app.directive("navigation", function () {
    return {
        restrict: "E",
        templateUrl: "views/elements/navigation.html",
        controller: function () {
            this.page = 0;

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
