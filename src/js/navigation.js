app.directive("navigation", function () {
    return {
        restrict: "A",
        templateUrl: "views/navigationSection.html",
        controller: function () {
            this.tab = 1;

            this.isSet = function (checkTab) {
                return this.tab === checkTab;
            };

            this.setTab = function (activeTab) {
                this.tab = activeTab;
            };
        },
        controllerAs: "navigation"
    };
});
