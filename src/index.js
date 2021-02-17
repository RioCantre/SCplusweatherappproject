
function showCurrenttemperature(response) {
  console.log(response.data);
  let currentCity = document.querySelector("#main-city");
  let currentDescription = document.querySelector(".description");
  let currentTemperature = document.querySelector(".today-temp");
  let currentHumidity = document.querySelector(".current-humid");
  let currentWindspeed = document.querySelector(".current-wind");
  currentCity.innerHTML = response.data.name;
  currentDescription.innerHTML = response.data.weather[0].description;
  currentTemperature.innerHTML = Math.round(response.data.main.temp);
  currentHumidity.innerHTML = response.data.main.humidity;
  currentWindspeed.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "3312911a0b7ca102a3fa47c9257e12fa";
let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showCurrenttemperature);