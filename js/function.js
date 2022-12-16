let timeAr;
let timeCatar;
let addHours;
let time;
/* Carousel */
window.onload = function () {
    var URLCurrent = window.location.origin;
    let tempertureValue = document.getElementById('tempertureValue');
    let tempertureDescription = document.getElementById('tempertureDescription');
    let locationDescription = document.getElementById('locationDescription');
    let locationIconAnimated = document.getElementById('locationIconAnimated');
    let speedTimeDescription = document.getElementById('speedTimeDescription');
    let tempertureValueCatar = document.getElementById('tempertureValueCatar');
    let tempertureDescriptionCatar = document.getElementById('tempertureDescriptionCatar');
    let locationDescriptionCatar = document.getElementById('locationDescriptionCatar');
    let locationIconAnimatedCatar = document.getElementById('locationIconAnimatedCatar');
    let speedTimeDescriptionCatar = document.getElementById('speedTimeDescriptionCatar');
    timeNow(); 
    loopTime();
    
    if(document.getElementsByClassName('section-carousel').length>0){
        const IMAGENES = [
            'img/maradonaMundial.jpg',
            'img/messiYMaradona.jpg',
            'img/copaDelMundo.jpg'
        ];
        const TIEMPO_INTERVALO_MILESIMAS_SEG = 2500;
        let posicionActual = 0;
        let $imagen = document.querySelector('#imagen');
        let intervalo;
        playIntervalo()
        function pasarFoto() {
            if(posicionActual >= IMAGENES.length - 1) {
                posicionActual = 0;
            } else {
                posicionActual++;
            }
            renderizarImagen();
        }
        function renderizarImagen () {
            $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
        }
    
        function playIntervalo() {
            intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
        }
        renderizarImagen();
    }

    /* if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            var lat;
            var lon;
            lon = position.coords.longitude;
            lat = position.coords.latitude; */
            const url = `https://api.openweathermap.org/data/2.5/weather?q=Buenos Aires&lang=es&units=metric&APPID=99a35b79022d86833f87b1bf4d467925`;

            fetch(url)
                .then(response => { return response.json()})
                .then(data => {
                    let temp = Math.round(data.main.temp);
                    tempertureValue.textContent = `${temp} °C`; 
                    let description = data.weather[0].description;
                    tempertureDescription.textContent =  description;
                    let location = data.name
                    locationDescription.textContent = location.toUpperCase();
                    let speed = data.wind.speed;
                    speedTimeDescription.textContent = `${speed} m/s`;
                   
                    switch (data.weather[0].main) {
                        case 'Clear':
                            locationIconAnimated.src = URLCurrent+'/img/amcharts_weather_icons_1.0.0/animated/day.svg'
                            break;
                        case 'Clouds':
                            locationIconAnimated.src = URLCurrent+'/img/amcharts_weather_icons_1.0.0/animated/cloudy-day-3.svg'
                            break;
                        case 'Thunderstorm':
                            locationIconAnimated.src= URLCurrent+'/img/amcharts_weather_icons_1.0.0/animated/thunder.svg'
                            break;
                        case 'Drizzle':
                            locationIconAnimated.src= URLCurrent+'/img/amcharts_weather_icons_1.0.0/animated/rainy-2.svg'
                            break;
                        case 'Rain':
                            locationIconAnimated.src= URLCurrent+'/img/amcharts_weather_icons_1.0.0/animated/rainy-7.svg'
                            break;
                        case 'Snow':
                            locationIconAnimated.src= URLCurrent+'/img/amcharts_weather_icons_1.0.0/animated/snowy-6.svg'
                            break;                        
                        case 'Atmosphere':
                            locationIconAnimated.src= URLCurrent+'/img/amcharts_weather_icons_1.0.0/animated/weather.svg'
                            break;  
                        default:
                            locationIconAnimated.src= URLCurrent+'/img/amcharts_weather_icons_1.0.0/animated/cloudy-day-1.svg'
                            break;
                    }
                    
                })
                .catch(error =>{
                    console.log(error
                        )
                })
            const urlCatar = `https://api.openweathermap.org/data/2.5/weather?q=Catar&lang=es&units=metric&APPID=99a35b79022d86833f87b1bf4d467925`;

            fetch(urlCatar)
                .then(response => { return response.json()})
                .then(dataCatar => {
                    let temp = Math.round(dataCatar.main.temp);
                    tempertureValueCatar.textContent = `${temp} °C`; 
                    let description = dataCatar.weather[0].description;
                    tempertureDescriptionCatar.textContent =  description;
                    let location = dataCatar.name
                    locationDescriptionCatar.textContent = location.toUpperCase();
                    let speed = dataCatar.wind.speed;
                    speedTimeDescriptionCatar.textContent = `${speed} m/s`;
                    switch (dataCatar.weather[0].main) {
                        case 'Clear':
                            locationIconAnimatedCatar.src =  URLCurrent+'/img/amcharts_weather_icons_1.0.0/animated/day.svg'
                            break;
                        case 'Clouds':
                            locationIconAnimatedCatar.src =  URLCurrent+'/img/amcharts_weather_icons_1.0.0/animated/cloudy-day-3.svg'
                            break;
                        case 'Thunderstorm':
                            locationIconAnimatedCatar.src= URLCurrent+'/img/amcharts_weather_icons_1.0.0/animated/thunder.svg'
                            break;
                        case 'Drizzle':
                            locationIconAnimatedCatar.src= URLCurrent+'/img/amcharts_weather_icons_1.0.0/animated/rainy-2.svg'
                            break;
                        case 'Rain':
                            locationIconAnimatedCatar.src= URLCurrent+'/img/amcharts_weather_icons_1.0.0/animated/rainy-7.svg'
                            break;
                        case 'Snow':
                            locationIconAnimatedCatar.src= URLCurrent+'/img/amcharts_weather_icons_1.0.0/animated/snowy-6.svg'
                            break;                        
                        case 'Atmosphere':
                            locationIconAnimatedCatar.src= URLCurrent+'/img/amcharts_weather_icons_1.0.0/animated/weather.svg'
                            break;  
                        default:
                            locationIconAnimatedCatar.src= URLCurrent+'/img/amcharts_weather_icons_1.0.0/animated/cloudy-day-1.svg'
                            break;
                    }
                    
                })
                .catch(error =>{
                    console.log(error
                        )
                })
    /*     })
    } */



} 
async function timeNow(){
    try {
        const responseTimeAr = await fetch("http://worldtimeapi.org/api/timezone/America/Argentina/Salta");
        if(responseTimeAr.status===200){
            const responseTimeArJson = await responseTimeAr.json();
            timeAr = responseTimeArJson.datetime;
        }            
    } catch (error) {
        console.log(error)
    }



}
function loopTime() {
    setInterval(setTimeHoursNow, 1000);
}
function setTimeHoursNow(){
    timeAr = new Date(timeAr);
    time = timeAr.getTime();
    addHours = (300 * 60) * 6000;
    timeCatar = new Date(time + addHours);

    document.getElementById('hoursAr').innerHTML = timeAr.getHours() < 10 ? '0' + timeAr.getHours() : timeAr.getHours();
    document.getElementById('minutesAr').innerHTML = timeAr.getMinutes() < 10 ? '0' + timeAr.getMinutes() : timeAr.getMinutes();
    document.getElementById('secondsAr').innerHTML = timeAr.getSeconds() < 10 ? '0' + timeAr.getSeconds() : timeAr.getSeconds();
    document.getElementById('typeTimeAr').innerHTML = timeAr.getHours() >= 12 ? 'PM' : 'AM'; 
    document.getElementById('hoursCa').innerHTML = timeCatar.getHours() < 10 ? '0' + timeCatar.getHours() : timeCatar.getHours();
    document.getElementById('minutesCa').innerHTML = timeCatar.getMinutes() < 10 ? '0' + timeCatar.getMinutes() : timeCatar.getMinutes();
    document.getElementById('secondsCa').innerHTML = timeCatar.getSeconds() < 10 ? '0' + timeCatar.getSeconds() : timeCatar.getSeconds();
    document.getElementById('typeTimeCa').innerHTML = timeCatar.getHours() >= 12 ? 'PM' : 'AM';
    timeNow();  
}
async function weather(){
        try {
            const response = await fetch('https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=43e59687&&app_key=99a35b79022d86833f87b1bf4d467925');
            if(response.status===200){
                const responseJson = await response.json();
                console.log(responseJson)
            }            
        } catch (error) {
            console.log(error)
        }
}

/* 
Api Email
https://formsubmit.co/ 
Correo: proyectocodoacodo2022@gmail.com
Password: CodoaCodoProyecto2022

Api Weather
https://openweathermap.org/
key f0d11929539a134a6fd2e2b40c69e357

Api Hours
https://worldtimeapi.org/pages/examples

geolocation
https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition

*/