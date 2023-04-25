
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8cbd3a1197mshd38b28f38b92abdp1182c2jsn9dc19b670992',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

// Retrieve current weather data from WeatherAPI.com
fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13', options)
  .then(response => response.json())
  .then(data => {
    // Retrieve weather information from API response
    const temperature = data.current.temp_c;
    const wind_direction = data.current.wind_dir;
    const wind_speed = data.current.wind_kph;
    const cloud_cover = data.current.cloud;
    const humidity = data.current.humidity;

    // Update the HTML elements with the weather information
    document.getElementById("temperature").innerHTML = `${temperature} &deg;C`;
    document.getElementById("wind-direction").innerHTML = wind_direction;
    document.getElementById("wind-speed").innerHTML = `${wind_speed} km/h`;
    document.getElementById("cloud-cover").innerHTML = `Cloud Cover: ${cloud_cover}%`;
    document.getElementById("humidity").innerHTML = `Humidity: ${humidity}%`;
  })
  .catch(error => console.log(error));
