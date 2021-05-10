let countryButton = document.querySelector(".country-button");
let countryMenu = document.querySelector(".country-menu");

countryButton.addEventListener("click", togglecountryMenu);

function togglecountryMenu() {
    countryMenu.classList.toggle("hidden");
}
