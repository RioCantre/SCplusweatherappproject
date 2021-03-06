
function showCurrentDay(timestamp){ 
  let day = new Date(timestamp);
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

function showDateFormat(timestamp) {
  let day = new Date(timestamp);
  let currentDate = day.getDate(); 
  
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

  let currentMonth = completeMonths[day.getMonth()];
  let currentYear = day.getFullYear();
  if (currentDate < 10) {
      currentDate = `0${currentDate}`;
  }
    
  let fullDateToday = `${currentMonth} ${currentDate}, ${currentYear}`;
  return  fullDateToday;
  }


function currentTimeFormat(timestamp) {
  let date = new Date(timestamp);
    
  let currentHours = date.getUTCHours();
  if (currentHours < 10) {
      currentHours = `0${currentHours}`;
  } 
    
  let currentMinutes = date.getUTCMinutes();
  if (currentMinutes < 10) {
      currentMinutes = `0${currentMinutes}`;
  } 

  let currentTime = `${currentHours}: ${currentMinutes} `;
  return currentTime;
      
}




function showCurrentTemperature(response) {
  // console.log(response.data);

  let currentCity = document.querySelector("#main-city");
  let currentDescription = document.querySelector(".description");
  let currentTemperatureInCel = document.querySelector(".cel-temp");
  let currentTemperatureInFah = document.querySelector(".fah-temp");
  let currentHumidity = document.querySelector(".current-humid");
  let currentWindspeed = document.querySelector(".current-wind");

  let currentDateTime = document.querySelector(".current-time");
  let timeStamp = response.data.dt;
  let timeZone = response.data.timezone;
  let showTimeStamp = timeStamp + timeZone;
  let currentTimeStamp = showTimeStamp * 1000;


  let  currentDateToday = document.querySelector(".current-date");
  let currentDay = document.querySelector(".day-name");
  
  
  
  
  
  currentCity.innerHTML = response.data.name;
  currentDescription.innerHTML = response.data.weather[0].description;
  currentTemperatureInCel.innerHTML = Math.round(response.data.main.temp);
  currentTemperatureInFah.innerHTML = Math.round((response.data.main.temp *9)/5 + 32);
  currentHumidity.innerHTML = response.data.main.humidity;
  currentWindspeed.innerHTML = Math.round(response.data.wind.speed);
  currentDateTime.innerHTML = currentTimeFormat(currentTimeStamp);
  currentDateToday.innerHTML = showDateFormat(currentTimeStamp);
  currentDay.innerHTML = showCurrentDay(currentTimeStamp);


  let apiKey = "3312911a0b7ca102a3fa47c9257e12fa";
  let lat = response.data.coord.lat;
  let lon = response.data.coord.lon;
  let exclude = "current,minutely,hourly,alerts";
  let apiForecastDailyUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${apiKey}&units=metric`;
  axios.get(apiForecastDailyUrl).then(showDailyForecast);

  



  let currentMainIcon = document.querySelector(".main-description");
  let iconWeather = response.data.weather[0].icon;
  if (iconWeather === "01n") {
    document.querySelector(".weather-quote").innerHTML = `"I like the kind of people who get excited over the stars at night."`;
    currentMainIcon.setAttribute("src", `image/01cs.png`);
    currentMainIcon.setAttribute("alt",  response.data.weather[0].icon);
    document.querySelector("#background").classList.add("weather1")
    document.querySelector("#background").classList.remove("weather2","weather3");
  } else  if (iconWeather === "01d") {
    document.querySelector(".weather-quote").innerHTML = `"Wherever you go, no matter the weather, always bring your own sunshine."`;
    currentMainIcon.setAttribute("src", `image/02cs.png`);
    currentMainIcon.setAttribute("alt",  response.data.weather[0].icon);   
    document.querySelector("#background").classList.add("weather1")
    document.querySelector("#background").classList.remove("weather2","weather3");
  } else  if (iconWeather === "02d" || iconWeather === "02n") {
    document.querySelector(".weather-quote").innerHTML = ` "Clouds are the sky's imagination."`;
    currentMainIcon.setAttribute("src", `image/03c.png`);
    currentMainIcon.setAttribute("alt",  response.data.weather[0].icon);   
    document.querySelector("#background").classList.add("weather2")
    document.querySelector("#background").classList.remove("weather1","weather3");
  } else  if (iconWeather === "03d" || iconWeather === "03n") {
    document.querySelector(".weather-quote").innerHTML = ` "Clouds are the sky's imagination."`;
    currentMainIcon.setAttribute("src", `image/04bc.png`);
    currentMainIcon.setAttribute("alt",  response.data.weather[0].icon);   
    document.querySelector("#background").classList.add("weather2")
    document.querySelector("#background").classList.remove("weather1","weather3");
  } else  if (iconWeather === "04d" || iconWeather === "04n") {
    document.querySelector(".weather-quote").innerHTML = ` "Clouds are the sky's imagination."`;
    currentMainIcon.setAttribute("src", `image/04bc.png`);
    currentMainIcon.setAttribute("alt",  response.data.weather[0].icon);   
    document.querySelector("#background").classList.add("weather2")
    document.querySelector("#background").classList.remove("weather1","weather3");
  } else  if (iconWeather === "09d" || iconWeather === "09n") {
    document.querySelector(".weather-quote").innerHTML = `"Smell the rain."`;
    currentMainIcon.setAttribute("src", `image/07sr.png`);
    currentMainIcon.setAttribute("alt",  response.data.weather[0].icon);   
    document.querySelector("#background").classList.add("weather3")
    document.querySelector("#background").classList.remove("weather1","weather2");
  } else  if (iconWeather === "10d" || iconWeather === "10n") {
    document.querySelector(".weather-quote").innerHTML = `"Smell the rain."`;
    currentMainIcon.setAttribute("src", `image/06r.png`);
    currentMainIcon.setAttribute("alt",  response.data.weather[0].icon);   
    document.querySelector("#background").classList.add("weather3")
    document.querySelector("#background").classList.remove("weather1","weather2");
  } else  if (iconWeather === "11d" || iconWeather === "11n") {
    document.querySelector(".weather-quote").innerHTML = `"Lightning dances - Thunder applauds her."`;
    currentMainIcon.setAttribute("src", `image/08t.png`);
    currentMainIcon.setAttribute("alt",  response.data.weather[0].icon);   
    document.querySelector("#background").classList.add("weather3")
    document.querySelector("#background").classList.remove("weather1","weather2");
  } else  if (iconWeather === "13d" || iconWeather === "13n") {
    document.querySelector(".weather-quote").innerHTML = `"Snowflakes are kisses from heaven."`;
    currentMainIcon.setAttribute("src", `image/05sn.png`);
    currentMainIcon.setAttribute("alt",  response.data.weather[0].icon);   
    document.querySelector("#background").classList.add("weather1")
    document.querySelector("#background").classList.remove("weather3","weather2");
  } else  if (iconWeather === "50d" || iconWeather === "50n") {
    document.querySelector(".weather-quote").innerHTML = `"One should see that all appearance is like mist and fog."`;
    currentMainIcon.setAttribute("src", `image/09f.png`);
    currentMainIcon.setAttribute("alt",  response.data.weather[0].icon);   
    document.querySelector("#background").classList.add("weather1")
    document.querySelector("#background").classList.remove("weather3","weather2");
  }

}         

function forecastDays(timestamp) {
  let forecastDate = new Date(timestamp * 1000);
  let day = forecastDate.getDay();
  let forecastDayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return forecastDayNames[day];
}



function showDailyForecast(response) {
  let currentForecast = document.querySelector("#days");
  let forecastDaily = null;
  currentForecast.innerHTML = null;
  // console.log(response.data);
  
  for (let index = 1; index < 7; index ++) {
    forecastDaily = response.data.daily[index];
    let forecast = forecastDays(forecastDaily.dt);
    let dailyIcon = forecastDaily.weather[0].icon;
    if (dailyIcon === "01n") {
      forecastDailySrc = `image/01cs.png`;
    } else if (dailyIcon === "01d"){
      forecastDailySrc = `image/02cs.png`;
    } else if (dailyIcon === "02d" || dailyIcon === "02n"){
      forecastDailySrc = `image/03c.png`;
    } else if (dailyIcon === "03d" || dailyIcon === "03n"){
      forecastDailySrc = `image/04bc.png`;
    } else if (dailyIcon === "04d" || dailyIcon === "04n"){
      forecastDailySrc = `image/04bc.png`;
    } else if (dailyIcon === "09d" || dailyIcon === "09n"){
      forecastDailySrc = `image/07sr.png`;
    } else if (dailyIcon === "10d" || dailyIcon === "10n"){
      forecastDailySrc = `image/06r.png`;
    } else if (dailyIcon === "11d" || dailyIcon === "11n"){
      forecastDailySrc = `image/08t.png`;
    } else if (dailyIcon === "13d" || dailyIcon === "13n"){
      forecastDailySrc = `image/05sn.png`;
    } else if (dailyIcon === "50d" || dailyIcon === "50n"){
      forecastDailySrc = `image/09f.png`;
    }


    currentForecast.innerHTML += `
    <section>
      <h3 class="weekname"> ${forecast}</h3>
      <img class="outcome" src="${forecastDailySrc}" />
        &nbsp;&nbsp;&nbsp;&nbsp;
      <span class="degree">
        <span class="degree-cel"> ${Math.round(forecastDaily.temp.min)}</span>° | <span class="degree-fah">${Math.round(forecastDaily.temp.max)}</span>°
      </span>
    </section>`


  }
}

function searchCity(currentTypeCity){
  let apiKey = "3312911a0b7ca102a3fa47c9257e12fa";
  let apiCurrentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${currentTypeCity}&appid=${apiKey}&units=metric`;
  axios.get(apiCurrentUrl).then(showCurrentTemperature);
  
  // let apiforecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${currentTypecity}&appid=${apiKey}&units=metric`;
  // axios.get(apiforecastUrl).then(showdailyForecast);
}

function currentCitySearch(event){
  event.preventDefault();
  let currentTypeCity = document.querySelector("#city-input").value;
  searchCity(currentTypeCity);

}
let searchForm = document.querySelector(".input-group");
searchForm.addEventListener("submit", currentCitySearch);


function clickPositionLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(currentLocation);
}

function currentLocation(position){
  let apiKey = "3312911a0b7ca102a3fa47c9257e12fa";
  let currentLat = position.coords.latitude;
  let currentLon = position.coords.longitude;
  let positionUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLat}&lon=${currentLon}&units=metric&appid=${apiKey}`;
  axios.get(positionUrl).then(showCurrentTemperature);
}
let currentPosition = document.querySelector("#current-input");
currentPosition.addEventListener("click", clickPositionLocation);

searchCity("New York");
