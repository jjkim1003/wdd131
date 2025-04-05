document.addEventListener("DOMContentLoaded", () => {
    // New Product Array with id, name, and rating
    const products = [
        {
            id: "fc-1888",
            name: "flux capacitor",
            averagerating: 4.5
        },
        {
            id: "fc-2050",
            name: "power laces",
            averagerating: 4.7
        },
        {
            id: "fs-1987",
            name: "time circuits",
            averagerating: 3.5
        },
        {
            id: "ac-2000",
            name: "low voltage reactor",
            averagerating: 3.9
        },
        {
            id: "jj-1969",
            name: "warp equalizer",
            averagerating: 5.0
        }
    ];

    const select = document.getElementById("product");

    // Ensure the placeholder stays at the top
    const placeholder = document.createElement("option");
    placeholder.textContent = "Select a Product ...";
    placeholder.disabled = true;
    placeholder.selected = true;
    placeholder.value = "";
    select.appendChild(placeholder);

    // Dynamically add product options
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });

    // Footer auto-updates
    const year = document.getElementById("currentyear");
    const modified = document.getElementById("lastModified");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    if (modified) {
        modified.textContent = `Last Modification: ${document.lastModified}`;
    }
});
