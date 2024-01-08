async function getWeather(location) {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=e5c3e7dde25f417b88d193209240801&q=${location}`);
    const weather = await response.json();
    console.log(weather);
    
    //Weather information
    return weather;
}