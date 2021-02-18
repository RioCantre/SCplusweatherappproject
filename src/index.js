
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
  // console.log(response.data);
  let currentCity = document.querySelector("#main-city");
  let currentDescription = document.querySelector(".description");
  let currentTemperatureinCel = document.querySelector(".cel-temp");
  let currentTemperatureinFah = document.querySelector(".fah-temp");
  let currentHumidity = document.querySelector(".current-humid");
  let currentWindspeed = document.querySelector(".current-wind");
  let currentDateTime = document.querySelector(".current-time");
  let timestamp = response.data.dt;
  let timezone = response.data.timezone;
  let showtimeStamp = timestamp + timezone;
  let currenttimeStamp = showtimeStamp * 1000;
  // console.log(timestamp);
  // console.log(new Date());



  currentCity.innerHTML = response.data.name;
  currentDescription.innerHTML = response.data.weather[0].description;
  currentTemperatureinCel.innerHTML = Math.round(response.data.main.temp);
  currentTemperatureinFah.innerHTML = Math.round((response.data.main.temp *9)/5 + 32);
  currentHumidity.innerHTML = response.data.main.humidity;
  currentWindspeed.innerHTML = Math.round(response.data.wind.speed);
  currentDateTime.innerHTML = currentTimeformat(currenttimeStamp);


  let apiKey = "3312911a0b7ca102a3fa47c9257e12fa";
  let lat = response.data.coord.lat;
  let lon = response.data.coord.lon;
  let exclude = "current,alert";
  let apiforecastdailyUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${apiKey}&units=metric`;
  axios.get(apiforecastdailyUrl).then(showdailyForecast);

  



  let currentMainIcon = document.querySelector(".main-description");
  let iconWeather = response.data.weather[0].icon;
  if (iconWeather === "01n") {
    document.querySelector(".weather-quote").innerHTML = `"I like the kind of people who get excited over the stars at night."`;
    currentMainIcon.setAttribute("src", `image/01cs.png`);
    currentMainIcon.setAttribute("alt",  response.data.weather[0].icon);
    document.querySelector("#background").classList.add("weather1").classList.remove("weather2","weather3");
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
  let forecastDaynames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return forecastDaynames[day];
}



function showdailyForecast(response) {
  let currentForecast = document.querySelector("#days");
  let forecastDaily = null;
  currentForecast.innerHTML = null;
  console.log(response.data);
  
  for (index = 1; index < 7; index ++) {
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

function searchCity(currentTypecity){
  let apiKey = "3312911a0b7ca102a3fa47c9257e12fa";
  let apicurrentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${currentTypecity}&appid=${apiKey}&units=metric`;
  axios.get(apicurrentUrl).then(showCurrenttemperature);
  
  let apiforecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${currentTypecity}&appid=${apiKey}&units=metric`;
  axios.get(apiforecastUrl).then(showdailyForecast);
}

function currentCitysearch(event){
  event.preventDefault();
  let currentTypecity= document.querySelector("#city-input").value;
  searchCity(currentTypecity);

}
let searchForm = document.querySelector(".input-group");
searchForm.addEventListener("submit", currentCitysearch);


function clickPositionlocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(currentLocation);
}

function currentLocation(position){
  let apiKey = "3312911a0b7ca102a3fa47c9257e12fa";
  let currentlat = position.coords.latitude;
  let currentlon = position.coords.longitude;
  let positionUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${currentlat}&lon=${currentlon}&units=metric&appid=${apiKey}`;
  axios.get(positionUrl).then(showCurrenttemperature);
}
let currentPosition = document.querySelector("#current-input");
currentPosition.addEventListener("click", clickPositionlocation);

searchCity("New York");
