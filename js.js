//function to toggle the open class in the nav

function lockScroll() {
    document.body.classList.toggle("lock-scroll");
}
function toggleMenu() {
    let nav = document.querySelector(".header__nav");
    let innerWidth = window.innerWidth;
    if(innerWidth<=500){
        nav.classList.toggle("open");
        lockScroll();   
    }
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