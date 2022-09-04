let currentDate = new Date();
function formatDate(currentDate) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[currentDate.getDay()];
  let date = currentDate.getDate();

  let hour = currentDate.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = currentDate.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let formattedDate = `${day} ${date}, ${hour}:${minutes}`;

  return formattedDate;
}
let dateLine = document.querySelector(".current-date");
dateLine.innerHTML = formatDate(currentDate);

function displayWeatherCondition(response) {
  document.querySelector("h1").innerHTML = response.data.name;
}
function search(event) {
  event.preventDefault();
  let apiKey = "b6e8c5a5c8165e25aadf0593441ad658";
  let city = document.querySelector("#citySearch").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
let searchCity = document.querySelector("#search-city");
searchForm.addEventListener("submit", search);
