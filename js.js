

let btn = document.querySelector(".menu");
btn.addEventListener("click",open)

function open(){

    let nav = document.querySelector(".header__nav")
    nav.classList.toggle("open");
}
//selecting the anchor tags using their class name
let navLink = document.querySelectorAll(".header__nav__link");

//adding an event listener to each anchor tag
navLink.forEach(item => {
    item.addEventListener("click", myFunctionTwo);
})

function myFunctionTwo() {
    let nav = document.querySelector(".header__nav")
    nav.classList.toggle("open")
}