const forecastURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=cc9663bac24d48ffba1cbf202d93ed9f&units=imperial";
fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
      console.log(jsObject);
     
    