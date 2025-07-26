import React from 'react';
import './index.css';
import SearchBar from './components/SearchBar';
import Spinner from './components/Spinner';
import WeatherInfo from './components/WeatherInfo';
import useWeatherApp from './hooks/useWeatherApp';

function App() {
  const {
    weatherData,
    city,
    setCity,
    loading,
    error,
    handleKeyPress,
    handleSearch,
  } = useWeatherApp();

  return (
    <div className="weather-card">
      <SearchBar
        city={city}
        setCity={setCity}
        handleKeyPress={handleKeyPress}
        handleSearch={handleSearch}
        loading={loading}
      />
      <div className="weather-info">
        {loading ? (
          <Spinner />
        ) : error ? (
          <div style={{ textAlign: 'center', color: 'rgba(255, 255, 255, 0.8)', fontSize: '18px' }}>
            {error}
          </div>
        ) : weatherData ? (
          <WeatherInfo weatherData={weatherData} />
        ) : null}
      </div>
    </div>
  );
}

export default App;