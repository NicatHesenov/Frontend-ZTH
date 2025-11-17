const form = document.querySelector("form");
const cityInput = document.getElementById("cityInput");
const resultDiv = document.querySelector(".result");
const video = document.querySelector("#bg-video");
let apiKey = "4c0ee798f70daedc6eae6e4c6348e581";

const setBackground = (condition) => {
  let src = "";

  if (condition === "Clear") {
    src = "./assets/clearSky.mp4";
  } else if (condition === "Rain") {
    src = "./assets/rain.mp4";
  } else if (condition === "Clouds") {
    src = "./assets/cloud.mp4";
  } else if (condition === "Snow") {
    src = "./assets/snow.mp4";
  } else if (condition === "Mist") {
    src = "./assets/mist.mp4";
  } else {
    src = "./assets/default.mp4";
  }

  video.src = src;
  video.load();
  return src;
};
console.log(setBackground());

const weatherFetch = async (city) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=az`
  );
  const data = await res.json();
  console.log(data);

  return data;
};

const showCity = async () => {
  let value = cityInput.value.trim();
  if (value === "") return;

  const data = await weatherFetch(value);

  if (data.cod !== 200) {
    resultDiv.innerHTML = `<p>There is no city!</p>`;
    return;
  }

  resultDiv.innerHTML = `
      <h1 class="result__title">${data.name}</h1>
      <p class="result__deg">${data.main.temp} °C</p>
      <p class="result__description">${data.weather[0].description}</p>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
  `;

  const condition = data.weather[0].main;
  console.log(setBackground(condition));
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  showCity();

  cityInput.value = "";
});
