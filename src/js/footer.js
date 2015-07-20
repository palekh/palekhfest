app.directive("appleFooter", function ($rootScope) {
    return {
        restrict: "E",
        templateUrl: "views/elements/footer.html",
        link: function ($scope, element, attrs) {
            $rootScope.$on("$routeChangeSuccess", function () {
                var backgrounds = ["../img/footer-bird.png",
                    "../img/footer-cat.png"];
                element.find('.animal').css({
                    'background-image': 'url(' + backgrounds[Math.floor(Math.random() * backgrounds.length)] + ')'
                });
            });
        }
    };
});
