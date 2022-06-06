const API_KEY = "b8dd14b7236271d6a7e9879d9bbe4b81";

function getWeather(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
    console.log(url);
    
}
function onError() {
    alert("Can't find your location.");
}

navigator.geolocation.getCurrentPosition(getWeather, onError);
