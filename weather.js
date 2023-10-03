const apiKey = "270400ef1f7a763ab027ad1a87ae2dd4";

const checkWeather = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayWeather(data))
}


const displayWeather = data => {
    document.querySelector('.city').innerText = `${data.name ? data.name : alert(`No city found, Enter a valid City`)}`;
    document.querySelector('.temp').innerText = `${Math.round(`${data.main.temp}`)}°C`;
    document.querySelector('.humidity').innerText = `${data.main.humidity}%`;
    document.querySelector('.wind').innerText = `${data.wind.speed}km/h`;

    const weatherIcon = document.querySelector('.weather-icon');
    if (data.weather[0].main === "Clouds") {
        weatherIcon.src = 'weather-app-img/images/clouds.png'
    }
    else if (data.weather[0].main === "Clear") {
        weatherIcon.src = 'weather-app-img/images/clear.png'
    }
    else if (data.weather[0].main === "Rain") {
        weatherIcon.src = 'weather-app-img/images/rain.png'
    }
    else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = 'weather-app-img/images/drizzle.png'
    }
    else if (data.weather[0].main === "Mist") {
        weatherIcon.src = 'weather-app-img/images/mist.png'
    }
    else if (data.weather[0].main === "Haze") {
        weatherIcon.src = 'weather-app-img/images/fog.png'
    }

}

const searchInput = document.querySelector('.search input');

searchInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const searchValue = searchInput.value;
        checkWeather(searchValue);
    }
});

const searchBtn = document.querySelector('.search button').addEventListener('click', function () {
    const searchValue = searchInput.value;
    checkWeather(searchValue);
});

checkWeather('dhaka');
