// Dynamically get the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Dynamically get the last modified date of the document
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;

// Define static values for temperature and wind speed
const temperature = 15; // °C
const windSpeed = 10; // km/h

// Function to calculate wind chill
function calculateWindChill(temp, wind) {
    return (temp <= 10 && wind > 4.8)
        ? (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1) + "°C"
        : "N/A";
}

// Select the weather card element
const weatherCard = document.querySelector(".weather-card");

// Update the weather card content dynamically
weatherCard.innerHTML = `
    <h2>Weather</h2>
    <img class="weather-icon" src="images/weather.svg" alt="Weather Icon">
    <p><strong>Temperature:</strong> ${temperature}°C</p>
    <p><strong>Conditions:</strong> Partly Cloudy</p>
    <p><strong>Wind:</strong> ${windSpeed} km/h</p>
    <p><strong>Wind Chill:</strong> ${calculateWindChill(temperature, windSpeed)}</p>
`;
