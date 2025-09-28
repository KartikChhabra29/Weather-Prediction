async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '5f3c7dcaadd94be3d5ef0afe7651f7de'; // Replace with your OpenWeather API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod === 200) {
            document.getElementById('cityName').textContent = `Weather in ${data.name}`;
            document.getElementById('temp').textContent = `Temperature: ${data.main.temp} °C`;
            document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
            document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
        } else {
            document.getElementById('cityName').textContent = 'City not found';
            document.getElementById('temp').textContent = '';
            document.getElementById('humidity').textContent = '';
            document.getElementById('description').textContent = '';
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
