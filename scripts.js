var latitude = 0;
var longitude = 0;

fetch('https://ipapi.co/json/')
  .then(response => response.json())
  .then(data2 => {
    // Log the location data to the console
    const location = data2.city;
    const state = data2.region;
    latitude = data2.latitude;
    longatude = data2.longitude;
    console.log(data2);
    document.getElementById("location").innerHTML = `${location}, ${state}`;



    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '8cbd3a1197mshd38b28f38b92abdp1182c2jsn9dc19b670992',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };
    
    // Retrieve current weather data from WeatherAPI.com
    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=%20'+ data2.latitude + '%2C' + data2.longitude, options)
      .then(response => response.json())
      .then(data => {
        // Retrieve weather information from API response
        //const location = data.current.location;
        //const latitude = data.current.latitude;
        console.log(data);
        const temperature = data.current.temp_f;
        const wind_direction = data.current.wind_dir;
        const wind_speed = data.current.wind_kph;
        const cloud_cover = data.current.cloud;
        const humidity = data.current.humidity;
    
        // Update the HTML elements with the weather information
        //document.getElementById("location").innerHTML = `${location}`;
        document.getElementById("temperature").innerHTML = `${temperature} &deg;F`;
        //document.getElementById("wind-direction").innerHTML = ` `,;
        document.getElementById("wind-speed").innerHTML = `Wind: ${wind_direction}, ${wind_speed} km/h`;
        document.getElementById("cloud-cover").innerHTML = `Cloud Cover: ${cloud_cover}%`;
        document.getElementById("humidity").innerHTML = `Humidity: ${humidity}%`;
      })
      .catch(error => console.log(error));



  })
  .catch(error => {
    // Log any errors to the console
    console.error(error);
  });

