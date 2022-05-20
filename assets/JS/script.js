const navbar = document.querySelector(".navbar");
const button = document.querySelector("div.menu_mobile");
const closeButton = document.querySelector("div.menu_mobile");

button.addEventListener("click", () => {
    navbar.classList.toggle("active");
})