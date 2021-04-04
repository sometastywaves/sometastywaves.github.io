const apiURL_weather = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=065b7df1e34366dc149754ed36f93869';

fetch(apiURL_weather)
  .then((response) => response.json())
  .then((town) => {
    console.log(town);
    document.getElementById('current').innerHTML = town.weather[0].description;
    document.getElementById('hightemp').innerHTML = town.main.temp_max;
    document.getElementById('humid').innerHTML = town.main.humidity;
    document.getElementById('wind').innerHTML = town.wind.speed;
    
    var t = parseInt(town.main.temp);
    var s = parseInt(town.wind.speed);
    var chilltemp = wChill(t,s);
    function wChill(t,s) {
        if (t < 51 && s > 3) {
          var outcome = 35.74 + 0.6215 * t - 35.75 * (Math.pow(s, 0.16)) + 0.4275 * t * (Math.pow(s, 0.16));
        } else {
          outcome = "(n/a)";
        }
         return outcome;
        }
      document.getElementById("windchill").textContent = Math.round(chilltemp);
} );