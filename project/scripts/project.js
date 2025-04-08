// Set current year and last modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Updated: ${document.lastModified}`;

// Favorite button interactivity with localStorage
const favoriteBtn = document.getElementById("favoriteBtn");

favoriteBtn.addEventListener("click", () => {
    localStorage.setItem("favoriteDestination", "Seoul");
    favoriteBtn.textContent = "❤️ Seoul is your favorite!";
});

// Gallery Filter Logic
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryImages = document.querySelectorAll(".gallery-grid img");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Remove active state from all buttons
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const category = button.getAttribute("data-category");

        galleryImages.forEach(img => {
            const imgCategory = img.getAttribute("data-category");
            if (category === "all" || imgCategory === category) {
                img.style.display = "block";
            } else {
                img.style.display = "none";
            }
        });
    });
});

