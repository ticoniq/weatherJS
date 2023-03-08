class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewpoint= document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }

  paint(weathers) {
    this.location.textContent = `${weathers.name}`;


    // const jsonStr = weathers.weather;

    // const data = JSON.parse(jsonStr);
    // const weatherData = data.weather[1];
    
    
    this.desc.textContent = `${weathers.weather[0].description}`;

    this.string.textContent = `${weathers.main.temp}`;
    this.humidity.textContent = `Relative Humidity ${weathers.main.humidity}`;
    this.dewpoint.textContent = `Pressure: ${weathers.main.pressure}`;
    this.feelsLike.textContent = `Feels Like: ${weathers.main.feels_like}`;
    this.wind.textContent = `Wind: (Deg, ${weathers.wind.deg}) : (Speed, ${weathers.wind.speed})`;
  }
}