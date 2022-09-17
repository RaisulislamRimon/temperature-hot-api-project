const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
const apiKey = `fb60bf5f1859a5113bb163c7950e2b55`;

searchBtn.addEventListener("click", () => {
  const searchValue = searchInput.value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => displayWeather(data))
    .catch((err) => console.log(err));
});

const displayWeather = (data) => {
  const weatherImg = document.getElementById("weather-img");
  const cityName = document.getElementById("city-name");
  const temperature = document.getElementById("temperature");

  cityName.innerText = data.name;
  temperature.innerText = data.main.temp;
};
