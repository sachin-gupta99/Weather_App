const API_KEY = 'b6d9ffe96ef6f7492ece93f1868f9be7';

export const fetchWeather = async (cityName) => {
  if (!cityName) return null;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  if (response.ok) return data;
  throw new Error(data.message || 'City not found');
}; 