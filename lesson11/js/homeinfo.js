const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs") {
                let card = document.createElement('section');
                let div = document.createElement('div');
                let name = document.createElement('h2');
                let motto = document.createElement('p');
                let year = document.createElement('p');
                let population = document.createElement('p');
                let rain = document.createElement('p');
                let image = document.createElement('img');

                name.textContent = towns[i].name;
                motto.textContent = towns[i].motto;
                year.innerHTML = "Year Founded: " + towns[i].yearFounded;
                population.innerHTML = "Population: " + towns[i].currentPopulation;
                rain.innerHTML = "Average Rainfall: " + towns[i].averageRainfall;
                image.setAttribute('src', 'pics/' + towns[i].photo);

                div.appendChild(name);
                div.appendChild(motto);
                div.appendChild(year);
                div.appendChild(population);
                div.appendChild(rain);
                card.appendChild(image);
                card.appendChild(div);

                document.querySelector('div.towns').appendChild(card);
            }
        }
    });