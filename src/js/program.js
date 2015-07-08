app.controller('ProgramCtrl', function () {

    this.days = [
        {
            name: 'ДЕНЬ ПЕРВЫЙ',
            date: '15 августа',
            events: [
                {
                    name: 'Открытие',
                    time: '14:00'
                },
                {
                    name: 'Выставка',
                    time: '15:00'
                },
                {
                    name: 'Мастер-класс',
                    time: '15:00'
                },
                {
                    name: 'Акустический концерт',
                    time: '18:00'
                }
            ]
        }
        ,
        {
            name: 'ДЕНЬ ВТОРОЙ',
            date: '16 августа',
            events: [
                {
                    name: 'Пленер',
                    time: '10:00'
                },
                {
                    name: 'Выставка',
                    time: '12:00'
                },
                {
                    name: 'Мастер-класс',
                    time: '15:00'
                },
                {
                    name: 'Закрытие',
                    time: '20:00'
                }
            ]
        }

    ];
});
