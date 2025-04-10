// filtered-temples.js

// Dynamically get the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Dynamically get the last modified date of the document
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;

// Hamburger menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    hamButton.innerHTML = hamButton.classList.contains('open') ? 'X' : '&#9776;';
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Seoul Korea",
        location: "Seoul, Korea",
        dedicated: "1985, December, 14",
        area: 28057,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/seoul-korea/400x250/seoul-korea-temple-lds-424784-wallpaper.jpg"
    },
    {
        templeName: "Houston Texas",
        location: "Houston, Texas",
        dedicated: "2000, August, 26",
        area: 33970,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/houston-texas/2018/400x250/houston-temple02.jpg"
    },
    {
        templeName: "Dallas Texas",
        location: "Dallas, Texas",
        dedicated: "1984, October, 19",
        area: 44207,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/dallas-texas/400x250/dallas-temple-lds-1048888-wallpaper.jpg"
    },
    {
        templeName: "San Antonio Texas",
        location: "San Antonio, Texas",
        dedicated: "2005, May, 22",
        area: 16800,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-antonio-texas/400x250/san-antonio-temple-lds-352484-wallpaper.jpg"
    },
    {
        templeName: "Provo City Center",
        location: "Provo, Texas",
        dedicated: "2016, March, 20",
        area: 85084,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/2018/400x250/Provo-City-Center-Temple08.jpg"
    }
];

function createTempleCard(filteredTemples) {
    const grid = document.querySelector(".res-grid");
    grid.innerHTML = "";

    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img")

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedication:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        grid.appendChild(card);
    });
}

function filterTemples(category) {
    let filtered = [];
    switch (category) {
        case 'old':
            filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
            break;
        case 'new':
            filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
            break;
        case 'large':
            filtered = temples.filter(t => t.area > 90000);
            break;
        case 'small':
            filtered = temples.filter(t => t.area < 10000);
            break;
        default:
            filtered = temples;
    }
    document.querySelector("main h2").textContent = category.charAt(0).toUpperCase() + category.slice(1);
    createTempleCard(filtered);
}

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const category = link.textContent.toLowerCase();
        filterTemples(category);

        document.querySelector("nav a.active")?.classList.remove("active");
        link.classList.add("active");
    });
});

createTempleCard(temples);
