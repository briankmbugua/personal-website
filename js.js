//function to toggle the open class in the nav
function toggleMenu() {
    let nav = document.querySelector(".header__nav");
    nav.classList.toggle("open");
}

//linking the toggleMenu function with menu button
let btn = document.querySelector(".menu");
btn.addEventListener("click",toggleMenu)


//linking the toggleMenu function with each link in the menu to close it
//when clicked
let navLink = document.querySelectorAll(".header__nav__link");
navLink.forEach(item => {
    item.addEventListener("click", toggleMenu);
})

let closeBtn = document.querySelector(".header__nav__close")

closeBtn.addEventListener("click",toggleMenu)