
var animalBackgrounds = [
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

app.directive("appleFooter", function ($rootScope) {
    return {
        restrict: "E",
        templateUrl: "views/elements/footer.html",
        link: function () {
            $rootScope.$on("$routeChangeSuccess", function () {
                const index = Math.random() > 0.5
                    ? 1
                    : 0;
                var randomAnimal = animalBackgrounds[index];
                var animalElement = document.getElementsByClassName('animal')[0];
                for (var attribute in randomAnimal) {
                    animalElement.setAttribute(attribute, randomAnimal[attribute]);
                }
            });
        }
    };
});
