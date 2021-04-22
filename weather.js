const weather = document.querySelector('.js-weather');

const API_KEY = "38fdf6141b8d73f0da5b073184fd9fdf";
const COORDS = 'coords';

function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function (response) {
        return response.json();
    }).then(function (json) {
        const temperature = json.main.temp;
        const place = json.main.place;
        weather.innerText = `${temperature} @ ${place}`;
    });
}

function saveCoords(corrdsObj) {
    localStorage.setItem("coords", corrdsObj);
}

function handleGeoSuccess(position) {
    console.log(position);
    const latitude = position.coords.latitude;
    const longtitude = position.coords.longitude;
    const coordsObj = {
        latitude: latitude,
        longtitude: longtitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longtitude);
}

function handleGeoError() {
    console.log("Cant access geo location")

}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadCoords() === null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);

    }
}

function init() {

}

init();