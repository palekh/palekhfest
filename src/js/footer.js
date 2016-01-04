app.directive("appleFooter", function ($rootScope) {
    return {
        restrict: "E",
        templateUrl: "views/elements/footer.html",
        link: function ($scope, element) {
            $rootScope.$on("$routeChangeSuccess", function () {
                var backgrounds = [
                    {
                        "src":"../img/footer-bird.png",
                        "alt":"Курица клюёт крошки. Иллюстрация",
                        "title": "Курочка Крошка"
                    },
                    {
                        "src": "../img/footer-cat.png",
                        "alt": "Весёлый кот. Иллюстрация",
                        "title": "Кот Офей"
                    },
                ];
                var randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
                var elemAnimal = element.find('.animal');
                for (var attr in randomBg){
                    elemAnimal.attr(attr, randomBg[attr]);
                }
            });
        }
    };
});
