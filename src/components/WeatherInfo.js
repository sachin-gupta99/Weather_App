import React from 'react';
import { GiWaterMill } from 'react-icons/gi';
import { GiWindmill } from 'react-icons/gi';

const WeatherInfo = ({ weatherData }) => {

  return (
    <>
      <h2 className="city">{weatherData.name}</h2>
      <h2 className="temp">{Math.round(weatherData.main.temp)}°C</h2>
      <div className="description-icon">
      <img
        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
        alt="weather icon"
        className="weather-icon"
      />

      <div className="weather-description">
        {weatherData.weather[0].description}
      </div>
      </div>
      <div className="humidity-info">
        <GiWaterMill size={22} />
        {weatherData.main.humidity}%
      </div>
      <div className="wind-info">
        <GiWindmill size={22} />
        {weatherData.wind.speed} km/h
      </div>
    </>
  );
};

export default WeatherInfo; 