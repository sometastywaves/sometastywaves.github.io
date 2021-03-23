const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=065b7df1e34366dc149754ed36f93869';

fetch(apiURL)
    .then(response => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const forecast = jsObject.list.filter((element) => element.dt_txt.includes('18:00:00'));
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        let day = 0;
        forecast.forEach(forecast => {
            let d = new Date(forecast.dt_txt);
            let desc = forecast.weather[0].description;
            let imagesrc = "https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";
            document.getElementById('day' + (day + 1)).textContent = days[d.getDay()];
            document.getElementById('image' + (day + 1)).setAttribute('alt', desc);
            document.getElementById('image' + (day + 1)).setAttribute('src', imagesrc);
            document.getElementById('temp' + (day + 1)).textContent = forecast.main.temp + ' °F';

            day++;
        });
    });
