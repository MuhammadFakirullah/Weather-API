function renderWeather(weather, resultContainerId) {
  // log the weather object to the console
  console.log(weather);

  // get the container element with the specified ID
  var resultContainer = document.querySelector(`#${resultContainerId}`);

  // create an <h2> element for the city name and set its text content to the value of `weather.name`
  var city = document.createElement("h5");
  city.textContent = weather.name;
  // append the city element to the result container
  resultContainer.append(city);

  // create a <p> element for the temperature and set its text content to the temperature value in Fahrenheit
  var temp = document.createElement("p");
  //temp.textContent = "Temp: " + weather.main.temp + " F";
  //change the temp units (F to Celcius)
  temp.textContent = "Temp: " + Math.round((weather.main.temp - 32) * 5/9) + " °C";
  // append the temperature element to the result container
  resultContainer.append(temp);

  // create a <p> element for the humidity and set its text content to the humidity value as a percentage
  var humidity = document.createElement("p");
  humidity.textContent = "Humidity: " + weather.main.humidity + " %";
  // append the humidity element to the result container
  resultContainer.append(humidity);

  // create a <p> element for the wind and set its text content to the wind speed in mph and wind direction in degrees
  var wind = document.createElement("p");
  wind.textContent = "Wind: " + Math.round((weather.wind.speed * 1.60934)) + " km/h, " + weather.wind.deg + "°";
  // append the wind element to the result container
  resultContainer.append(wind);

  // get the first weather detail from the `weather` array (if any) and check if it has a `description` property
  var weatherDetails = weather.weather[0]
  if (weatherDetails && weatherDetails.description) { 
    // if there is a `description` property, create a <p> element for it and set its text content to the value of `weatherDetails.description`
    var description = document.createElement("p");
    description.textContent = "Status: " + weatherDetails.description;
    // append the description element to the result container
    resultContainer.append(description);
  }
}

// this function fetches weather data for a given city using the OpenWeatherMap API
function fetchWeather(query, resultContainerId){
  // create the API URL with the query and API key
  var url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=imperial&appid={YOUR API KEY HERE}";

  // make a GET request to the API URL using the fetch() method
  fetch(url)
  // convert the response data to JSON format
  .then((response) => response.json())
  // call the `renderWeather` function with the JSON data and the result container ID as arguments
  .then((data) => renderWeather(data, resultContainerId));
}

// call the `fetchWeather` function with the city name "Kota Bharu" and the result container ID "weather-results-1"
fetchWeather("Kota Bharu", "weather-results-1");

// call the `fetchWeather` function with the city name "Kuala Terengganu" and the result container ID "weather-results-2"
fetchWeather("Kuala Terengganu", "weather-results-2");

// call the `fetchWeather` function with the city name "Kuala Lumpur" and the result container ID "weather-results-3"
fetchWeather("Kuala Lumpur", "weather-results-3");

// call the `fetchWeather` function with the city name "Malacca" and the result container ID "weather-results-4"
fetchWeather("Malacca", "weather-results-4");

// call the `fetchWeather` function with the city name "Kuching" and the result container ID "weather-results-5"
fetchWeather("Kuching", "weather-results-5");

// call the `fetchWeather` function with the city name "George Town" and the result container ID "weather-results-6"
fetchWeather("George Town", "weather-results-6");

// call the `fetchWeather` function with the city name "Johor Bahru" and the result container ID "weather-results-7"
fetchWeather("Johor Bahru", "weather-results-7");

// call the `fetchWeather` function with the city name "Sandakan" and the result container ID "weather-results-8"
fetchWeather("Sandakan", "weather-results-8");

fetchWeather("Petaling Jaya", "weather-results-9");

fetchWeather("Seremban", "weather-results-10");

fetchWeather("Shah Alam", "weather-results-11");

fetchWeather("Klang", "weather-results-12");

fetchWeather("Kuala Kangsar", "weather-results-13");

fetchWeather("Temerloh", "weather-results-14");

fetchWeather("Ketereh", "weather-results-15");

fetchWeather("Taiping", "weather-results-16");

fetchWeather("Dungun", "weather-results-17");

fetchWeather("Kuala Selangor", "weather-results-18");

fetchWeather("Kulai", "weather-results-19");

fetchWeather("Kemaman", "weather-results-20");

fetchWeather("Taiping", "weather-results-21");

fetchWeather("Bintulu", "weather-results-22");

fetchWeather("Muar", "weather-results-23");

fetchWeather("Teluk Intan", "weather-results-24");
