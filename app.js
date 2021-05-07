let swedenButton = document.querySelector(".sweden-button");
let swedenMenu = document.querySelector(".sweden-menu");

swedenButton.addEventListener("click", toggleswedenMenu);

function toggleswedenMenu() {
    swedenMenu.classList.toggle("hidden");
}
