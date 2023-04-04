# Weather-API
This project is a website that displays the current weather for selected cities in Malaysia. 
Users can choose a city from a dropdown menu and the website will show the temperature, humidity, wind speed, 
and weather conditions for that city. It was created using HTML, CSS, and JavaScript, and uses an API to retrieve weather data from the internet.

How to setup the API:

1) Go to website https://openweathermap.org and create a new account
2) On profile, go to API --> Current Weather Data --> API doc, then copy this link: https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} 
3) Open a new tab on browser, paste the link. 
4) On profile, search on your username --> my api keys, then copy the default key, or you can generate another key
5) Open back the tab that you paste the url, replace {API key} with your default key, then change {city name} to your preferred selected city. E.g: Selangor. Then press enter
6) See if the result generated an xml output that shows current weather in your selected city, then the url is ready to use
7) To test the result with JSON format, open POSTMAN software, set the http method to GET, paste the url, then click send
8) You will see the data in JSON format view, the units will stay at default condition. To make changes. You will need to add some parameter to the url. In my case, i add "&units=imperial" after city name.
9) Then, click send. The result will change according to the parameter added.
10) To fetch the weather API data, you can take a closer look at my script.js file.  I already explained the codes in there.
