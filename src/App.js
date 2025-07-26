import React, { useState, useEffect } from 'react';
import './index.css';

const API_KEY = 'b6d9ffe96ef6f7492ece93f1868f9be7';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState('');

  const fetchWeather = async (cityName) => {
    if (!cityName) return;
    
    setLoading(true);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      
      if (response.ok) {
        setWeatherData(data);
        setBackgroundImage(`url('https://source.unsplash.com/1600x900/?${data.name}')`);
      } else {
        console.error('Error fetching weather data:', data.message);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchWeather(city);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      fetchWeather(city);
    }
  };

  useEffect(() => {
    fetchWeather('Warangal');
  }, []);

  useEffect(() => {
    if (backgroundImage) {
      document.body.style.backgroundImage = backgroundImage;
    }
  }, [backgroundImage]);

  return (
    <div className="weather-card">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyUp={handleKeyPress}
        />
        <button className="search-button" onClick={handleSearch}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
          </svg>
        </button>
      </div>
      
      <div className={`weather-info ${loading ? 'loading' : ''}`}>
        {weatherData && !loading && (
          <>
            <h2 className="city">{weatherData.name}</h2>
            <h2 className="temp">{Math.round(weatherData.main.temp)}°C</h2>
            <div className="description-icon">
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                alt="Weather icon"
                className="weather-icon"
              />
              <div className="weather-description">
                {weatherData.weather[0].description}
              </div>
            </div>
            <div className="humidity-info">
              Humidity: {weatherData.main.humidity}%
            </div>
            <div className="wind-info">
              Wind Speed: {weatherData.wind.speed} km/h
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;