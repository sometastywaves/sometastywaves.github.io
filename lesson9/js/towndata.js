const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
      if(towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs"){
        let towns = document.createElement('section');
        let name = document.createElement('h2');
        let motto = document.createElement('h3');
        let year = document.createElement('p');
        let population = document.createElement('p');
        let rain = document.createElement('p');
        let image = document.createElement('img');

        name.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        year.innerHTML = towns[i].yearFounded; 
        population.innerHTML = towns[i].currentPopulation;
        rain.innerHTML = towns[i].averageRainfall;
        image.setAttribute('src',towns[i].photo);

        let div = document.createElement('div');

        div.appendChild(name);
        div.appendChild(motto);
        div.appendChild(year);
        div.appendChild(rain);
        div.appendChild(population);
        card.appendChild(image);
        card.appendChild(div);

        document.querySelector(towns).appendChild(towns);
      }
     }});