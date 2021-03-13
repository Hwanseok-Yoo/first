const weather = document.querySelector(".js-wheather");

const API_KEY = "d6a0e70583bf68da595725595de2036c";
const COORDS = 'coords';

function getWheather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature}, ${place}`;
    });
}

function saveCords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}


function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCords(coordsObj);
    getWheather(latitude, longitude)
}

function handleGeoError(){
    console.log("Can't");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}


function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);

    if(loadedCords === null){
        console.log("null");
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadedCords);
        getWheather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();