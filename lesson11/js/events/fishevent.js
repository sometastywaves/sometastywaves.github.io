const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == 'Fish Haven') {
                let fish = towns[i].events;
                    console.log(fish);
                for (let i = 0; i < fish.length; i++) {
                    let info = document.createElement('p');

                    info.textContent = fish[i];

                    document.querySelector('div.eventfish').appendChild(info);
                }
            }
        }
    });