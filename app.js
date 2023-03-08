// init storage 
const storage = new Storage;
const weatherLocation = storage.getLocationData()
// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);
// Init UI
const ui = new UI();


// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//change location event 
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('state').value;

  // weather.changeLocation(city, country);
  // Change location 
  weather.changeLocation(city, country);

  // set location in LOcal storage 
  storage.setLocationData(city, country);

  // get and display weather 
  getWeather();

  // close model 
  $('#locModal').modal('hide');
});



function getWeather() {
  weather.getWeather()
    .then(results => {
      console.log(results);
      // const jsonStr = results;

      // const data = JSON.parse(jsonStr);
      // const weather = data.weather[0];

      // console.log(weather.id);

      // const data = JSON.parse(results);
      // console.log(`Weather Condition: ${results.weather[0].description}`);

      ui.paint(results);
    })
    .catch(err => console.log(err));
}