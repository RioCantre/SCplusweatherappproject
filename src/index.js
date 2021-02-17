
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

  let currentMainIcon = document.querySelector(".main-description");
  let iconWeather = response.data.weather[0].icon;
  if (iconWeather === "01n") {
    document.querySelector(".weather-quote").innerHTML = `I like the kind of people who get excited over the stars at night.`;
    currentMainIcon.setAttribute("src", `image/01cs.png`);
    currentMainIcon.setAttribute("alt",  response.data.weather[0].icon);   
  } else  if (iconWeather === "01d") {
    document.querySelector(".weather-quote").innerHTML = ` Whenever you go, no matter the weather, always bring your own sunshine.`;
    currentMainIcon.setAttribute("src", `image/02cs.png`);
    currentMainIcon.setAttribute("alt",  response.data.weather[0].icon);   
  } else  if (iconWeather === "2d0" || iconWeather === "02n") {
    document.querySelector(".weather-quote").innerHTML = ` Clouds are the sky's imagination.`;
    currentMainIcon.setAttribute("src", `image/03c.png`);
    currentMainIcon.setAttribute("alt",  response.data.weather[0].icon);   
  } else  if (iconWeather === "03d" || iconWeather === "03n") {
    document.querySelector(".weather-quote").innerHTML = ` Clouds are the sky's imagination.`;
    currentMainIcon.setAttribute("src", `image/04bc.png`);
    currentMainIcon.setAttribute("alt",  response.data.weather[0].icon);   
  } else  if (iconWeather === "04d" || iconWeather === "04n") {
    document.querySelector(".weather-quote").innerHTML = ` Clouds are the sky's imagination.`;
    currentMainIcon.setAttribute("src", `image/04bc.png`);
    currentMainIcon.setAttribute("alt",  response.data.weather[0].icon);   
  } else  if (iconWeather === "09d" || iconWeather === "09n") {
    document.querySelector(".weather-quote").innerHTML = `Smell the rain.`;
    currentMainIcon.setAttribute("src", `image/07sr.png`);
    currentMainIcon.setAttribute("alt",  response.data.weather[0].icon);   
  } else  if (iconWeather === "10d" || iconWeather === "10n") {
    document.querySelector(".weather-quote").innerHTML = `Smell the rain.`;
    currentMainIcon.setAttribute("src", `image/06r.png`);
    currentMainIcon.setAttribute("alt",  response.data.weather[0].icon);   
  } else  if (iconWeather === "11d" || iconWeather === "11n") {
    document.querySelector(".weather-quote").innerHTML = `Lightning dances - Thunder applauds her.`;
    currentMainIcon.setAttribute("src", `image/08t.png`);
    currentMainIcon.setAttribute("alt",  response.data.weather[0].icon);   
  } else  if (iconWeather === "13d" || iconWeather === "13n") {
    document.querySelector(".weather-quote").innerHTML = `Snowflakes are kisses from heaven.`;
    currentMainIcon.setAttribute("src", `image/05s.png`);
    currentMainIcon.setAttribute("alt",  response.data.weather[0].icon);   
  } else  if (iconWeather === "50d" || iconWeather === "50n") {
    document.querySelector(".weather-quote").innerHTML = `One should see that all appearance is like mist and fog.`;
    currentMainIcon.setAttribute("src", `image/09f.png`);
    currentMainIcon.setAttribute("alt",  response.data.weather[0].icon);   
  }

}
function searchCity(currentTypecity){
  let apiKey = "3312911a0b7ca102a3fa47c9257e12fa";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${currentTypecity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showCurrenttemperature);

}


function currentCitysearch(event){
  event.preventDefault();
  let currentTypecity= document.querySelector("#city-input").value;
  searchCity(currentTypecity);

}




let searchForm = document.querySelector(".input-group");
searchForm.addEventListener("submit", currentCitysearch);

searchCity("Los Angeles");