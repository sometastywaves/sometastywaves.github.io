  
const apiURL_weather = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=065b7df1e34366dc149754ed36f93869';

fetch(apiURL_weather)
  .then((response) => response.json())
  .then((town) => {
    console.log(town);
    document.getElementById('current').innerHTML = town.weather[0].description;
    document.getElementById('hightemp').innerHTML = town.main.temp_max;
    document.getElementById('humid').innerHTML = town.main.humidity;
    document.getElementById('wind').innerHTML = town.wind.speed;
  } );

