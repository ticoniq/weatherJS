// Init weather object 
const weather = new Weather('Boston', 'US');
// Get weather on DOM load 
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
  weather.getWeather()
    .then(data => {
      console.log(data)
    })
    .catch(err => console.log(err));
}