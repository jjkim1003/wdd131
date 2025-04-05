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
