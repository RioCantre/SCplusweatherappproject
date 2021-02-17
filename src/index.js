
function showcurrentDay(){ 

  let day = new Date();
  let weekDays = [
     "Sunday",
     "Monday", 
     "Tuesday", 
     "Wednesday", 
     "Thursday", 
     "Friday", 
     "Saturday"]

  let dayToday = weekDays[day.getDay()];
  return dayToday;

 }
  let currentDay = document.querySelector(".day-name");
  currentDay.innerHTML = showcurrentDay();

function showDateformat(date) {
  let currentDate = date.getDate(); 
  
  let completeMonths = [
    "January", 
    "Febuary", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September",
    "November",
    "December"]

  let currentMonth = completeMonths[date.getMonth()];
  let currentYear = date.getFullYear();
  if (currentDate < 10) {
      currentDate = `0${currentDate}`;
  }
    
  let currentDateToday = `${currentMonth} ${currentDate}, ${currentYear}`;
  return  currentDateToday;
  }
currentDateToday = document.querySelector(".current-date");
currentDateToday.innerHTML = showDateformat(new Date());
  

function currentTimeformat(timestamp) {
  let date = new Date(timestamp);
    
  let currentHours = date.getHours();
  if (currentHours < 10) {
      currentHours = `0${currentHours}`;
  } 
    
  let currentMinutes = date.getMinutes();
  if (currentMinutes < 10) {
      currentMinutes = `0${currentMinutes}`;
  } 

  let currentTime = `${currentHours}: ${currentMinutes}`;
  return currentTime;
      
}


function showCurrenttemperature(response) {
  console.log(response.data);
  let currentCity = document.querySelector("#main-city");
  let currentDescription = document.querySelector(".description");
  let currentTemperature = document.querySelector(".today-temp");
  let currentHumidity = document.querySelector(".current-humid");
  let currentWindspeed = document.querySelector(".current-wind");
  let currentDateTime = document.querySelector(".current-time");
  currentCity.innerHTML = response.data.name;
  currentDescription.innerHTML = response.data.weather[0].description;
  currentTemperature.innerHTML = Math.round(response.data.main.temp);
  currentHumidity.innerHTML = response.data.main.humidity;
  currentWindspeed.innerHTML = Math.round(response.data.wind.speed);
  currentDateTime.innerHTML = currentTimeformat(response.data.dt * 1000);
}

let apiKey = "3312911a0b7ca102a3fa47c9257e12fa";
let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showCurrenttemperature);