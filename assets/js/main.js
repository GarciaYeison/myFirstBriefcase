const iconMenu = document.querySelector(".icon_menu");
const menu = document.querySelector(".menu");

function checkClass() {
    menu.classList.toggle("menu_show");
}

iconMenu.addEventListener("click", checkClass);