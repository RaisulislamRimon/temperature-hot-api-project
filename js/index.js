const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
const apiKey = `e2cc60d2cacfaa6477be706f45f89d38`;

searchBtn.addEventListener("click", () => {
  const searchValue = searchInput.value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});
