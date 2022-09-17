const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
const apiKey = "b0177670c5173ceba5d7a1e2a15b3154";

searchBtn.addEventListener("click", () => {
  const searchValue = searchInput.value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});
