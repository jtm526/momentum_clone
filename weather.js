function getWeather(position) {
    const latitude = position.latitude;
    const longitude = position.longitude;
}

navigator.geolocation.getCurrentPosition(getWeather);