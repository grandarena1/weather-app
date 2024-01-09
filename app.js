async function initDefaultLocation() {
    try {
        const defaultWeather = await getWeather('Grimsby');
        const defaultForecast = await getForecast('Grimsby');
        setupUI(defaultWeather, defaultForecast);
      } catch (err) {
        console.error(err);
      }
}

async function getWeather(location) {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=e5c3e7dde25f417b88d193209240801&q=${location}`);
        const weather = await response.json();
    
        //Weather information
        return weather;
    }
    catch(err) {
        console.log(err);
    }
}

async function getForecast(location) {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=e5c3e7dde25f417b88d193209240801&q=${location}`);
        const forecast = await response.json();
    
        //Weather information
        return forecast;
    }
    catch(err) {
        console.log(err);
    }
}

function setupUI(weatherData, forecastData) {
    //Variable references
    const locationText = document.querySelector('.location');
    const weatherText = document.querySelector('.weather');
    const timeText = document.querySelector('.time');
    const temperatureText = document.querySelector('.temperature');
    const weatherIcon = document.querySelector('.weather-icon');

    const feelsLikeText = document.querySelector('.feels-like');
    const humidityText = document.querySelector('.humidity');
    const chanceOfRainText = document.querySelector('.rain-chance');
    const windSpeedText = document.querySelector('.wind-speed');
    
    //Variable assignments
    locationText.textContent = weatherData.location.name;
    weatherText.textContent = weatherData.current.condition.text;
    timeText.textContent = weatherData.location.localtime;
    temperatureText.textContent = `${weatherData.current.temp_c} °C`;
    weatherIcon.src = weatherData.current.condition.icon;

    feelsLikeText.textContent = `${weatherData.current.feelslike_c} °C`;
    humidityText.textContent = `${weatherData.current.humidity}%`;
    chanceOfRainText.textContent = `${forecastData.forecast.forecastday[0].day.daily_chance_of_rain}%`;
    windSpeedText.textContent = `${weatherData.current.wind_kph} km/h`;

    if(!weatherData.current.is_day) {
        document.body.style.backgroundColor = '#293241';
    }
    else {
        document.body.style.backgroundColor = '#5b84a3';
    }

    console.log(weatherData);
    console.log(forecastData);
}

initDefaultLocation();

/*  TODO:
        *Make search bar work
        *Add more weather icons
*/