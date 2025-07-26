import { useState, useEffect } from 'react';
import { fetchWeather } from '../api/weatherApi';
import { fetchBackgroundImage } from '../api/unsplashApi';

const useWeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [backgroundImage, setBackgroundImage] = useState('');

  const handleSearch = () => {
    if (city.trim()) {
      getWeather(city.trim());
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const getWeather = async (cityName) => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchWeather(cityName);
      setWeatherData(data);
      const bgImage = await fetchBackgroundImage(data.name);
      if (bgImage) {
        setBackgroundImage(bgImage);
      }
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWeather('Warangal');
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (backgroundImage) {
      document.body.style.backgroundImage = backgroundImage;
    }
  }, [backgroundImage]);

  return {
    weatherData,
    city,
    setCity,
    loading,
    error,
    handleKeyPress,
    handleSearch,
  };
};

export default useWeatherApp; 