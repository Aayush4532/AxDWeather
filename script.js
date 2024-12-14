const inputTaken = document.getElementById("searchInput");
// const output = document.getElementsByClassName("output")[0];
const click = document.getElementById("submit");
const condition = document.getElementById("condition");
const speed = document.getElementById("wind-speed");
const humidity = document.getElementById("humidity");
const degree = document.getElementById("temp");
click.addEventListener('click', () => {
    const city = inputTaken.value;
    // output.innerHTML = "";
    fetchData(city);
});
const fetchData = async (city) => {
  const url =
    `https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=f`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "177e0a6d42mshb45b036233d5984p1042b0jsnefd4c1ffb8b8",
      "x-rapidapi-host": "yahoo-weather5.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    condition.textContent = result.current_observation.condition.text;
    speed.textContent = result.current_observation.wind.speed;
    humidity.textContent = result.current_observation.atmosphere.humidity;
    degree.textContent = result.current_observation.condition.temperature;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};