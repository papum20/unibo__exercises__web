const apiKey = "d18155931fd4c5f376ce0ab064b92830";
const city = "Milano";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
fetch(apiUrl)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));