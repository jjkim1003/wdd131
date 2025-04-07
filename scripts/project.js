// Set current year and last modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Updated: ${document.lastModified}`;

// Favorite button interactivity with localStorage
const favoriteBtn = document.getElementById("favoriteBtn");

favoriteBtn.addEventListener("click", () => {
    localStorage.setItem("favoriteDestination", "Seoul");
    favoriteBtn.textContent = "❤️ Seoul is your favorite!";
});
