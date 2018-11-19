
//(() => {
    const home ="Kyiv";
    const xhr = new XMLHttpRequest();
    let weather;

    function getWeather(city) {
        xhr.addEventListener("load",xhrCallback);
        xhr.open("GET","http:/api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=e24dd547391d7f84f49914f94d912bb9");
        xhr.send();
    }
    function sendRequest(arg) {
        if(!arg){
        let requested = document.getElementById("home").value;
        if(requested){
        getWeather(requested);
        }
        else {
            getWeather(arg);
        }
        }
    }
    function xhrCallback() {
        weather = JSON.parse(xhr.responseText);
        console.log(weather);
        const cityName = weather.name;
        const clouds = weather.weather[0].description;
        const windSpeed = weather.wind.speed;
        const temp = -273 + weather.main.temp;
        document.getElementById("city_name").innerText = cityName; //city name
        document.getElementById("clouds").innerText = clouds; //clouds
        document.getElementById("wind_speed").innerText = windSpeed; //wind-speed
        document.getElementById("degree").innerText = temp.toFixed(2) + "C"; //degree
    }
    function init(){
        getWeather(home);
    };
    init();
//})
//();
