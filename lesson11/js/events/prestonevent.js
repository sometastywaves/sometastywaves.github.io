const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == 'Preston') {
                let preston = towns[i].events;
                    console.log(preston);
                for (let i = 0; i < preston.length; i++) {
                    let info = document.createElement('p');

                    info.textContent = preston[i];

                    document.querySelector('div.eventp').appendChild(info);
                }
            }
        }
    });