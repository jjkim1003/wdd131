document.addEventListener("DOMContentLoaded", () => {
    // Update review count in localStorage
    let count = localStorage.getItem("reviewCount");

    if (!count) {
        count = 1;
    } else {
        count = parseInt(count) + 1;
    }

    localStorage.setItem("reviewCount", count);

    // Display it if there's a place to show it
    const countDisplay = document.getElementById("reviewCount");

    if (countDisplay) {
        countDisplay.textContent = `You have submitted ${count} review(s).`;
    }

    // Update footer year
    const year = document.getElementById("currentyear");
    const modified = document.getElementById("lastModified");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    if (modified) {
        modified.textContent = `Last Modification: ${document.lastModified}`;
    }
});
