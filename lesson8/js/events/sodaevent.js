const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == 'Soda Springs') {
                let soda = towns[i].events;
                  console.log(soda);
                for (let i = 0; i < soda.length; i++) {
                    let info = document.createElement('p');

                    info.textContent = soda[i];

                    document.querySelector('div.eventsoda').appendChild(info);
                }
            }
        }
    });