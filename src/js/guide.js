var ymaps;

app.controller('GuideCtrl', function () {
    const waitingForMapsToLoad = () => {
        setTimeout(() => {
            if (ymaps) {
                console.log('Drawing maps...');
                drawMap();
            } else {
                console.log('Loading maps...');
                waitingForMapsToLoad();
            }
        }, 100);
    };

    waitingForMapsToLoad();
});

function drawMap () {
    ymaps.ready(function init() {
        var myMap = new ymaps.Map("map", {
            center: [56.80259142, 41.85475548],
            zoom: 7
        });

        var palekh = new ymaps.Placemark([56.80259142, 41.85475548], {
            content: 'Палех',
            balloonContent: 'Палех'
        });


        myMap.controls.add(
            new ymaps.control.ZoomControl()
        );

        myMap.geoObjects.add(palekh);
    });
}
