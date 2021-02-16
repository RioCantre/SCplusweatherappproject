let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let weekday = weekdays[now.getDay()];
let nowToday = document.querySelector(".day-name");
nowToday.innerHTML = `${weekday}`;
let time = document.querySelector(".today-datetime");
time.innerHTML = `${hours}:${minutes}`;

function locationForm(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input");
  let currentCity = document.querySelector("#Main-city");
  citySearch(city.value);
  currentCity.innerHTML = city.value;
}
let currentCity = document.querySelector("form");
currentCity.addEventListener("submit", locationForm);

// week 5 homework
function citySearch(currentCity) {
  let apiKey = "3312911a0b7ca102a3fa47c9257e12fa";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(weatherToday);
}
citySearch("New York");

function weatherToday(response) {
  let currentCity = response.data.name;
  let searchCity = document.querySelector("#Main-city");
  searchCity.innerHTML = currentCity;
  

  let description = response.data.weather[0].main;
  let searchCityDesc = document.querySelector(".description");
  searchCityDesc.innerHTML = description;

  let temperature = Math.round(response.data.main.temp);
  let currentCityTemp = document.querySelector(".today-temp");
  currentCityTemp.innerHTML = temperature;
}

function posNow(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(currentPosition);
}

function currentPosition(position) {
  let apiKey = "3312911a0b7ca102a3fa47c9257e12fa";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(weatherToday);
}

let requestPosition = document.querySelector("#current-input");
requestPosition.addEventListener("click", posNow);
