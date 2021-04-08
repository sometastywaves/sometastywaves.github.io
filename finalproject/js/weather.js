const apiURL_weather = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.6638&lon=-117.9047&appid=c114559a842b969ca5377c4a921cfc11&units=imperial';

fetch(apiURL_weather)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current').innerHTML = jsObject.current.weather[0].description;
    document.getElementById('temp').innerHTML = jsObject.current.temp ;
    document.getElementById('humid').innerHTML = jsObject.current.humidity + "%";
      } );

