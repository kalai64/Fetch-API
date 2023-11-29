// print the country names from restcountries
const div = document.createElement("div");
div.className = "container";
const url = "https://restcountries.com/v3.1/all";
const res = fetch(url);
res
  .then((data) => data.json())
  .then((ele) => {
    for (let i = 0; i < ele.length; i++) {
      div.innerHTML += `<div class="row col-lg-4 col-sm-12">
        
        <div class="col">
        <div class="card">
        
        <H1 id="title" class="text-center">${ele[i].name.common}</H1>
       
        <img src="${ele[i].flags.png}" class="card-img-top" alt="country-flag">
  <div class="card-body">
    <p class="card-title"><b><i>Capital:${ele[i].capital}<b><i></p>
    <p class="card-title"><b><i>Region:${ele[i].region}<b><i></p>
    <p class="card-title"><b><i>Population:${ele[i].population}<b><i></p>
    <p class="card-title"><b><i>Country Code:${ele[i].cca3}<b><i></p>
    <button class = "btn btn-danger" onclick="getWeatherData(${ele[i].name.common})" >Click for weather</button>
  </div>
  
        </div>
        </div>`;
      document.body.append(div);
    }
  });
function getWeatherData(countryName) {
  var apikey = "d44a875a9a01f03862527db7a0fee990";
  var weatherurl = `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${apikey}`;

  fetch(weatherurl)
    .then((data) => data.json())
    .then((data1) => {
      var weatherCountryName = data1.name;

      if (weatherCountryName === countryName) {
        alert(
          `Weather in ${data1.name}: ${data1.main.temp_min} min:deg&c && ${data1.main.temp_max} max:deg&c`
        );
      } 
      else {
        alert("Country names do not match.");
      }
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      alert(`Error fetching weather data...`);
    });
}
