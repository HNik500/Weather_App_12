const apikey = "4a75a9febc8ef81adc095af26184c800";
const weatherData = document.getElementById("weather-data");
const cityInputE1 = document.getElementById("city-input");
const formE1 = document.querySelector("form");


formE1.addEventListener('submit',(event)=>{
event.preventDefault() // prevents the page from re-looading every time you press submit button NOTE: we didnt use 
 // <buttton> insted we used <input with type of button//
   const cityValue = cityInputE1.value;
   getWeatherData(cityValue); 
});
async function getWeatherData(cityValue){
    try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`);
    if (!response.ok) {
        throw /*new*/ Error('network failure!');
    }
    const data = await response.json();
    console.log(data);
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    const details = [
        `feels like: ${Math.round(data.main.feels_like)} C`,
        `humidity: ${data.main.humidity} %`,
        `wind speed: ${data.wind.speed} m/s`,
    ];
     weatherData.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather-icon">`;
weatherData.querySelector(".temperature").textContent = `${temperature} C`
weatherData.querySelector(".description").textContent = `${description}.` 

weatherData.querySelector(".details").innerHTML = details.map(
(detail) =>`<div >${detail}</div>`).join("");
} catch (error) {
    console.error(error); // Log the error to the console for debugging
}

}
console.log("hi");

