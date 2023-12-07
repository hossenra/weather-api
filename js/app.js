// donot use this
const API_KEY = `757d9fd5c665ea4cf4793a4b17e5bad8`;

const loadTemperature = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric
`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemparature(data));
};

const displayTemparature = (data) => {
  //   const temperature = document.getElementById("temperature");
  //   temperature.innerText = data.main.temp;
  setInnerTextById("temperature", data.main.temp);
  setInnerTextById("condition", data.weather[0].main);
  console.log(data.weather[0].main);
};

const setInnerTextById = (id, text) => {
  const temperature = document.getElementById(id);
  temperature.innerText = text;
};

document.getElementById("btn-search").addEventListener("click", function () {
  const searchField = document.getElementById("search-field");
  const city = searchField.value;
  // set city

  document.getElementById("city").innerText = city;

  loadTemperature(city);
});

loadTemperature("dhaka");
