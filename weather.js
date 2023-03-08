class Weather {
  constructor(city, country){
    this.apiKey = '888173debf1997abcf5b69379e69ce12';
    this.city = city;
    this.country = country
  }

  // Fetch weather 
  async getWeather() {
    // const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${state}&limit=5&${this.apiKey}`);

    // const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${this.city},${this.state},${this.country}&limit=&appid=${this.apiKey}`);

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
  }

  // change weather location 
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}