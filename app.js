let swedenButton = document.querySelector(".sweden-button");
let swedenMenu = document.querySelector(".sweden-menu");

swedenButton.addEventListener("click", toggleswedenMenu);

function toggleswedenMenu() {
    swedenMenu.classList.toggle("hidden");
}
let englandButton = document.querySelector(".england-button");
let englandMenu = document.querySelector(".england-menu");

englandButton.addEventListener("click", toggleenglandMenu);

function toggleenglandMenu() {
    englandMenu.classList.toggle("hidden");
}