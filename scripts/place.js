// Dynamically get the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Dynamically get the last modified date of the document
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;

// Define static values for temperature and wind speed
const temperature = 15; // °C
const windSpeed = 10; // km/h

// Function to calculate wind chill
function calculateWindChill(temp, wind) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
}

// Check if wind chill calculation is applicable
if (temperature <= 10 && windSpeed > 4.8) {
    document.querySelector(".weather-card p:nth-child(5)").textContent = `Wind Chill: ${calculateWindChill(temperature, windSpeed).toFixed(1)}°C`;
} else {
    document.querySelector(".weather-card p:nth-child(5)").textContent = "Wind: N/A";
}