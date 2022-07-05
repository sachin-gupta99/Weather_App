// import {api_key} from "./api.js";
const api_key =  'b6d9ffe96ef6f7492ece93f1868f9be7';

const fetchWeather = () => {
    let city = document.querySelector(".search-bar").value;

    displayWeather(city);
};

const displayWeather = (city) => {
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + api_key + '&units=metric';

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.querySelector('.city').innerText = data.name;
            document.querySelector('.temp').innerText = data.main.temp + ' °C';
            document.querySelector('.description').innerText = data.weather[0].description;
            document.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
            document.querySelector('.humidity').innerText = 'Humidity: ' + data.main.humidity + '%';
            document.querySelector('.wind').innerText = 'Wind Speed: ' + data.wind.speed + ' km/h';
            document.querySelector('.weather').classList.remove('loading');
            document.querySelector('body').style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${data.name}')`;
        })
        .catch(err => console.log(err));
}

document.querySelector('.search-button').addEventListener('click', fetchWeather);

document.querySelector('.search-bar').addEventListener("keyup", event => {
    if (event.key == "Enter")
        fetchWeather();
});

displayWeather('Warangal');